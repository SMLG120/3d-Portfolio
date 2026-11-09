// Single place to tune the hero workstation: asset paths, framing, colours,
// lighting and motion. Nothing here is read outside src/components/hero3d.
const base = import.meta.env.BASE_URL;

export const ASSETS = {
  model: `${base}models/workstation/workstation.glb`,
  poster: `${base}models/workstation/poster.webp`,
};

export const COLORS = {
  background: "#050817",
  violet: "#915EFF",
  cyan: "#4FD8EB",
};

// Measured from the GLB, in the model's own coordinates. The model's front
// faces +X, so it is turned a quarter-turn to face the camera.
export const MODEL = {
  rotationY: -Math.PI / 2,
  center: [-1.56, 2.265, -0.61], // [x, y, z] after the quarter-turn is applied
  screenMaterial: "Material.074_30",
  monitorHitBox: { position: [-1.36, 3, 3], size: [0.8, 3.7, 6.6] },
};

export const CAMERA = { fov: 28, near: 1, far: 140, elevation: 3.2 };

// Footprint used to fit the model to its container at any aspect ratio.
export const FIT = { width: 14.6, height: 5.1, depth: 7.4, margin: 1.06 };

export const LIGHTS = {
  ambient: 0.75,
  hemisphere: { intensity: 1.1, sky: "#c9ccff", ground: "#050817" },
  key: { intensity: 2.2, position: [6, 12, 12] },
  violetRim: { intensity: 240, position: [-10, 6, 1] },
  cyanFill: { intensity: 75, position: [11, 1.5, 7] },
  monitorGlow: { idle: 0, hover: 26, position: [-1.44, 0.75, 3] },
};

export const MOTION = {
  baseRotation: [0.1, -0.3], // resting [x, y] tilt of the workstation
  pointerRange: [0.035, 0.09], // max extra [x, y] rotation from the cursor
  floatAmplitude: 0.05,
  floatSpeed: 0.7,
  scrollTilt: 0.1, // extra x rotation once the hero has scrolled away
  scrollDrop: 0.5,
  revealDistance: 1.16, // the camera starts this much further out
  revealElevation: 3.5, // and this much higher
  damping: { pointer: 3.5, reveal: 2.1, hover: 8 },
  screenEmissive: { idle: 1, hover: 1.55 },
};

export const DPR = { max: 1.75, min: 1 };

export const PROJECTS_ANCHOR = "projects";
