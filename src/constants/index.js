import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'

// Import codec & vault separately
import vault from "../assets/company/vault.png";
import freelancer from "../assets/company/freelancer.svg";


// Import more apps 
import sass from "../assets/tech/sass.png";
import python from "../assets/tech/python.png";
import chatgpt from "../assets/tech/chatgpt.png";
import firebase from "../assets/tech/firebase.png";
import bootstrap from "../assets/tech/bootstrap.png";
import adobe from "../assets/tech/adobe.png";

//import project resources
import project1 from "../assets/project1.png";
import netflix from "../assets/netflix.png";
import travel from "../assets/project2.png";
import planto from "../assets/planto.png";
import quick from "../assets/quick.png";
import juicy from "../assets/juicy.png";


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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "UX Researcher",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Framer",
    icon: framer,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "adobe",
    icon: adobe,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "chatgpt",
    icon: chatgpt,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  
  
  
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Vault of Codes",
    icon: vault,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Building modular and reusable UI components using React.js and Tailwind CSS to accelerate development and improve code maintainability.",
      "Improving user experience by applying clean design principles and ensuring cross-device compatibility.",
      "Translating high-fidelity designs from Figma and Adobe XD into responsive and maintainable front-end code.",
      "Streamlining the design-to-development workflow by collaborating closely with designers and applying modern UI practices.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Dec 2024 - present",
    points: [
      "Designing user-centric interfaces for web and mobile applications using Figma, Adobe XD, and modern UI/UX practices.",
      "Collaborating with clients to gather requirements and deliver tailored design solutions that align with business goals.",
      "Creating responsive wireframes, prototypes, and design systems to ensure consistency across platforms and devices.",
      "Improving usability and engagement by conducting user research and incorporating feedback into design iterations."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kavi proved me wrong.",
    name: "Godwin Sameul",
    designation: "Student",
    company: "XYZ Company",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kavi does.",
    name: "Mohammed Thaher",
    designation: "Student",
    company: "XYZ Company",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Kavi's design made our interface intuitive, visually stunning, and seamlessly modern — users instantly loved.",
    name: "Leo Das",
    designation: "Student",
    company: "XYZ Company",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "YummyFoodshow",
    description:
      "Yummy Foodshow is a responsive restaurant website that offers users an elegant and engaging dining experience, featuring interactive menu browsing, table reservations, and seamless navigation — all built using HTML, CSS, Bootstrap, and JavaScript",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "white-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Kaviarasan-J/YummyFoodshow",
  },
  {
    name: "Travellogo",
    description:
      "Travellogo is a responsive single-page travel web app that highlights popular tourist destinations through a modern UI and clean layout. Built with React.js and Tailwind CSS, it emphasizes component reusability, responsiveness, and smooth deployment via Vite and Netlify.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "animation",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Kaviarasan-J/Travellogo",
  },
  {
    name: "Netflix Data Analysis",
    description:
      "Netflix SQL Project is a data analysis project focused on exploring Netflix's content library using SQL. It involves querying a structured dataset to extract insights such as genre distribution, content types, release trends, and more — showcasing strong analytical and database querying skills",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "DBMS",
        color: "white-text-gradient",
      },
      {
        name: "Data Cleaning",
        color: "green-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/Kaviarasan-J/Netflix_sql_project",
  },
  {
    name: "Planto",
    description:
      "Planeto is a modern and visually engaging UI/UX design concept for a space exploration platform. The project focuses on clean layout, immersive visuals, and intuitive navigation — delivering a futuristic user experience.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Web Design",
        color: "white-text-gradient",
      },
      {
        name: "Wireframe",
        color: "green-text-gradient",
      },
    ],
    image: planto,
    source_code_link: "https://www.behance.net/gallery/225423283/planeto",
  },
  {
    name: "Juicy",
    description:
      "This Figma project showcases a sleek and responsive ecommerce UI design, featuring a clean layout, modern components, and mobile-first responsiveness — ideal for online retail experiences.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Smart Animation",
        color: "white-text-gradient",
      },
      {
        name: "Web Design",
        color: "green-text-gradient",
      },
    ],
    image: juicy,
    source_code_link: "https://www.behance.net/kaviarasan-j",
  },
  {
    name: "Quick Bite Case Study",
    description:
      "This Figma case study presents a pre-order system designed for college campuses, featuring intuitive user flows, reduced wait times, and streamlined food ordering — built to solve real-world challenges.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "miro",
        color: "white-text-gradient",
      },
      {
        name: "Ux Research",
        color: "green-text-gradient",
      },
      {
        name: "UX Content",
        color: "green-text-gradient",
      },
    ],
    image: quick,
    source_code_link: "https://www.behance.net/kaviarasan-j",
  },
];

export { services, technologies, experiences, testimonials, projects };
