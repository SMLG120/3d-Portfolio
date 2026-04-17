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
  meta,
  starbucks,
  tesla,
  attestra,
  yangtze,
  assl,
  grocheap,
  shopify,
  carrent,
  jobit,
  osProject,
  stock,
  aiwaf,
  recmovie,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Security Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Security Engineer",
    icon: creator,
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
    name: "Php",
    icon: php,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Symfony PHP",
    icon: symfony,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
    company_name: "Attestra",
    icon: attestra,
    iconBg: "#E6DEDD",
    date: "May 2025 - Aug 2025",
    points: [
      "Hardened PHP data-extraction pipelines with strict input sanitization against the DairyTrace & SimpliTrace, preventing malformed data ingestion and improving regulatory reporting accuracy.",
      "Automated livestock traceability workflows via PHP scripting and scheduled jobs, eliminating manual data handoffs and reducing manual effort by 60%.",
      "Debugged and resolved critical backend issues (around 50 bugs) across jQuery, Oracle SQL, and Zend PHP, cutting system cleanup time by 50%; refactored CI/CD pipelines and optimized SQL queries, reducing build-to-deploy time by 25%."
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Attestra",
    icon: attestra,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Contributed to back-end development using PHP Symfony and REST APIs and front-end enhancements with React Admin.",
      "Developed a 'Newest' feature enabling efficient data retrieval from the server to the client interface.",
      "Gained hands-on experience with AWS cloud under supervisor guidance and utilized Docker, IntelliJ, and Postman to support and streamline development workflows.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Academic Tutor",
    company_name: "Edu Yangtze",
    icon: yangtze,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Organized and graded exams to assess student progress",
      "Provided instruction in core subjects, including mathematics, French, and English.",
      "Fostered a solid academic foundation and promoted students’ critical thinking and problem-solving",
      "Key skills: Communication, Tutoring, Patience, Assistance",
    ],
  },
  {
    title: "Soccer Coach",
    company_name: "ASSL",
    icon: assl,
    iconBg: "#383E56",
    date: "Jan 2022 - Now",
    points: [
      "Established strong relationships with parents and supervisors through regular communication, meetings, and feedback sessions, ensuring a collaborative approach to player development.",
      "Organized team activities and events to strengthen community ties.",
      "Addressed individual player needs and concerns, fostering a suppodrtive atmosphere that enhances player performance and enjoyment.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Lorem ipsum Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Threat Web Application Firewall",
    description:
      "Developed a real-time threat detection system for HTTP traffic, combining a Regex-based rule engine (inspired by ModSecurity)",
    tags: [
      {
        name: "TypeScript/JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: aiwaf,
    source_code_link: "https://github.com/SMLG120/AI-Threat-Detector",
  },
  {
    name: "Recommendation Movie ML",
    description:
      "Team Project building a content-based XGBoost recommender system serving 1M+ users across 27K movies, deployed as a Dockerized Flask REST API consuming real-time Kafka event streams for live user activity ingestion.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "GitLab CI/CD",
        color: "pink-text-gradient",
      },
    ],
    image: recmovie,
    source_code_link: "https://github.com/SMLG120/Movie-Recommender-System",
  },
  {
    name: "Stock App",
    description:
      "Building a real-time stock market app with live prices, search, personalized alerts, interactive charts, AI-powered insights, daily news summary, watchlists, powered by Next.js, Better Auth, and Inngest for seamless automation.",
    tags: [
      {
        name: "TypeScript programming",
        color: "blue-text-gradient",
      },
      {
        name: "Inngest",
        color: "green-text-gradient",
      },
      {
        name: "VSCode",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/SMLG120/Stock-App-Tracker",
  },
];

export { services, technologies, experiences, testimonials, projects };