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
