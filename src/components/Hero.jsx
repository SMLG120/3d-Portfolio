import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { WorkstationStage } from "./hero3d";
import { useReducedMotion } from "./hero3d/useReducedMotion";

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
      if (res.ok) {
        window.open("/resume.pdf", "_blank");
      } else {
        window.open("https://www.linkedin.com/in/samuel-ha-551644322/", "_blank");
      }
    } catch {
      window.open("https://www.linkedin.com/in/samuel-ha-551644322/", "_blank");
    } finally {
      setCvLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050817] flex flex-col">
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
            <motion.h1
              {...enter(0)}
              className="font-black text-white text-[36px] xs:text-[48px] sm:text-[60px] lg:text-[44px] xl:text-[60px] leading-[1.15]"
            >
              Hi, I&apos;m <span className="text-[#915EFF]">Samuel</span>
            </motion.h1>
            <motion.p
              {...enter(0.08)}
              className="mt-3 text-[#dfd9ff] font-medium text-[18px] xs:text-[20px] sm:text-[24px] lg:text-[20px] xl:text-[24px] leading-snug"
            >
              Software Engineer <span className="text-[#915EFF]">|</span> AI &amp; Cybersecurity
            </motion.p>
            <motion.p
              {...enter(0.16)}
              className="mt-3 text-[15px] sm:text-[17px] text-[#aaa8c2] leading-relaxed max-w-[34rem]"
            >
              CS Student @ McGill · Building reliable, intelligent &amp; secure systems
            </motion.p>

            <motion.div {...enter(0.24)} className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-3 bg-[#915EFF] text-white text-[14px] font-semibold rounded-lg hover:bg-[#7a4fd6] transition-colors duration-200 select-none"
              >
                View Projects
              </a>
              <button
                onClick={handleDownloadCV}
                disabled={cvLoading}
                className="px-5 py-3 border border-[#915EFF] text-[#915EFF] text-[14px] font-semibold rounded-lg hover:bg-[#915EFF] hover:text-white transition-colors duration-200 select-none disabled:opacity-60 cursor-pointer"
              >
                {cvLoading ? "Opening…" : "Download CV"}
              </button>
              <a
                href="#contact"
                className="px-5 py-3 border border-[#aaa8c2] text-[#aaa8c2] text-[14px] font-semibold rounded-lg hover:border-white hover:text-white transition-colors duration-200 select-none"
              >
                Contact Me
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
