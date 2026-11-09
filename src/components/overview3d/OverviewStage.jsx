/* eslint-disable react/prop-types */
import { lazy, Suspense, useCallback, useMemo, useRef, useState } from "react";

import OverviewErrorBoundary from "./OverviewErrorBoundary";
import { OverviewContext } from "./overviewContext";
import { useInView, useMediaQuery } from "./useOverviewEnv";

const OverviewCanvas = lazy(() => import("./OverviewCanvas"));

// Wraps the Overview grid. Starts the 3D code shortly before the grid scrolls
// into view; phones stay on the static posters and download no 3D models.
const OverviewStage = ({ children }) => {
  const container = useRef(null);
  const started = useRef(false);
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const near = useInView(container, "150px");
  const [slots, setSlots] = useState([]);
  const [loaded, setLoaded] = useState({});

  if (near) started.current = true;

  const register = useCallback((id, element, pointer) => {
    setSlots((current) => [...current, { id, element, pointer }]);
    return () => setSlots((current) => current.filter((slot) => slot.id !== id));
  }, []);

  const markLoaded = useCallback((id) => {
    setLoaded((current) => (current[id] ? current : { ...current, [id]: true }));
  }, []);

  const value = useMemo(() => ({ register, loaded }), [register, loaded]);

  return (
    <OverviewContext.Provider value={value}>
      <div ref={container} className="relative">
        {children}
        {isLargeScreen && started.current && (
          <OverviewErrorBoundary>
            <Suspense fallback={null}>
              <OverviewCanvas slots={slots} active={near} onModelLoaded={markLoaded} />
            </Suspense>
          </OverviewErrorBoundary>
        )}
      </div>
    </OverviewContext.Provider>
  );
};

export default OverviewStage;
