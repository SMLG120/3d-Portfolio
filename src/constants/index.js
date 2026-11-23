import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  mongodb,
  git,
  docker,
  java,
  python,
  php,
  attestra,
  aiwaf,
  recmovie,
  cybersecurity,
  worldcup,
  teslha,
  stock,
  fintech,
  mlattacker,
  winterpath,
  polyfinancesDatathon,
  montreallion,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "hackathons",
    title: "Hackathons",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI & ML Engineer",
    icon: creator,
  },
  {
    title: "Security Engineer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// Grouped skills shown under the 3D icons. Every entry is backed by the résumé
// (public/resume.tex) or by a project listed below; nothing here is aspirational.
const skillGroups = [
  {
    id: "software",
    title: "Software Engineering",
    icon: "code",
    skills: [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "React",
      "Spring Boot",
      "PHP",
      "SQL",
      "REST APIs",
      "FastAPI",
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: "spark",
    skills: [
      "scikit-learn",
      "XGBoost",
      "PyTorch",
      "Machine Learning",
      "Model Evaluation",
      "Data Processing",
    ],
  },
  {
    id: "security",
    title: "Cybersecurity",
    icon: "shield",
    security: true,
    skills: [
      { name: "SIEM & Incident Correlation", icon: "terminal" },
      { name: "Network Traffic Analysis", icon: "network" },
      { name: "Secure API Development", icon: "lock" },
      { name: "OWASP Web Threats (SQLi, XSS, SSRF)", icon: "shield" },
      { name: "Authentication & Authorization (RBAC)", icon: "lock" },
      { name: "JWT / OAuth2 / OpenID Connect", icon: "lock" },
      { name: "Adversarial ML Testing", icon: "terminal" },
    ],
    evidence: [
      "Enterprise SIEM Platform",
      "AI-WAF — AI-Powered Web Application Firewall",
      "Adversarial ML Model Attacker",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "Docker",
      "Git / GitLab CI/CD",
      "GitHub Actions",
      "AWS",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "Linux",
      "Render",
      "Vercel",
    ],
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Attestra (UPA)",
    icon: attestra,
    iconBg: "#E6DEDD",
    date: "July 2026 – Sept 2026",
    points: [
      "Fixed backend defects on the DairyTrace and SimpliTrace platforms, tracing issues to root cause and submitting Git pull requests through code reviews.",
      "Built dynamic PDF generation in PHP with custom client-specific report layouts.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Attestra (UPA)",
    icon: attestra,
    iconBg: "#E6DEDD",
    date: "May 2025 – Aug 2025",
    points: [
      "Added input validation and sanitization to PHP data-extraction pipelines, preventing malformed data ingestion and improving regulatory reporting accuracy.",
      "Automated livestock traceability workflows with PHP scripts and scheduled jobs, cutting manual effort by 60%.",
      "Resolved ~50 backend bugs across jQuery, Oracle SQL, and Zend PHP, reducing system cleanup time by 50%.",
      "Optimized SQL queries and refactored CI/CD pipelines, reducing build-to-deploy time by 25%.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Attestra (UPA)",
    icon: attestra,
    iconBg: "#E6DEDD",
    date: "June 2024 – Aug 2024",
    points: [
      "Built access-controlled RESTful APIs with Symfony and API Platform (CORS, XSS prevention), cutting cross-team integration risk by 20%.",
      "Refactored React Admin components, cutting navigation latency by 30% and reducing client-side data exposure.",
      "Worked in code reviews and used Docker, AWS, and Postman in the team's development workflow.",
    ],
  },
];

const education = [
  {
    degree: "B.Sc. Computer Science — AI Concentration",
    institution: "McGill University",
    location: "Montreal, QC",
    date: "Aug 2023 – Dec 2026 (expected)",
    highlights: [
      "Concentration in Artificial Intelligence.",
      "McGill CS Mentorship Program: guided first-year students in algorithms, Git, and interview prep (2024–2025).",
      "Tech Fair Volunteer: coordinated logistics for a 200+ attendee technology showcase.",
    ],
  },
  {
    degree: "Computer Science Exchange Program",
    institution: "Hong Kong Polytechnic University",
    location: "Hong Kong",
    date: "Jan 2026 – May 2026",
    highlights: [
      "Exchange semester with coursework in machine learning and data analytics.",
    ],
  },
];

// Project cards follow one format: problem -> technical solution (description)
// -> technologies (tags) -> verified outcome (optional; only stated when it can
// be checked, e.g. a live deployment).
// projectDate is the date of the first commit in each project's repository (UTC).
// Works.jsx displays projects newest first using this field.
// categories drive the Projects filter: software | ai | security | 3d.
const projects = [
  {
    name: "Montréallion",
    category: "Full-Stack Game / Open Data",
    categories: ["software", "3d"],
    problem:
      "Trivia games reward the most obvious answer; a Montréal quiz should reward knowing the city's less-travelled corners.",
    description:
      "Bilingual (EN/FR) Montréal rarity trivia game: seven open-ended questions, 25 seconds each, and the rarer a valid answer, the more it scores (10–100). The server owns the timer and validates answers with accent- and typo-tolerant matching (no LLM), keeps the answer list off the browser until a question is answered, and freezes each day's scores so the daily leaderboard is fair. Includes Daily, Unlimited and Party modes, an admin review queue, and a stdlib-only Python ETL that turns open data into questions held for human review.",
    outcome:
      "Live on Vercel with Neon Postgres, serving 49 reviewed questions; unit, database and Playwright end-to-end tests run in GitHub Actions CI.",
    tags: [
      { name: "Next.js 16 / React 19 / TypeScript", color: "blue-text-gradient" },
      { name: "PostgreSQL (Neon) / Zod", color: "green-text-gradient" },
      { name: "Python ETL / Open Data", color: "pink-text-gradient" },
      { name: "Vitest / Playwright / Vercel", color: "orange-text-gradient" },
    ],
    image: montreallion,
    imageAlt:
      "Montréallion home page: the Montréallion logo above a seven-stop métro line, with “Today's line” and “Unlimited” cards each offering a Start ride button.",
    source_code_link: "https://github.com/SMLG120/montreallion",
    demo_link: "https://montreallion.vercel.app",
    projectDate: "2026-11-21",
    featured: true,
  },
  {
    name: "WinterPath AI",
    category: "AI / Geospatial Engineering / Full-Stack Development",
    categories: ["software", "ai"],
    problem:
      "Shortest-path walking directions ignore Montréal winters: closed sidewalks, snow operations, and icy-sidewalk reports.",
    description:
      "An intelligent winter pedestrian navigation platform designed for Montréal, combining geospatial routing, weather-aware information, and an interactive map experience to help users explore walking routes during Canadian winters. It compares the shortest route with a winter-aware route over an OpenStreetMap pedestrian graph, using Ville de Montréal closures, aggregated 311 reports, and Environment Canada weather, and labels every piece of evidence as confirmed, unverified, estimated, or unknown.",
    outcome:
      "Live bilingual (EN/FR) demo covering the Island of Montréal. The risk layer is a labelled heuristic: the trained ML model is held back until it passes a pre-registered evaluation.",
    tags: [
      { name: "React / TypeScript", color: "blue-text-gradient" },
      { name: "Python / FastAPI / PostGIS", color: "green-text-gradient" },
      { name: "OpenStreetMap / MapLibre", color: "pink-text-gradient" },
      { name: "Cloudflare Pages / Render", color: "orange-text-gradient" },
    ],
    image: winterpath,
    imageAlt:
      "WinterPath AI route planner in French: a search panel beside a map of the Island of Montréal with the covered area outlined.",
    source_code_link: "https://github.com/SMLG120/WinterPathAi",
    demo_link: "https://winterpath.pages.dev/fr",
    projectDate: "2026-11-10",
  },
  {
    name: "AI-WAF — AI-Powered Web Application Firewall",
    categories: ["ai", "security"],
    problem:
      "Signature rules alone miss obfuscated web attacks, while pure ML detectors are hard to explain.",
    description:
      "Real-time HTTP threat-detection system pairing a regex rule engine with an ML ensemble (Isolation Forest, Random Forest, Autoencoder) over 30 engineered features to flag SQLi, XSS, SSRF, and path traversal. Live classifications streamed over WebSockets to a React dashboard.",
    tags: [
      { name: "Python / FastAPI", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "React / Docker", color: "pink-text-gradient" },
    ],
    image: aiwaf,
    source_code_link: "https://github.com/SMLG120/AI-Threat-Detector",
    projectDate: "2026-03-27",
  },
  {
    name: "Enterprise SIEM Platform",
    categories: ["software", "security"],
    problem:
      "Security teams need raw events turned into correlated incidents, behind strong access control.",
    description:
      "Spring Boot microservices SIEM streaming events over Kafka to a rules engine that generates alerts and correlates them into incidents. Secured with Keycloak OIDC/JWT, RBAC, Redis rate limiting, and monitored via Prometheus/Grafana. React/TypeScript SOC dashboard.",
    tags: [
      { name: "Java 21 / Spring Boot", color: "blue-text-gradient" },
      { name: "Kafka / OpenSearch", color: "green-text-gradient" },
      { name: "Keycloak / K8s", color: "pink-text-gradient" },
    ],
    image: cybersecurity,
    imageAlt: "Illustration representing the Enterprise SIEM Platform",
    source_code_link: "https://github.com/SMLG120/SIEM--Dashboard",
    projectDate: "2026-09-24",
  },
  {
    name: "FinTech Transaction Platform",
    categories: ["software", "security"],
    problem:
      "Payment systems must move money exactly once and never leak card data or personal information.",
    description:
      "9-service Spring Boot payment platform with isolated PostgreSQL databases and async Kafka messaging. Card tokenization (no PAN/CVV stored), encrypted PII at rest, idempotent double-entry ledger, and Keycloak JWT auth with 5 RBAC roles. Deployed with Kubernetes/Helm.",
    tags: [
      { name: "Java / Spring Boot", color: "blue-text-gradient" },
      { name: "Kafka / PostgreSQL", color: "green-text-gradient" },
      { name: "Keycloak / Kubernetes", color: "pink-text-gradient" },
    ],
    image: fintech,
    source_code_link: "https://github.com/SMLG120/FinTech_Transaction_Platform",
    projectDate: "2026-09-27",
  },
  {
    name: "Movie Recommendation System",
    categories: ["ai", "software"],
    problem:
      "Recommendations must stay relevant as user activity streams in, at the scale of a real catalogue.",
    description:
      "XGBoost recommender serving 1M+ users across 27K movies, deployed as a Dockerized Flask REST API consuming real-time Kafka event streams for live user activity ingestion. Evaluated using hit rate and NDCG metrics with GitLab CI/CD pipeline.",
    tags: [
      { name: "Python / XGBoost", color: "blue-text-gradient" },
      { name: "Kafka / Docker", color: "green-text-gradient" },
      { name: "GitLab CI/CD", color: "pink-text-gradient" },
    ],
    image: recmovie,
    source_code_link: "https://github.com/SMLG120/Movie-Recommender-System",
    projectDate: "2025-09-11",
  },
  {
    name: "World Cup Intelligence Platform",
    categories: ["ai", "software"],
    problem:
      "Match predictions are only useful when they are calibrated across a whole tournament and explainable.",
    description:
      "Full-stack football prediction platform for World Cup 2026. Five ML models (XGBoost, LightGBM, CatBoost, Random Forest, Logistic Regression) combined with Poisson scoring and Monte Carlo tournament simulation. Automated ETL pipeline ingests Elo ratings and FIFA rankings; SHAP explainability integrated throughout.",
    tags: [
      { name: "Python / FastAPI", color: "blue-text-gradient" },
      { name: "Next.js / TypeScript", color: "green-text-gradient" },
      { name: "XGBoost / Monte Carlo", color: "pink-text-gradient" },
    ],
    image: worldcup,
    source_code_link: "https://github.com/SMLG120/World-Cup-Intelligence-Platform",
    projectDate: "2026-06-04",
  },
  {
    name: "Stock App Tracker",
    categories: ["software"],
    problem:
      "Investors want watchlists and alerts that refresh on their own, behind secure accounts.",
    description:
      "Next.js 15 stock tracking app with secure authentication via Better Auth (JWT), MongoDB persistence with Mongoose, and Inngest for event-driven background jobs including scheduled data refreshes and user alert pipelines.",
    tags: [
      { name: "Next.js / TypeScript", color: "blue-text-gradient" },
      { name: "MongoDB / Mongoose", color: "green-text-gradient" },
      { name: "Inngest / Better Auth", color: "pink-text-gradient" },
    ],
    image: stock,
    source_code_link: "https://github.com/SMLG120/Stock-App-Tracker",
    projectDate: "2026-01-27",
  },
  {
    name: "TeslHa — 3D EV Showroom & Engineering Lab",
    categories: ["3d", "software"],
    problem:
      "Comparing electric vehicles means juggling scattered specs with no sense of the car itself.",
    description:
      "Interactive 3D electric-vehicle showroom with cars generated at runtime by a parametric design system. Includes an explorable 3D studio, engineering lab, multi-vehicle comparison, and an EV-vs-gas cost simulator, with every spec tracked per configuration, Zod-validated, and labelled by source.",
    outcome: "Live demo deployed on Render.",
    tags: [
      { name: "Next.js / React 19", color: "blue-text-gradient" },
      { name: "Three.js / R3F", color: "green-text-gradient" },
      { name: "TypeScript / Zod", color: "pink-text-gradient" },
    ],
    image: teslha,
    source_code_link: "https://github.com/SMLG120/TeslHa",
    projectDate: "2026-11-07",
    demo_link: "https://teslha.onrender.com",
  },
  {
    name: "Adversarial ML Model Attacker",
    categories: ["ai", "security"],
    problem:
      "Image classifiers that score well on clean data can be fooled by tiny, invisible perturbations.",
    description:
      "PyTorch framework that attacks MNIST and CIFAR-10 classifiers with FGSM, PGD, DeepFool, and Carlini & Wagner, measuring attack success, accuracy drop, and perturbation size. Compares standard and adversarially trained models and reports results in a React dashboard.",
    tags: [
      { name: "Python / PyTorch", color: "blue-text-gradient" },
      { name: "FGSM / PGD / C&W", color: "green-text-gradient" },
      { name: "React / Docker", color: "pink-text-gradient" },
    ],
    image: mlattacker,
    source_code_link: "https://github.com/SMLG120/ML-Model-Attacker",
    projectDate: "2026-04-16",
  },
];

// Hackathon entries. Facts are taken from the project repository
// (github.com/SMLG120/DatathonPolyFinance2026); no placements or awards claimed.
const hackathons = [
  {
    event: "PolyFinances Datathon 2026",
    date: "November 2026",
    name: "AI Investment Decision Review",
    productName: "ETHOS",
    description:
      "Developed an agentic investment decision-support platform that evaluates proposed portfolio decisions against investor-defined constraints, detects conflicting objectives, and explains trade-offs through transparent, evidence-based analysis.",
    features: [
      "Investor-defined rule validation: goals become proposed rules that stay inactive until the investor confirms the threshold",
      "Portfolio constraint verification by a deterministic Python engine — verdicts never come from a model",
      "ETF holdings look-through for direct and indirect company exposure",
      "Conflict detection and explanation between confirmed rules",
      "Interactive 3D issuer-exposure explorer built with Three.js",
      "AI-assisted analysis on Amazon Bedrock, with an Evidence Investigator that shows the sources behind each result",
    ],
    contributions: [
      "Implemented the deterministic rule-checking engine in Python",
      "Built the natural-language rule interpreter agent and the Evidence Investigator",
      "Led final release integration and the step-by-step UX for first-time users",
    ],
    tags: [
      { name: "Next.js / React / TypeScript", color: "blue-text-gradient" },
      { name: "Python / AWS Lambda / Bedrock", color: "green-text-gradient" },
      { name: "Three.js", color: "pink-text-gradient" },
    ],
    disclaimer:
      "Fictional portfolios only — a decision-review prototype, not investment advice.",
    team: "Team project",
    image: polyfinancesDatathon,
    imageAlt:
      "ETHOS landing page: “Invest with conviction. Not contradiction.” above a four-step journey — choose a profile, set your limits, test an idea, understand the result.",
    demo_link: "https://frontend-nu-ten-2dcoorcmis.vercel.app",
    demo_note: "Live demo runs on built-in test data",
    source_code_link: "https://github.com/SMLG120/DatathonPolyFinance2026",
    resources: [
      { label: "Documentation technique", href: "https://github.com/SMLG120/DatathonPolyFinance2026/blob/main/docs/submission/technical-documentation.md" },
      { label: "Architecture AWS", href: "https://github.com/SMLG120/DatathonPolyFinance2026/blob/main/docs/submission/aws-architecture.md" },
      { label: "Diagramme AWS", href: "https://github.com/SMLG120/DatathonPolyFinance2026/blob/main/docs/submission/aws-architecture.svg" },
      { label: "Guide d’installation", href: "https://github.com/SMLG120/DatathonPolyFinance2026#quick-start-submitted-version-team-11" },
    ],
  },
];

export {
  services,
  technologies,
  skillGroups,
  experiences,
  education,
  projects,
  hackathons,
};
