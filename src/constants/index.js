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
    name: "Soundify",
    description:
      "Soundify is a web app that allows users to search for and listen to music. It uses the MongoDB to store music data and the API to fetch music data and provides a simple interface for users to search for and play music.",
    tags: [
      {
        name: "TypeScript/JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SMLG120/Soundify",
  },
  {
    name: "GroCheap",
    description:
      "The economy sucks, and EVERYONE's complaining about grocery prices being sky-high! So, where the heck do you shop for cheap stuff? By scraping the web for grocery prices, we store them in a database and then can fetch them at any time to check for prices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "selenium",
        color: "pink-text-gradient",
      },
    ],
    image: grocheap,
    source_code_link: "https://github.com/dyune/grocheap-project",
  },
  {
    name: "Simulated Command Shell",
    description:
      "Along with a colleague from COMP310 class, we made a simulated command shell that required some operating systems knowledge, such as processes, memory management, scheduling policies, multithreading, paging infrastructures, etc...",
    tags: [
      {
        name: "C programming",
        color: "blue-text-gradient",
      },
      {
        name: "GitLab",
        color: "green-text-gradient",
      },
      {
        name: "VSCode",
        color: "pink-text-gradient",
      },
    ],
    image: osProject,
    source_code_link: "https://github.com/SMLG120/Projects/tree/main/OS",
  },
];

export { services, technologies, experiences, testimonials, projects };