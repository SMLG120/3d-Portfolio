// Tuning for each Overview model. Rotation is the resting pose in radians;
// margin is how much empty space surrounds the model (1 = touching the edges).
const base = import.meta.env.BASE_URL;
const asset = (path) => `${base}models/overview/${path}`;

export const VIOLET = "#915EFF";
export const CYAN = "#4FD8EB";

export const OVERVIEW_MODELS = {
  laptop: {
    url: asset("laptop/laptop.glb"),
    poster: asset("laptop/poster.webp"),
    alt: "Black laptop, open and facing forward",
    rotation: [0.2, -Math.PI / 2 - 0.45, 0],
    margin: 1.08,
    sway: 0.09,
    phase: 0,
    // The display panel, lit so the screen reads as switched on.
    materials: { "Material.099": { color: "#120C33", emissive: VIOLET, emissiveIntensity: 0.15 } },
  },
  hud: {
    url: asset("cyberpunk/cyberpunk-hud.glb"),
    poster: asset("cyberpunk/poster.webp"),
    alt: "Glowing sci-fi heads-up display in violet and cyan",
    rotation: [-Math.PI / 2, 0, 0.24],
    margin: 1.04,
    sway: 0.06,
    phase: 1.4,
    // Warm source colours are remapped to the portfolio palette.
    materials: {
      Orange: { color: VIOLET, emissive: VIOLET },
      Red: { color: "#C4A6FF", emissive: "#C4A6FF" },
    },
  },
  headphones: {
    url: asset("headphones/headphones.glb"),
    poster: asset("headphones/poster.webp"),
    alt: "Over-ear headphones",
    rotation: [0.1, -0.5, 0],
    margin: 1.12,
    sway: 0.1,
    phase: 2.6,
  },
  speaker: {
    url: asset("speaker/speaker.glb"),
    poster: asset("speaker/poster.webp"),
    alt: "Home speaker bar",
    rotation: [0.16, -0.32, 0],
    margin: 1.1,
    sway: 0.07,
    phase: 3.9,
    lightBoost: 2.2, // near-black fabric needs more light to show its texture
  },
};

OVERVIEW_MODELS.keyboard = {
  url: asset("keyboard/k1.glb"),
  poster: asset("keyboard/poster.webp"),
  alt: "Compact mechanical keyboard",
  rotation: [0.06, -0.24, 0],
  margin: 1.08,
  sway: 0.08,
  phase: 5.2,
  lightBoost: 0.5, // white keycaps wash out under the lighting used for black models
};

export const VIEW = { fov: 26, near: 0.05, far: 30, maxDpr: 1.5 };

export const LIGHTS = {
  ambient: 2.2,
  key: { intensity: 6, position: [2, 4, 5] },
  violet: { intensity: 26, position: [-2.2, 1.1, 1.6] },
  cyan: { intensity: 15, position: [2.2, -0.5, 1.8] },
};

export const MOTION = {
  swaySpeed: 0.45,
  floatAmount: 0.012,
  pointerRange: [0.1, 0.22], // extra [x, y] rotation at the slot's edge
  dragRange: 0.8, // furthest a drag can turn a model, in radians
  dragSpeed: 0.012, // radians per pixel dragged
  hoverScale: 1.05,
  damping: 5,
};
