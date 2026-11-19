/* eslint-disable react/prop-types */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { skillGroups, technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import Icon from "./ui/Icon";

const SkillGroup = ({ group }) => {
  const isSecurity = Boolean(group.security);

  return (
    <article
      className={`rounded-2xl p-5 sm:p-6 h-full ${
        isSecurity
          ? "bg-[#071a1c] border border-[#00cea8]/40 shadow-[0_0_40px_-20px_#00cea8]"
          : "bg-tertiary border border-white/5"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${
            isSecurity ? "bg-[#00cea8]/15 text-[#5ef0d0]" : "bg-[#915EFF]/15 text-[#c9b3ff]"
          }`}
        >
          <Icon name={group.icon} />
        </span>
        <h3 className="text-white font-bold text-[19px]">{group.title}</h3>
      </div>

      {isSecurity ? (
        <ul className="mt-5 space-y-2.5">
          {group.skills.map((skill) => (
            <li key={skill.name} className="flex items-start gap-2.5 text-[14px] text-[#d5f5ee]">
              <Icon name={skill.icon} className="w-4 h-4 mt-[3px] flex-shrink-0 text-[#5ef0d0]" />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-5 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1.5 rounded-lg bg-black-100 border border-white/5 text-[13px] text-[#dfd9ff]"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}

      {group.evidence && (
        <p className="mt-5 pt-4 border-t border-[#00cea8]/20 font-mono text-[12px] leading-relaxed text-[#8fbfb5]">
          <span className="text-[#5ef0d0]">$ applied in</span> {group.evidence.join(" · ")}
        </p>
      )}
    </article>
  );
};

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I build with</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technical Skills</h2>
      </motion.div>

      {/* 3D icon spheres (decorative; the grouped list below carries the content) */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10" aria-hidden="true">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-5 grid-cols-1 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroup key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
