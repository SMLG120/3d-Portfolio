import { lazy, Suspense, useCallback, useState } from "react";

import WebGLBoundary from "../canvas/WebGLBoundary";
import WorkstationFallback from "./WorkstationFallback";
import { PROJECTS_ANCHOR } from "./workstationConfig";
import { useMediaQuery } from "./useReducedMotion";

const WorkstationCanvas = lazy(() => import("./WorkstationCanvas"));

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    // Browsers cap live WebGL contexts and the site already uses many.
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return Boolean(gl);
  } catch {
    return false;
  }
};

// Decides between the live scene and the static render, and owns the layout
// box, so everything inside can be swapped without shifting the page.
const WorkstationStage = () => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const [webgl] = useState(supportsWebGL);
  const [ready, setReady] = useState(false);
  const [contextLost, setContextLost] = useState(false);
  const [monitorHovered, setMonitorHovered] = useState(false);

  const handleReady = useCallback(() => setReady(true), []);
  const live = isLargeScreen && webgl;
  const showScene = live && ready && !contextLost;

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[250px] xs:h-[300px] md:h-[400px] lg:h-[clamp(300px,56vh,480px)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_50%_at_50%_55%,rgba(145,94,255,0.16),transparent_72%)]"
        />
        <WorkstationFallback visible={!showScene} />
        {live && (
          <div
            aria-hidden="true"
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
              showScene ? "opacity-100" : "opacity-0"
            }`}
          >
            <WebGLBoundary>
              <Suspense fallback={null}>
                <WorkstationCanvas
                  onReady={handleReady}
                  onContextChange={setContextLost}
                  onMonitorHover={setMonitorHovered}
                />
              </Suspense>
            </WebGLBoundary>
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-col items-center gap-1 text-center">
        <a
          href={`#${PROJECTS_ANCHOR}`}
          className={`text-[13px] font-medium rounded transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#915EFF] ${
            monitorHovered ? "text-white" : "text-secondary hover:text-white"
          }`}
        >
          {showScene ? "Click the monitor to explore my projects →" : "Explore my projects →"}
        </a>
        <p className="text-[11px] text-secondary/70">
          3D model:{" "}
          <a
            href="https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            “Gaming Desktop PC”
          </a>{" "}
          by Yolala1232,{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            CC BY 4.0
          </a>{" "}
          (optimized)
        </p>
      </div>
    </div>
  );
};

export default WorkstationStage;
