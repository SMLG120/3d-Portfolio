import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { WorkstationStage } from "./hero3d";
import { useReducedMotion } from "./hero3d/useReducedMotion";

// Until public/resume.pdf is added, the résumé button opens the LinkedIn profile.
const RESUME_FALLBACK = "https://www.linkedin.com/in/samuel-ha-551644322/";

const BACKGROUND_WORDS = ["SOFTWARE ENGINEERING", "ARTIFICIAL INTELLIGENCE", "CYBERSECURITY"];

const reveal = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const Hero = () => {
  const [cvLoading, setCvLoading] = useState(false);
  const reducedMotion = useReducedMotion();
  const enter = (delay) => (reducedMotion ? {} : reveal(delay));

  const handleDownloadCV = async (e) => {
    e.preventDefault();
    if (cvLoading) return;
    setCvLoading(true);
    try {
      const res = await fetch("/resume.pdf", { method: "HEAD" });
      // Dev servers answer unknown paths with index.html, so require a real PDF.
      const isPdf = res.ok && (res.headers.get("content-type") || "").includes("pdf");
      window.open(isPdf ? "/resume.pdf" : RESUME_FALLBACK, "_blank", "noopener,noreferrer");
    } catch {
      window.open(RESUME_FALLBACK, "_blank", "noopener,noreferrer");
    } finally {
      setCvLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050817] flex flex-col">
      {/* Decorative background: slow gradient light + oversized outline words. Hidden from assistive tech. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-aurora" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-[6vh] overflow-hidden pl-[4vw]"
      >
        {BACKGROUND_WORDS.map((word, i) => (
          <span
            key={word}
            className="hero-bg-word text-[15vw] lg:text-[9vw]"
            style={{ marginLeft: `${i * 8}vw` }}
          >
            {word}
          </span>
        ))}
      </div>

      <div
        className={`relative flex-1 w-full max-w-7xl mx-auto ${styles.paddingX} pt-24 lg:pt-20 pb-4 grid lg:grid-cols-[45fr_55fr] items-center gap-6 lg:gap-8`}
      >
        <div className="flex flex-row items-stretch gap-4 sm:gap-5 min-w-0">
          {/* Left accent bar */}
          <div className="flex flex-col items-center flex-shrink-0 pt-3">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 flex-1 min-h-[120px] violet-gradient" />
          </div>

          <div className="min-w-0">
            <motion.p
              {...enter(0)}
              className="font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-[#00cea8]"
            >
              Software · AI · Security · Cloud
            </motion.p>
            <h1 className="mt-3">
              <motion.span
                {...enter(0.05)}
                className="block font-display font-bold text-white text-[34px] xs:text-[44px] sm:text-[54px] lg:text-[44px] xl:text-[56px] leading-[1.05]"
              >
                Hi, I&apos;m <span className="text-[#915EFF]">Samuel</span>.
              </motion.span>
              <motion.span
                {...enter(0.12)}
                className="mt-3 block font-display font-semibold text-[#e7e3ff] text-[22px] xs:text-[26px] sm:text-[32px] lg:text-[26px] xl:text-[32px] leading-[1.18] text-balance"
              >
                Software Engineer Building Intelligent, Secure &amp; Interactive Experiences.
              </motion.span>
            </h1>
            <motion.p
              {...enter(0.2)}
              className="mt-4 text-[15px] sm:text-[16px] text-[#b4b1cc] leading-relaxed max-w-[36rem]"
            >
              Computer Science student at McGill University specializing in AI, with a foundation
              in statistics and hands-on experience in full-stack development, machine learning,
              cybersecurity, and cloud technologies. I build practical software that connects
              intelligent systems with real-world problems.
            </motion.p>

            <motion.div {...enter(0.28)} className="mt-6 sm:mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-3 bg-[#915EFF] text-white text-[14px] font-semibold rounded-lg hover:bg-[#7a4fd6] transition-colors duration-200 select-none"
              >
                Explore Projects
              </a>
              <button
                type="button"
                onClick={handleDownloadCV}
                disabled={cvLoading}
                className="px-5 py-3 border border-[#915EFF] text-[#c9b3ff] text-[14px] font-semibold rounded-lg hover:bg-[#915EFF] hover:text-white transition-colors duration-200 select-none disabled:opacity-60 cursor-pointer"
              >
                {cvLoading ? "Opening…" : "View Résumé"}
              </button>
              <a
                href="https://github.com/SMLG120"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#3a3657] text-[#dfd9ff] text-[14px] font-semibold rounded-lg hover:border-white hover:text-white transition-colors duration-200 select-none"
              >
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href="#contact"
                className="px-5 py-3 border border-[#3a3657] text-[#dfd9ff] text-[14px] font-semibold rounded-lg hover:border-white hover:text-white transition-colors duration-200 select-none"
              >
                Let&apos;s Connect
              </a>
            </motion.div>
          </div>
        </div>

        <div className="min-w-0">
          <WorkstationStage />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative w-full flex justify-center pt-2 pb-6">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[30px] h-[52px] rounded-3xl border-[3px] border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 18, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2.5 h-2.5 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
