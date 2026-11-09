/* eslint-disable react/prop-types */
import OverviewModelCard from "./OverviewModelCard";
import { MOTION } from "./overviewModels";

// Horizontal drag turns the keyboard, and it eases back on release. Vertical
// touch movement is left to the browser so the page still scrolls. Listeners
// stay on the keyboard's own box.
const attachDrag = (node, pointer) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

  let lastX = null;

  const onDown = (e) => {
    lastX = e.clientX;
    node.setPointerCapture(e.pointerId);
    node.style.cursor = "grabbing";
  };
  const onMove = (e) => {
    if (lastX === null) return;
    const turned = pointer.dragY + (e.clientX - lastX) * MOTION.dragSpeed;
    pointer.dragY = Math.max(-MOTION.dragRange, Math.min(MOTION.dragRange, turned));
    lastX = e.clientX;
  };
  const onEnd = () => {
    lastX = null;
    pointer.dragY = 0;
    node.style.cursor = "grab";
  };

  node.style.cursor = "grab";
  node.addEventListener("pointerdown", onDown);
  node.addEventListener("pointermove", onMove);
  node.addEventListener("pointerup", onEnd);
  node.addEventListener("pointercancel", onEnd);

  return () => {
    node.removeEventListener("pointerdown", onDown);
    node.removeEventListener("pointermove", onMove);
    node.removeEventListener("pointerup", onEnd);
    node.removeEventListener("pointercancel", onEnd);
    node.style.cursor = "";
  };
};

// A slot in the shared Overview canvas, not a separate canvas: the site is at
// the browser's WebGL context limit.
const KeyboardCanvas = ({ className = "" }) => (
  <OverviewModelCard
    model="keyboard"
    attachInteraction={attachDrag}
    className={`touch-pan-y select-none ${className}`}
  />
);

export default KeyboardCanvas;
