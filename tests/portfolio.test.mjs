import "./asset-loader.mjs";
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";

const { projects, hackathons, technologies, skillGroups, navLinks } = await import(
  "../src/constants/index.js"
);
const { sortNewestFirst, filterProjects, PROJECT_FILTERS } = await import(
  "../src/utils/projects.js"
);

test("Montréallion is the newest, featured project with a live demo; WinterPath AI follows", () => {
  const ordered = sortNewestFirst(projects);
  assert.equal(ordered[0].name, "Montréallion");
  assert.equal(ordered[0].demo_link, "https://montreallion.vercel.app");
  assert.equal(ordered[0].image, "montreallion.webp");
  assert.ok(ordered[0].featured);
  assert.equal(ordered[1].name, "WinterPath AI");
  assert.equal(ordered[1].demo_link, "https://winterpath.pages.dev/fr");
  assert.equal(ordered[1].image, "winterpath.webp");
  for (const p of ordered.slice(0, 2)) assert.ok(p.imageAlt.length > 20);
});

test("only the newest project is featured", () => {
  assert.deepEqual(projects.filter((p) => p.featured).map((p) => p.name), ["Montréallion"]);
});

test("existing projects are all kept", () => {
  const names = projects.map((p) => p.name);
  for (const expected of [
    "Enterprise SIEM Platform",
    "Movie Recommendation System",
    "TeslHa — 3D EV Showroom & Engineering Lab",
    "AI-WAF — AI-Powered Web Application Firewall",
    "FinTech Transaction Platform",
    "World Cup Intelligence Platform",
    "Stock App Tracker",
    "Adversarial ML Model Attacker",
  ]) {
    assert.ok(names.includes(expected), `missing ${expected}`);
  }
  assert.equal(new Set(names).size, names.length, "duplicate project names");
});

test("sortNewestFirst does not mutate its input", () => {
  const input = [{ projectDate: "2025-01-01" }, { projectDate: "2026-01-01" }];
  const copy = [...input];
  sortNewestFirst(input);
  assert.deepEqual(input, copy);
});

test("every filter matches at least one project; 'all' matches every project", () => {
  assert.equal(filterProjects(projects, "all").length, projects.length);
  for (const { id } of PROJECT_FILTERS) {
    assert.ok(filterProjects(projects, id).length > 0, `filter ${id} is empty`);
  }
  const validIds = new Set(PROJECT_FILTERS.map((f) => f.id));
  for (const p of projects) {
    assert.ok(p.categories?.length, `${p.name} has no categories`);
    for (const c of p.categories) assert.ok(validIds.has(c), `${p.name}: bad category ${c}`);
  }
});

test("C and Symfony are no longer in the 3D skill display", () => {
  const names = technologies.map((t) => t.name);
  assert.ok(!names.includes("C"));
  assert.ok(!names.some((n) => /symfony/i.test(n)));
  assert.ok(names.includes("Java") && names.includes("Python"));
});

test("skills are grouped into the four categories, with a security group", () => {
  assert.deepEqual(
    skillGroups.map((g) => g.title),
    ["Software Engineering", "AI & Machine Learning", "Cybersecurity", "Cloud & DevOps"]
  );
  const security = skillGroups.find((g) => g.security);
  assert.ok(security.skills.length >= 5);
  const projectNames = new Set(projects.map((p) => p.name));
  for (const ref of security.evidence) assert.ok(projectNames.has(ref), `unknown evidence ${ref}`);
});

test("PolyFinances Datathon appears under hackathons without invented awards", () => {
  const datathon = hackathons.find((h) => h.event === "PolyFinances Datathon 2026");
  assert.ok(datathon);
  assert.match(datathon.name, /AI Investment Decision Review/);
  assert.ok(!/(winner|1st|first place|award|prize)/i.test(JSON.stringify(datathon)));
});

test("external links use https and nav targets exist", () => {
  const links = [...projects, ...hackathons].flatMap((p) =>
    [p.source_code_link, p.demo_link].filter(Boolean)
  );
  for (const link of links) assert.match(link, /^https:\/\//);
  assert.deepEqual(
    navLinks.map((n) => n.id),
    ["about", "work", "skills", "projects", "hackathons", "contact"]
  );
});

test("new image assets exist with case-exact file names", () => {
  for (const file of ["winterpath.webp", "polyfinances-datathon.webp", "montreallion.webp"]) {
    assert.ok(existsSync(new URL(`../src/assets/${file}`, import.meta.url)), file);
  }
});
