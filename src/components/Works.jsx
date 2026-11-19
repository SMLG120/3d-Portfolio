/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { PROJECT_FILTERS, filterProjects, sortNewestFirst } from "../utils/projects";
import { useReducedMotion } from "./hero3d/useReducedMotion";
import Icon from "./ui/Icon";
import { ProjectLinks, TagList } from "./ui/ProjectParts";

// One-column layouts make this section several screens tall, so the section's
// own "25% visible" trigger never fires. There, each item reveals itself.
const STACKED_LAYOUT = "(max-width: 899px)";
const SELF_REVEAL = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
};

const useSelfReveal = () => {
  const [stacked, setStacked] = useState(() => window.matchMedia(STACKED_LAYOUT).matches);

  useEffect(() => {
    const media = window.matchMedia(STACKED_LAYOUT);
    const onChange = (e) => setStacked(e.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return stacked ? SELF_REVEAL : undefined;
};

const projectsNewestFirst = sortNewestFirst(projects);

const TILT_OPTIONS = { max: 12, scale: 1, speed: 450 };

// Tilt is decorative; skip it for reduced-motion users.
const MaybeTilt = ({ className, children }) => {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <div className={className}>{children}</div>;
  return (
    <Tilt options={TILT_OPTIONS} className={className}>
      {children}
    </Tilt>
  );
};

const ProjectBody = ({ project }) => (
  <>
    {project.problem && (
      <p className="mt-2 text-[13px] leading-relaxed text-[#cfcbe6]">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#915EFF]">Problem </span>
        {project.problem}
      </p>
    )}
    <p className="mt-2 text-secondary text-[14px] leading-relaxed">{project.description}</p>
    {project.outcome && (
      <p className="mt-2 text-[13px] leading-relaxed text-[#cfe9e3] flex gap-2">
        <Icon name="check" className="w-4 h-4 mt-[2px] flex-shrink-0 text-[#00cea8]" />
        <span>{project.outcome}</span>
      </p>
    )}
  </>
);

const FeaturedProject = ({ project }) => (
  <article className="relative rounded-2xl p-[1px] green-pink-gradient">
    <div className="rounded-2xl bg-tertiary p-5 sm:p-7 grid gap-6 lg:grid-cols-[1.15fr_1fr] items-center">
      <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-[1.56] bg-black-100">
        <img
          src={project.image}
          alt={project.imageAlt || `${project.name} screenshot`}
          loading="lazy"
          decoding="async"
          width="960"
          height="614"
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#00cea8]/15 text-[#5ef0d0] font-mono text-[11px] uppercase tracking-wider">
            Newest project
          </span>
          {project.category && (
            <span className="font-mono text-[11px] uppercase tracking-wider text-secondary">
              {project.category}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-white font-bold text-[26px] sm:text-[30px] leading-tight">
          {project.name}
        </h3>
        <ProjectBody project={project} />
        <div className="mt-4">
          <TagList name={project.name} tags={project.tags} />
        </div>
        <div className="mt-5">
          <ProjectLinks {...project} />
        </div>
      </div>
    </div>
  </article>
);

// After a filter click the section's one-shot reveal has already fired, so
// cards that mount (or re-render) then would stay at "hidden" forever. Once the
// user has filtered, each card animates itself in on mount instead.
const MOUNT_REVEAL = { initial: "hidden", animate: "show" };

const ProjectCard = ({ index, project, filtered }) => {
  const reveal = useSelfReveal();
  const delay = filtered ? index * 0.06 : reveal ? 0 : index * 0.15;

  return (
    <motion.li
      variants={fadeIn("up", "spring", delay, 0.75)}
      {...(filtered ? MOUNT_REVEAL : reveal)}
      className="list-none"
    >
      <MaybeTilt className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col border border-white/5">
        <div className="relative w-full aspect-[1.56] overflow-hidden rounded-xl bg-black-100">
          <img
            src={project.image}
            alt={project.imageAlt || `${project.name} screenshot`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[20px] leading-tight">{project.name}</h3>
          <ProjectBody project={project} />
        </div>

        <div className="mt-4">
          <TagList name={project.name} tags={project.tags} />
        </div>
        <div className="mt-4">
          <ProjectLinks {...project} />
        </div>
      </MaybeTilt>
    </motion.li>
  );
};

const Works = () => {
  const reveal = useSelfReveal();
  const [filter, setFilter] = useState("all");
  const [filtered, setFiltered] = useState(false);

  const selectFilter = (id) => {
    setFilter(id);
    setFiltered(true);
  };

  const visible = filterProjects(projectsNewestFirst, filter);
  const [featured, ...rest] = visible;
  const showFeatured = featured?.featured;
  const cards = showFeatured ? rest : visible;

  return (
    <>
      <motion.div variants={textVariant()} {...reveal}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          {...reveal}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Newest first. Each card states the problem, the technical solution, the stack, and —
          where it can be checked — the outcome, with links to a live demo or the source code.
        </motion.p>
      </div>

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-10 flex flex-wrap gap-2"
      >
        {PROJECT_FILTERS.map((option) => {
          const active = option.id === filter;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              onClick={() => selectFilter(option.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
                active
                  ? "bg-[#915EFF] border-[#915EFF] text-white"
                  : "border-white/15 text-secondary hover:text-white hover:border-white/40"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} project{visible.length === 1 ? "" : "s"} shown
      </p>

      {showFeatured && (
        <div className="mt-8">
          <FeaturedProject project={featured} />
        </div>
      )}

      <ul className="mt-7 grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((project, index) => (
          <ProjectCard
            // Keyed by filter so every click remounts and replays the same reveal.
            key={filtered ? `${filter}-${project.name}` : project.name}
            index={index}
            project={project}
            filtered={filtered}
          />
        ))}
      </ul>
    </>
  );
};

export default SectionWrapper(Works, "projects");
