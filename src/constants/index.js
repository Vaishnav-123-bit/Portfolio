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
  c3,
  c6,
  redux,
  c4,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  c2,
  c5,
  logos,
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
  {id:"academic",
    title:'Academics'
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "DSA",
    icon: backend,
  },
  {
    title: "UI / UX",
    icon: creator,
  },
];

const technologies = [
// name:"Next JS",
// icon:nextjs,
// },
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Media Content Developer",
    company_name: "PMKVY 4.0",
    icon: c5,
    iconBg: "#383E56",
    date: "Jun 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript, and MongoDB as part of a web development internship under PMKVY.",
      "Collaborating with cross-functional teams, including designers and other developers, to create user-friendly and high-quality web interfaces.",
      "Implementing responsive designs and ensuring cross-browser compatibility for seamless user experiences.",
      "Participating in code reviews and providing constructive feedback to improve code quality and performance.",
    ],
  },
  {
    title: "Front End Web Developer",
    company_name: "Kenmark iTan Solutions",
    icon: logos,
    iconBg: "#E6DEDD",
    date: "Apr 2024 - Aug 2024",
    points: [
      "Vikram Petrol Pump Admin Panel: Led frontend development using Next.js for dynamic UI, Bootstrap for responsive design, and Node.js for backend integration. Managed frontend architecture with GitLab for version control and Aapanel for hosting.",

      "Melo Music Distribution Platform: Developed the UI and integrated APIs to create a seamless user experience for music distribution. Focused on implementing meta tags and Google Tags for improved SEO and analytics.",

      "Collaborated with cross-functional teams, including designers and developers, to deliver user-friendly and high-quality web interfaces.",

      "Ensured responsive design and cross-browser compatibility for a consistent user experience across devices.",

      "Participated in code reviews, providing constructive feedback to enhance code quality and optimize performance.",
    ],
  },
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
const academics = [
  {
    title: "Bachelor of Engineering  Computer Science",
    company_name: "Thakur College of Engineering and Technology",
    icon: c6,
    iconBg: "#383E56",
    date: "2021 - 2025",
    points: [
      "Studying core computer science subjects, including Data Structures, Algorithms, Operating Systems, and Database Management Systems.",
      "Developing technical skills through hands-on projects using languages and technologies such as C++, Java, Python, and web development frameworks.",
      "Collaborating on group projects, which involve problem-solving and real-world application of engineering principles.",
      "Engaging in extracurricular activities, hackathons, and coding competitions to enhance practical knowledge and teamwork abilities.",
      "Participating in internships and industry interactions to gain exposure to professional practices and current industry trends.",
      "Conducting research and mini-projects to deepen understanding of specialized areas, such as Artificial Intelligence, Machine Learning, and Cybersecurity.",
    ],
  }
  
];
const projects = [
  {
    name: "Style Sphere",
    description:
      "Developed a Next.js based e-commerce platform within the MERN stack , including a comprehensive Admin panel for product management, order processing, and user data control. Integrated Stripe for secure payments.",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
    ],
    image: c2,
    source_code_link: "https://github.com/Vaishnav-123-bit/Clothing-Store",
  },
  {
    name: "Ink Swipe",
    description:
      "Developed a MERN stack book reading application with distinct user and admin interfaces to enhance multi-page reading experience. Created admin panel for application control.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "protected-routing",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: c3,
    source_code_link: "https://github.com/Vaishnav-123-bit/mern-bookstore",
  },
  {
    name: "E-COMMERCE",
    description:
      "An eCommerce site using HTML, CSS, and JavaScript for product display, cart management, and dynamic updates. HTML structures content, CSS styles the design, and JavaScript enables interactivity like adding items to the cart.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: c4,
    source_code_link:
      "https://github.com/Vaishnav-123-bit/amazon-clone_frontend",
  },
];

export { services, technologies, experiences, testimonials, projects,academics };
