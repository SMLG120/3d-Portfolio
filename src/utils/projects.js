// Pure helpers for the Projects section, kept free of React and assets so they
// can be unit-tested with `node --test`.

export const PROJECT_FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Software Engineering" },
  { id: "ai", label: "AI / ML" },
  { id: "security", label: "Cybersecurity" },
  { id: "3d", label: "3D / Interactive" },
];

// Newest first by projectDate (ISO yyyy-mm-dd). Does not mutate the input.
export const sortNewestFirst = (projects) =>
  [...projects].sort((a, b) => b.projectDate.localeCompare(a.projectDate));

export const filterProjects = (projects, filterId) =>
  filterId === "all"
    ? projects
    : projects.filter((project) => project.categories?.includes(filterId));
