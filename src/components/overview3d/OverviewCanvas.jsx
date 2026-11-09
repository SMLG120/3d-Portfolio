/* eslint-disable react/no-unknown-property, react/prop-types */
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, createPortal, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Scene } from "three";

import OverviewErrorBoundary from "./OverviewErrorBoundary";
import OverviewModel from "./OverviewModel";
import { CYAN, LIGHTS, OVERVIEW_MODELS, VIEW, VIOLET } from "./overviewModels";
import { useReducedMotion } from "./useOverviewEnv";

// Browsers allow about 16 live WebGL contexts and the site already uses 15, so
// all four models share this one canvas. It sits over the grid and scrolls
// with it, and each model is drawn only inside its own card's box.
const ModelView = ({ slot, views, reducedMotion, onLoaded }) => {
  const config = OVERVIEW_MODELS[slot.id];
  const boost = config.lightBoost ?? 1;
  const scene = useMemo(() => new Scene(), []);
  const camera = useMemo(() => new PerspectiveCamera(VIEW.fov, 1, VIEW.near, VIEW.far), []);
  const [aspect, setAspect] = useState(() => {
    const { width, height } = slot.element.getBoundingClientRect();
    return width / height || 1;
  });

  useEffect(() => {
    const registry = views.current;
    const view = { scene, camera, element: slot.element, visible: true };
    registry.set(slot.id, view);

    const resize = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width && height) setAspect(width / height);
    });
    const intersect = new IntersectionObserver(([entry]) => {
      view.visible = entry.isIntersecting;
    });
    resize.observe(slot.element);
    intersect.observe(slot.element);

    return () => {
      resize.disconnect();
      intersect.disconnect();
      registry.delete(slot.id);
    };
  }, [camera, scene, slot, views]);

  const handleLoaded = useMemo(() => () => onLoaded(slot.id), [onLoaded, slot.id]);

  return createPortal(
    <>
      <ambientLight intensity={LIGHTS.ambient * boost} />
      <directionalLight intensity={LIGHTS.key.intensity * boost} position={LIGHTS.key.position} />
      <pointLight color={VIOLET} intensity={LIGHTS.violet.intensity * boost} position={LIGHTS.violet.position} />
      <pointLight color={CYAN} intensity={LIGHTS.cyan.intensity * boost} position={LIGHTS.cyan.position} />
      <OverviewErrorBoundary>
        <Suspense fallback={null}>
          <OverviewModel
            config={config}
            pointer={slot.pointer}
            reducedMotion={reducedMotion}
            aspect={aspect}
            onLoaded={handleLoaded}
          />
        </Suspense>
      </OverviewErrorBoundary>
    </>,
    scene,
    { camera }
  );
};

// Replaces the default render with one scissored pass per visible model.
const MultiViewRenderer = ({ views }) => {
  useFrame(({ gl }) => {
    const root = gl.domElement.getBoundingClientRect();
    gl.setScissorTest(false);
    gl.clear();
    gl.setScissorTest(true);

    views.current.forEach(({ scene, camera, element, visible }) => {
      if (!visible) return;
      const rect = element.getBoundingClientRect();
      const left = rect.left - root.left;
      const bottom = root.bottom - rect.bottom;
      gl.setViewport(left, bottom, rect.width, rect.height);
      gl.setScissor(left, bottom, rect.width, rect.height);
      gl.render(scene, camera);
    });

    gl.setScissorTest(false);
  }, 1);

  return null;
};

const OverviewCanvas = ({ slots, active, onModelLoaded }) => {
  const views = useRef(new Map());
  const reducedMotion = useReducedMotion();
  const frameloop = !active ? "never" : reducedMotion ? "demand" : "always";

  return (
    <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none">
      <Canvas
        frameloop={frameloop}
        dpr={[1, VIEW.maxDpr]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
      >
        {slots.map((slot) => (
          <ModelView
            key={slot.id}
            slot={slot}
            views={views}
            reducedMotion={reducedMotion}
            onLoaded={onModelLoaded}
          />
        ))}
        <MultiViewRenderer views={views} />
      </Canvas>
    </div>
  );
};

export default OverviewCanvas;
