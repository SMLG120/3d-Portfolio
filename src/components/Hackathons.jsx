/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { hackathons } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Icon from "./ui/Icon";
import { ProjectLinks, TagList } from "./ui/ProjectParts";

const HackathonCard = ({ entry }) => (
  <motion.article
    variants={fadeIn("up", "spring", 0.1, 0.75)}
    className="rounded-2xl p-[1px] bg-gradient-to-br from-[#3861fb]/60 via-[#915EFF]/40 to-transparent"
  >
    <div className="rounded-2xl bg-tertiary p-5 sm:p-7 grid gap-7 lg:grid-cols-[1fr_1.1fr]">
      <div className="min-w-0 order-2 lg:order-1">
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#8fa8ff]">
          {entry.event} · {entry.date}
        </p>
        <h3 className="mt-2 text-white font-bold text-[24px] sm:text-[28px] leading-tight">
          {entry.name}
          {entry.productName && (
            <span className="block mt-1 text-[16px] font-semibold text-secondary">
              Product: {entry.productName} · {entry.team}
            </span>
          )}
        </h3>
        <p className="mt-4 text-secondary text-[15px] leading-relaxed">{entry.description}</p>

        <h4 className="mt-6 text-white text-[15px] font-semibold">Key features</h4>
        <ul className="mt-3 space-y-2">
          {entry.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 text-[14px] leading-relaxed text-[#dfd9ff]">
              <Icon name="check" className="w-4 h-4 mt-[3px] flex-shrink-0 text-[#00cea8]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h4 className="mt-6 text-white text-[15px] font-semibold">My contributions</h4>
        <ul className="mt-3 list-disc ml-5 space-y-1.5">
          {entry.contributions.map((item) => (
            <li key={item} className="text-[14px] leading-relaxed text-[#dfd9ff]">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <TagList name={entry.name} tags={entry.tags} />
        </div>
        <div className="mt-5">
          <ProjectLinks {...entry} />
          {entry.demo_note && (
            <p className="mt-2 text-[12px] text-secondary">{entry.demo_note}.</p>
          )}
        </div>
      </div>

      <div className="order-1 lg:order-2 min-w-0">
        <div className="overflow-hidden rounded-xl border border-white/10 aspect-[1.56] bg-black-100">
          <img
            src={entry.image}
            alt={entry.imageAlt}
            loading="lazy"
            decoding="async"
            width="960"
            height="614"
            className="w-full h-full object-cover object-left-top"
          />
        </div>
        <p className="mt-3 text-[12px] text-secondary leading-relaxed">{entry.disclaimer}</p>
      </div>
    </div>
  </motion.article>
);

const Hackathons = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Building under a deadline</p>
      <h2 className={styles.sectionHeadText}>Hackathon Experience</h2>
    </motion.div>

    <div className="mt-12 space-y-8">
      {hackathons.map((entry) => (
        <HackathonCard key={`${entry.event}-${entry.name}`} entry={entry} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Hackathons, "hackathons");
