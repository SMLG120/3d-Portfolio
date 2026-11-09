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

**License status: NOT VERIFIED. These models were published at the site owner's request on 2026-11-09, before their licenses were confirmed.**
None of the provided files contains license or author metadata. Check each model's Fab or Sketchfab listing, then fill in this table and add any required credit to the site.

| Model | Served file | Provided source | Author | License |
|---|---|---|---|---|
| Laptop | `public/models/overview/laptop/laptop.glb` | `laptop_model_black.glb` | Unknown | Unverified |
| Sci-Fi HUD | `public/models/overview/cyberpunk/cyberpunk-hud.glb` | `sci_fi_hud_quillvr.glb` | Listed under maomornity on [Sketchfab](https://sketchfab.com/3d-models/sci-fi-hud-quillvr-4dd7b9979a624a53aa7ce601ea98a707) | Unverified |
| Headphones | `public/models/overview/headphones/headphones.glb` | `headphones_med_poly.glb` | Unknown | Unverified |
| Home speaker bar | `public/models/overview/speaker/speaker.glb` | `home_speaker_bar.glb` | Unknown | Unverified |
| Keyboard (texture named for an RK61) | `public/models/overview/keyboard/k1.glb` | `k1.glb`, exported from Blender | Unknown | Unverified |

The `poster.webp` beside each model is a static render of that model and has the same license status.

### Changes made

| Model | Provided | Optimized | Triangles | Changes |
|---|---|---|---|---|
| Laptop | 1.78 MB | 236 KB | 25,903 | Meshes joined, Meshopt. Lens transmission replaced with alpha blending. |
| Sci-Fi HUD | 2.02 MB | 170 KB | 33,628 | Dark backdrop mesh and a one-keyframe camera animation removed, Meshopt. |
| Headphones | 342 KB | 58 KB | 8,846 | Meshes joined, Meshopt. |
| Speaker | 106.47 MB | 562 KB | 27,792 | Display floor removed, 4K textures reduced to 1024 px WebP, Meshopt. |
| Keyboard | 2.76 MB | 622 KB | 37,564 | Duplicate materials merged, texture reduced from 1600 to 1024 px, Meshopt. |

No geometry was decimated. The provided source GLBs are not in `public/`.

### Regenerating

```sh
npx @gltf-transform/cli@4 optimize input.glb output.glb \
  --compress meshopt --texture-compress webp --texture-size 1024 \
  --simplify false --palette false --instance false
```

## Customizing the Overview models

Edit `src/components/overview3d/overviewModels.js` for pose, framing, per-model light, material colors, lighting and motion.

All four models share one WebGL canvas because the site is at the browser's context limit. Do not give each model its own `<Canvas>`.
