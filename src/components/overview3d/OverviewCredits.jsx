// CC BY 4.0 requires visible credit for these models (see docs/3d-assets.md).
// The laptop (Sketchfab Free Standard) needs no credit.
const CC_BY = "https://creativecommons.org/licenses/by/4.0/";

const CREDITS = [
  {
    title: "SCI-FI HUD - QuillVR",
    url: "https://sketchfab.com/3d-models/sci-fi-hud-quillvr-4dd7b9979a624a53aa7ce601ea98a707",
    author: "maomornity",
  },
  {
    title: "Headphones Med poly",
    url: "https://sketchfab.com/3d-models/headphones-med-poly-c77b8c7f5d39460eaed920b6f32ddcbe",
    author: "YourBasicDesigner",
  },
  {
    title: "Home Speaker Bar",
    url: "https://sketchfab.com/3d-models/home-speaker-bar-605f456e2ba14e4d8d887b7b9f8e53a1",
    author: "re1monsen",
  },
  {
    title: "Mechanical Keyboard - Aesthetic",
    url: "https://sketchfab.com/3d-models/mechanical-keyboard-aesthetic-44bb12d306864e2cb4256a61d4168942",
    author: "M.Reslan",
  },
];

const linkClass = "underline underline-offset-2 hover:text-white";

const OverviewCredits = () => (
  <p className="mt-4 text-center text-[11px] leading-relaxed text-secondary/70">
    3D models:{" "}
    {CREDITS.map(({ title, url, author }, i) => (
      <span key={url}>
        <a href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>
          “{title}”
        </a>{" "}
        by {author}
        {i < CREDITS.length - 1 ? "; " : ", "}
      </span>
    ))}
    <a href={CC_BY} target="_blank" rel="noopener noreferrer" className={linkClass}>
      CC BY 4.0
    </a>{" "}
    (optimized)
  </p>
);

export default OverviewCredits;
