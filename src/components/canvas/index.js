import Earth from "./Earth";
import Ball from "./Ball";
import Stars from "./Stars";
import { withWebGLBoundary } from "./WebGLBoundary";

const EarthCanvas = withWebGLBoundary(Earth);
const BallCanvas = withWebGLBoundary(Ball);
const StarsCanvas = withWebGLBoundary(Stars);

export { EarthCanvas, BallCanvas, StarsCanvas };
