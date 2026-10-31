# Samuel Ha — Portfolio

Personal portfolio website built with React, Vite, and Three.js.

**Live:** [samuel-ha-portfolio.onrender.com](https://samuel-ha-portfolio.onrender.com/)

---

## Tech Stack

- **Framework:** React 18 + Vite
- **3D:** Three.js via `@react-three/fiber` and `@react-three/drei`
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Contact form:** EmailJS
- **Deployment:** Render (auto-deploy from `main`)

---

## Local Development

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # production build → dist/
npm run preview   # preview production build locally
npm run lint      # ESLint
```

---

## CV / Resume

The LaTeX source is at `public/resume.tex`. To compile it into `public/resume.pdf`:

```bash
# 1. Install BasicTeX (one-time, requires sudo)
sudo brew install --cask basictex

# 2. Install required LaTeX packages (one-time)
sudo tlmgr update --self
sudo tlmgr install extarticles psnfss titlesec enumitem microtype

# 3. Compile
cd public
pdflatex resume.tex
```

Once `public/resume.pdf` exists, the "Download CV" button on the hero section will serve the file directly. Until then, clicking it redirects to LinkedIn.

---

## Project Structure

```
src/
  assets/          images, icons, company logos, tech logos
  components/
    canvas/        Three.js 3D scenes (desktop PC, Earth, stars, tech balls)
    About.jsx      intro grid with globe
    Contact.jsx    email form + Earth canvas
    Experience.jsx vertical timeline
    Hero.jsx       landing section with 3D desktop
    Navbar.jsx     fixed nav with scroll-spy
    Tech.jsx       spinning 3D tech ball icons
    Works.jsx      project cards
  constants/       all site content (projects, experiences, nav links)
  hoc/             SectionWrapper animation HOC
  utils/           Framer Motion variants
public/
  desktop_pc/      3D model (GLTF)
  planet/          3D model (GLTF)
  resume.tex       LaTeX CV source
  resume.pdf       compiled CV (compile locally — see above)
```

---

## Deployment

Render auto-deploys from the `main` branch on GitHub.

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Push to `main` to trigger a redeploy.

---

## Content Updates

All portfolio content (projects, experiences, technologies, nav links) lives in a single file:

```
src/constants/index.js
```

Edit that file to update any section. The components read from it automatically.
