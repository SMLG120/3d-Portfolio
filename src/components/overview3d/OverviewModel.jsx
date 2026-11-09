/* eslint-disable react/no-unknown-property, react/prop-types */
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Group, MathUtils, Vector3 } from "three";

import { MOTION, VIEW } from "./overviewModels";

const { damp, degToRad } = MathUtils;

// Copies the scene and recolours on copies, so the cached GLTF is never mutated.
const prepareModel = (scene, config) => {
  const model = scene.clone(true);
  const owned = [];

  if (config.materials) {
    const rules = Object.entries(config.materials);
    model.traverse((node) => {
      if (!node.isMesh) return;
      const rule = rules.find(([name]) => node.material.name.startsWith(name));
      if (!rule) return;
      const { color, emissive, emissiveIntensity, opacity } = rule[1];
      const material = node.material.clone();
      if (color) material.color.set(color);
      if (emissive && material.emissive) material.emissive.set(emissive);
      if (emissiveIntensity !== undefined) material.emissiveIntensity = emissiveIntensity;
      if (opacity !== undefined) material.opacity = opacity;
      node.material = material;
      owned.push(material);
    });
  }

  // Measure in the resting pose, then normalize so every model fits one unit.
  const holder = new Group();
  holder.rotation.set(...config.rotation);
  holder.add(model);
  holder.updateMatrixWorld(true);
  const box = new Box3().setFromObject(holder, true);
  holder.remove(model);
  const size = box.getSize(new Vector3());
  const center = box.getCenter(new Vector3());
  const scale = 1 / Math.max(size.x, size.y);

  return {
    model,
    owned,
    offset: center.multiplyScalar(-1),
    scale,
    footprint: size.multiplyScalar(scale),
  };
};

const OverviewModel = ({ config, pointer, reducedMotion, aspect, onLoaded }) => {
  const { scene } = useGLTF(config.url);
  const prepared = useMemo(() => prepareModel(scene, config), [scene, config]);
  const swing = useRef();
  const { camera, invalidate } = useThree();

  useEffect(() => () => prepared.owned.forEach((m) => m.dispose()), [prepared]);

  useLayoutEffect(() => {
    const tan = Math.tan(degToRad(VIEW.fov / 2));
    const { x, y, z } = prepared.footprint;
    const distance = Math.max(y / 2 / tan, x / 2 / (tan * aspect)) * config.margin + z / 2;
    camera.position.set(0, 0, distance);
    camera.aspect = aspect;
    camera.near = VIEW.near;
    camera.far = VIEW.far;
    camera.fov = VIEW.fov;
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
    invalidate();
  }, [aspect, camera, config, invalidate, prepared]);

  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  useFrame(({ clock }, delta) => {
    if (reducedMotion) return;
    const dt = Math.min(delta, 0.05);
    const t = clock.elapsedTime;
    const [rangeX, rangeY] = MOTION.pointerRange;
    const group = swing.current;

    const targetY = Math.sin(t * MOTION.swaySpeed + config.phase) * config.sway + pointer.x * rangeY + pointer.dragY;
    group.rotation.y = damp(group.rotation.y, targetY, MOTION.damping, dt);
    group.rotation.x = damp(group.rotation.x, pointer.y * rangeX, MOTION.damping, dt);
    group.position.y = Math.sin(t * MOTION.swaySpeed * 1.4 + config.phase) * MOTION.floatAmount;

    const scale = damp(group.scale.x, pointer.hovered ? MOTION.hoverScale : 1, MOTION.damping, dt);
    group.scale.setScalar(scale);
  });

  return (
    <group ref={swing}>
      <group scale={prepared.scale}>
        <group position={prepared.offset.toArray()}>
          <group rotation={config.rotation}>
            <primitive object={prepared.model} />
          </group>
        </group>
      </group>
    </group>
  );
};

export default OverviewModel;
