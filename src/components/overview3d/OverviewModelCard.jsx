/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";

import OverviewFallback from "./OverviewFallback";
import { OVERVIEW_MODELS } from "./overviewModels";
import { OverviewContext } from "./overviewContext";

// Reserves the model's space in the card. The shared canvas draws into this
// box, and cursor tracking stays local to it.
const OverviewModelCard = ({ model, className = "", attachInteraction }) => {
  const { register, loaded } = useContext(OverviewContext);
  const element = useRef(null);
  const config = OVERVIEW_MODELS[model];

  useEffect(() => {
    const node = element.current;
    const pointer = { x: 0, y: 0, hovered: false, dragY: 0 };

    const onMove = (e) => {
      if (e.pointerType !== "mouse") return;
      const rect = node.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      pointer.hovered = true;
    };
    const onLeave = () => {
      pointer.x = 0;
      pointer.y = 0;
      pointer.hovered = false;
    };

    node.addEventListener("pointermove", onMove, { passive: true });
    node.addEventListener("pointerleave", onLeave);
    const unregister = register(model, node, pointer);
    const detachInteraction = attachInteraction?.(node, pointer);

    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      detachInteraction?.();
      unregister();
    };
  }, [attachInteraction, model, register]);

  return (
    <div ref={element} className={`relative w-full ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(145,94,255,0.20),transparent_75%)]"
      />
      <OverviewFallback poster={config.poster} alt={config.alt} visible={!loaded[model]} />
    </div>
  );
};

export default OverviewModelCard;
