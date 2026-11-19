/* eslint-disable react/prop-types */
import { github } from "../../assets";
import Icon from "./Icon";

// Shared by project and hackathon cards.
export const ProjectLinks = ({ name, demo_link, source_code_link, demo_note }) => (
  <div className="flex flex-wrap gap-2">
    {demo_link && (
      <a
        href={demo_link}
        target="_blank"
        rel="noopener noreferrer"
        title={demo_note}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#915EFF] text-white text-[13px] font-semibold hover:bg-[#7a4fd6] transition-colors"
      >
        <Icon name="external" className="w-4 h-4" />
        Live Demo
        <span className="sr-only"> of {name} (opens in a new tab)</span>
      </a>
    )}
    {source_code_link && (
      <a
        href={source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/15 text-[#dfd9ff] text-[13px] font-semibold hover:border-white hover:text-white transition-colors"
      >
        <img src={github} alt="" className="w-4 h-4 object-contain" />
        Source
        <span className="sr-only"> code of {name} on GitHub (opens in a new tab)</span>
      </a>
    )}
  </div>
);

export const TagList = ({ name, tags }) => (
  <ul className="flex flex-wrap gap-x-3 gap-y-1" aria-label="Technologies">
    {tags.map((tag) => (
      <li key={`${name}-${tag.name}`} className={`text-[13px] font-medium ${tag.color}`}>
        #{tag.name}
      </li>
    ))}
  </ul>
);

// Optional supporting links (docs, diagrams, guides) as an accessible list.
export const ResourceLinks = ({ name, resources = [] }) =>
  resources.length > 0 && (
    <ul className="flex flex-col gap-2" aria-label={`${name} resources`}>
      {resources.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] text-secondary hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#915eff] rounded-sm transition-colors"
          >
            <Icon name="external" className="w-4 h-4" />
            {label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
