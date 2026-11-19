# 3D assets

## Workstation (hero section)

| | |
|---|---|
| Files | `public/models/workstation/workstation.glb`, `public/models/workstation/poster.webp` |
| Model | Gaming Desktop PC |
| Source | https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66 |
| Author | Yolala1232 (https://sketchfab.com/Yolala1232) |
| License | CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Commercial use allowed; credit required. |
| Attribution | Shown under the hero scene (`WorkstationStage.jsx`) and in `public/models/workstation/LICENSE.txt`. Keep both. |

### Why this model

It already contains every requested object (monitor showing code, mechanical keyboard, mouse, desk, RGB tower), so it was optimized rather than replaced. The license information comes from the `license.txt` shipped with the download and the metadata inside the original glTF.

The floating elements are generated in code (`FloatingElements.jsx`) and use no external assets.

### Changes made

| | Original | Optimized |
|---|---|---|
| Format | glTF + .bin + 51 images | single GLB |
| Size | 15.72 MB | 1.55 MB |
| Meshes (draw calls) | 685 | 87 |
| Nodes | 1,514 | 87 |
| Triangles | about 86,000 | about 86,000 (no decimation) |
| Textures | up to 4K-class PNG/JPEG | at most 1024 px, WebP |
| Geometry compression | none | Meshopt (decoder bundled with drei, no CDN call) |

`poster.webp` is a transparent render of the optimized model. It is the mobile visual, loading placeholder and WebGL fallback.

### Regenerating

The source model was removed from `public/` because it is no longer loaded. It remains in git history:

```sh
git checkout main -- public/desktop_pc   # before this branch is merged
npx @gltf-transform/cli@4 optimize public/desktop_pc/scene.gltf public/models/workstation/workstation.glb \
  --compress meshopt --texture-compress webp --texture-size 1024 \
  --simplify false --palette false --instance false
```

The hero relies on the material named `Material.074_30` (the monitor screen). If the model is swapped, update `MODEL` in `src/components/hero3d/workstationConfig.js`.

## Customizing the hero

Everything is in `src/components/hero3d/workstationConfig.js`:

- **Colors:** `COLORS`
- **Lighting:** `LIGHTS`
- **Animation:** `MOTION` (tilt, cursor range, float, scroll, camera reveal, hover glow)
- **Framing:** `FIT.margin` (larger means a smaller model) and `CAMERA`
- **Render quality:** `DPR`
- **Floating elements:** the `ITEMS` list in `FloatingElements.jsx`

After a visible change to the model or lighting, re-render `poster.webp` so the placeholder still matches.

## Overview section models

Licenses were looked up on 2026-11-18. Apart from the keyboard, none of the provided files contains license or author metadata. Those models were matched to their Sketchfab listings by the download filename, which is the listing title in snake_case, and by triangle count. No geometry was decimated, so the counts should agree apart from the parts removed during optimization.

| Model | Served file | Provided source | Sketchfab listing | Author | License | Match evidence |
|---|---|---|---|---|---|---|
| Laptop | `public/models/overview/laptop/laptop.glb` | `laptop_model_black.glb` | [Laptop Model (Black)](https://sketchfab.com/3d-models/laptop-model-black-404bef9dab2e46f99ebd4c09ed664ee3) | [SILVER KEY](https://sketchfab.com/silver_key_nerd) | Sketchfab Free Standard ([terms](https://sketchfab.com/licenses)) | Filename matches; 25,942 vs 25,903 triangles (meshes joined) |
| Sci-Fi HUD | `public/models/overview/cyberpunk/cyberpunk-hud.glb` | `sci_fi_hud_quillvr.glb` | [SCI-FI HUD - QuillVR](https://sketchfab.com/3d-models/sci-fi-hud-quillvr-4dd7b9979a624a53aa7ce601ea98a707) | [maomornity](https://sketchfab.com/maomornity) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Filename matches; 37,302 vs 33,628 triangles (backdrop mesh removed) |
| Headphones | `public/models/overview/headphones/headphones.glb` | `headphones_med_poly.glb` | [Headphones Med poly](https://sketchfab.com/3d-models/headphones-med-poly-c77b8c7f5d39460eaed920b6f32ddcbe) | [YourBasicDesigner](https://sketchfab.com/YourBasicDesigner) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Filename matches; 8,846 triangles in both |
| Home speaker bar | `public/models/overview/speaker/speaker.glb` | `home_speaker_bar.glb` | [Home Speaker Bar](https://sketchfab.com/3d-models/home-speaker-bar-605f456e2ba14e4d8d887b7b9f8e53a1) | [re1monsen](https://sketchfab.com/re1monsen) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Filename matches; 27,794 vs 27,792 triangles (display floor removed) |
| Keyboard | `public/models/overview/keyboard/keyboard.glb` | `mechanical_keyboard_-_aesthetic.glb` | [Mechanical Keyboard - Aesthetic](https://sketchfab.com/3d-models/mechanical-keyboard-aesthetic-44bb12d306864e2cb4256a61d4168942) | [M.Reslan](https://sketchfab.com/mreslan) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Author, license and source are in the download's glTF metadata; 18,056 triangles in both |

### What the licenses require

- **CC BY 4.0 (Sci-Fi HUD, Headphones, Speaker, Keyboard):** commercial use and modification are allowed. The author must be credited with the title, author, source link, license link and a note that the model was modified. These credits are shown under the Overview grid (`src/components/overview3d/OverviewCredits.jsx`) and in a `LICENSE.txt` next to each model. Keep both.
- **Sketchfab Free Standard (Laptop):** use in any medium, commercial or not, and in derivative works, with no credit required. Sketchfab's standard restrictions forbid redistributing the model as a standalone asset. The optimized GLB is incorporated into the site, but it can still be fetched directly from `public/`. Its `LICENSE.txt` records the source.
- **Previous keyboard:** the earlier `k1.glb` (texture named for an RK61) had no identifiable source or license. It was replaced on 2026-11-18 and should not be restored.

The `poster.webp` beside each model is a static render of that model and has the same license status.

### Changes made

| Model | Provided | Optimized | Triangles | Changes |
|---|---|---|---|---|
| Laptop | 1.78 MB | 236 KB | 25,903 | Meshes joined, Meshopt. Lens transmission replaced with alpha blending. |
| Sci-Fi HUD | 2.02 MB | 170 KB | 33,628 | Dark backdrop mesh and a one-keyframe camera animation removed, Meshopt. |
| Headphones | 342 KB | 58 KB | 8,846 | Meshes joined, Meshopt. |
| Speaker | 106.47 MB | 562 KB | 27,792 | Display floor removed, 4K textures reduced to 1024 px WebP, Meshopt. |
| Keyboard | 13.34 MB | 363 KB | 18,056 | Textures reduced to 1024 px WebP, Meshopt. |

No geometry was decimated. The provided source GLBs are not in `public/`.

### Regenerating

```sh
npx @gltf-transform/cli@4 optimize input.glb output.glb \
  --compress meshopt --texture-compress webp --texture-size 1024 \
  --simplify false --palette false --instance false
```

## Customizing the Overview models

Edit `src/components/overview3d/overviewModels.js` for pose, framing, per-model light, material colors, lighting and motion.

All five models share one WebGL canvas because the site is at the browser's context limit. Do not give each model its own `<Canvas>`.
