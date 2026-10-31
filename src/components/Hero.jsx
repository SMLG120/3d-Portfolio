import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [cvLoading, setCvLoading] = useState(false);

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
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Canvas layer — behind everything */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Content layer — above canvas */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        {/* Left accent bar */}
        <div className="flex flex-col justify-center items-center mt-5 flex-shrink-0">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text + buttons — re-enable pointer events */}
        <div className="pointer-events-auto max-w-[55%] sm:max-w-[60%]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Samuel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer{" "}
            <span className="text-[#915EFF]">|</span>{" "}
            AI &amp; Cybersecurity
            <br className="sm:block hidden" />
            <span className="text-[17px] text-[#aaa8c2]">
              CS Student @ McGill · Building reliable, intelligent &amp; secure systems
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
          </div>
        </div>
      </div>

      {/* Scroll indicator — above canvas */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10 pointer-events-none">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
