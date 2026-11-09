/* eslint-disable react/no-unknown-property, react/prop-types */
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";

import FloatingElements from "./FloatingElements";
import WorkstationModel from "./WorkstationModel";
import { CAMERA, COLORS, FIT, LIGHTS, MODEL, MOTION, PROJECTS_ANCHOR } from "./workstationConfig";

const { clamp, damp, degToRad } = MathUtils;

// Camera distance at which the whole model fits a container of this aspect.
const fitDistance = (aspect) => {
  const tan = Math.tan(degToRad(CAMERA.fov / 2));
  const forHeight = FIT.height / 2 / tan;
  const forWidth = FIT.width / 2 / (tan * aspect);
  return Math.max(forHeight, forWidth) * FIT.margin + FIT.depth / 2;
};

// Cursor position kept in a ref, so pointer movement never re-renders React.
const usePointerTarget = (enabled) => {
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled || !window.matchMedia("(hover: hover)").matches) return undefined;
    const onMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  return target;
};

const WorkstationInteractions = ({ reducedMotion, onLoaded, onMonitorHover }) => {
  const rig = useRef();
  const glow = useRef();
  const screenMaterial = useRef(null);
  const hovered = useRef(false);
  const pointer = usePointerTarget(!reducedMotion);
  const { camera, gl, invalidate, size } = useThree();

  useLayoutEffect(() => {
    const distance = fitDistance(size.width / size.height);
    const animate = !reducedMotion;
    camera.position.set(
      0,
      CAMERA.elevation + (animate ? MOTION.revealElevation : 0),
      distance * (animate ? MOTION.revealDistance : 1)
    );
    camera.lookAt(0, 0, 0);
    // Set up once per mount; resizes are eased in useFrame.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera, reducedMotion]);

  useFrame(({ clock }, delta) => {
    const dt = Math.min(delta, 0.05);
    const ease = (from, to, lambda) => (reducedMotion ? to : damp(from, to, lambda, dt));
    const { pointer: pointerLambda, reveal, hover } = MOTION.damping;

    const distance = fitDistance(size.width / size.height);
    camera.position.y = ease(camera.position.y, CAMERA.elevation, reveal);
    camera.position.z = ease(camera.position.z, distance, reveal);
    camera.lookAt(0, 0, 0);

    const scroll = reducedMotion ? 0 : clamp(window.scrollY / window.innerHeight, 0, 1);
    const float = reducedMotion
      ? 0
      : Math.sin(clock.elapsedTime * MOTION.floatSpeed) * MOTION.floatAmplitude;
    const [baseX, baseY] = MOTION.baseRotation;
    const [rangeX, rangeY] = MOTION.pointerRange;

    const group = rig.current;
    group.rotation.x = ease(
      group.rotation.x,
      baseX + pointer.current.y * rangeX + scroll * MOTION.scrollTilt,
      pointerLambda
    );
    group.rotation.y = ease(group.rotation.y, baseY + pointer.current.x * rangeY, pointerLambda);
    group.position.y = float - scroll * MOTION.scrollDrop;

    const isHovered = hovered.current;
    const { idle, hover: hoverEmissive } = MOTION.screenEmissive;
    if (screenMaterial.current) {
      screenMaterial.current.emissiveIntensity = ease(
        screenMaterial.current.emissiveIntensity,
        isHovered ? hoverEmissive : idle,
        hover
      );
    }
    glow.current.intensity = ease(
      glow.current.intensity,
      isHovered ? LIGHTS.monitorGlow.hover : LIGHTS.monitorGlow.idle,
      hover
    );
  });

  const setHovered = useCallback(
    (value) => {
      hovered.current = value;
      gl.domElement.style.cursor = value ? "pointer" : "";
      onMonitorHover?.(value);
      invalidate(); // needed in reduced-motion mode, which renders on demand
    },
    [gl, invalidate, onMonitorHover]
  );

  useEffect(() => {
    const canvas = gl.domElement;
    return () => {
      canvas.style.cursor = "";
    };
  }, [gl]);

  const openProjects = useCallback(() => {
    document
      .getElementById(PROJECTS_ANCHOR)
      ?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
  }, [reducedMotion]);

  return (
    <group ref={rig} rotation={[MOTION.baseRotation[0], MOTION.baseRotation[1], 0]}>
      <WorkstationModel screenMaterialRef={screenMaterial} onLoaded={onLoaded}>
        <mesh
          visible={false}
          position={MODEL.monitorHitBox.position}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={() => setHovered(false)}
          onClick={openProjects}
        >
          <boxGeometry args={MODEL.monitorHitBox.size} />
        </mesh>
      </WorkstationModel>
      <pointLight
        ref={glow}
        color={COLORS.violet}
        intensity={LIGHTS.monitorGlow.idle}
        position={LIGHTS.monitorGlow.position}
      />
      <FloatingElements reducedMotion={reducedMotion} />
    </group>
  );
};

export default WorkstationInteractions;
