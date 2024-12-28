import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
      {/* Animated Sentence */}
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <p className={`${styles.sectionSubText} text-center`}>
          Programming languages & Frameworks that I used before and now.
        </p>
      </motion.div>

      {/* Technologies Section */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
        {technologies.map((technology) => (
          <div className="w-35 h-35" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, "");
