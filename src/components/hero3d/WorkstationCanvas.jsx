/* eslint-disable react/no-unknown-property, react/prop-types */
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";

import WorkstationInteractions from "./WorkstationInteractions";
import { CAMERA, COLORS, DPR, LIGHTS } from "./workstationConfig";
import { useReducedMotion } from "./useReducedMotion";

// Renders only while the hero is on screen and the tab is in the foreground.
const useIsVisible = (ref) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let inView = true;
    const update = () => setVisible(inView && document.visibilityState === "visible");
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(ref.current);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [ref]);

  return visible;
};

const WorkstationCanvas = ({ onReady, onContextChange, onMonitorHover }) => {
  const container = useRef(null);
  const canvasCleanup = useRef(null);
  const visible = useIsVisible(container);
  const reducedMotion = useReducedMotion();
  const [dpr, setDpr] = useState(DPR.max);

  const handleCreated = useCallback(
    ({ gl }) => {
      const canvas = gl.domElement;
      const onLost = (e) => {
        e.preventDefault();
        onContextChange(true);
      };
      const onRestored = () => onContextChange(false);
      canvas.addEventListener("webglcontextlost", onLost);
      canvas.addEventListener("webglcontextrestored", onRestored);
      canvasCleanup.current = () => {
        canvas.removeEventListener("webglcontextlost", onLost);
        canvas.removeEventListener("webglcontextrestored", onRestored);
      };
    },
    [onContextChange]
  );

  useEffect(() => () => canvasCleanup.current?.(), []);

  const frameloop = !visible ? "never" : reducedMotion ? "demand" : "always";

  return (
    <div ref={container} className="absolute inset-0">
      <Canvas
        frameloop={frameloop}
        dpr={[DPR.min, dpr]}
        camera={{ fov: CAMERA.fov, near: CAMERA.near, far: CAMERA.far, position: [0, CAMERA.elevation, 40] }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={handleCreated}
      >
        <PerformanceMonitor onDecline={() => setDpr(DPR.min)} />
        <ambientLight intensity={LIGHTS.ambient} />
        <hemisphereLight
          intensity={LIGHTS.hemisphere.intensity}
          color={LIGHTS.hemisphere.sky}
          groundColor={LIGHTS.hemisphere.ground}
        />
        <directionalLight intensity={LIGHTS.key.intensity} position={LIGHTS.key.position} />
        <pointLight color={COLORS.violet} intensity={LIGHTS.violetRim.intensity} position={LIGHTS.violetRim.position} />
        <pointLight color={COLORS.cyan} intensity={LIGHTS.cyanFill.intensity} position={LIGHTS.cyanFill.position} />
        <Suspense fallback={null}>
          <WorkstationInteractions
            reducedMotion={reducedMotion}
            onLoaded={onReady}
            onMonitorHover={onMonitorHover}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default WorkstationCanvas;
