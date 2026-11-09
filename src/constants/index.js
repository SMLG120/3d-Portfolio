import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  java,
  c,
  python,
  php,
  symfony,
  attestra,
  aiwaf,
  recmovie,
  cybersecurity,
  worldcup,
  teslha,
  stock,
  fintech,
  threejs,
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
    id: "projects",
    title: "Projects",
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
    name: "C",
    icon: c,
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
    name: "Symfony PHP",
    icon: symfony,
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
      "Participated in code reviews and utilized Docker, AWS, and Postman to streamline development workflows.",
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

// projectDate is the date of the first commit in each project's repository (UTC).
// Works.jsx displays projects newest first using this field.
const projects = [
  {
    name: "AI-WAF — AI-Powered Web Application Firewall",
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
    description:
      "Spring Boot microservices SIEM streaming events over Kafka to a rules engine that generates alerts and correlates them into incidents. Secured with Keycloak OIDC/JWT, RBAC, Redis rate limiting, and monitored via Prometheus/Grafana. React/TypeScript SOC dashboard.",
    tags: [
      { name: "Java 21 / Spring Boot", color: "blue-text-gradient" },
      { name: "Kafka / OpenSearch", color: "green-text-gradient" },
      { name: "Keycloak / K8s", color: "pink-text-gradient" },
    ],
    image: cybersecurity,
    source_code_link: "https://github.com/SMLG120/SIEM--Dashboard",
    projectDate: "2026-09-24",
  },
  {
    name: "FinTech Transaction Platform",
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
    description:
      "Interactive 3D electric-vehicle showroom with cars generated at runtime by a parametric design system. Includes an explorable 3D studio, engineering lab, multi-vehicle comparison, and an EV-vs-gas cost simulator, with every spec tracked per configuration, Zod-validated, and labelled by source.",
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
];

export { services, technologies, experiences, education, projects };
