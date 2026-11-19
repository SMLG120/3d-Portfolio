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
