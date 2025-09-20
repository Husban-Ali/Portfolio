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
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../../public/assets";
// Direct path from public folder
const lambda = "/assets/lambda.svg";
const dynamodb = "/assets/dynamodb.png";
const CICD = "/assets/CICD.svg";
const mern = "/assets/mern.png";
const cloudformation = "/assets/cloudformation.svg";
const EC2 = "/assets/EC2.svg";
const image3 = "/assets/image3.png";
const image4 = "/assets/image4.png";
const image2 = "/assets/image2.png";
const airport = "/assets/airport.png";
const todo = "/assets/react-todo.png";
const stopwatch = "/assets/stopwatch.png";
const calculator = "/assets/calculator.png";
const luxestore = "/assets/luxestore.png";
const smit = "/assets/smit.png";
const RH = "/assets/RandH.png";
const chat = "/assets/Chat.png";
const FandH = "/assets/FandH.png";


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
    title: "Project",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Development",
    icon: mern,
  },
  {
    title: "AWS Serverless ",
    icon: lambda,
  },
  {
    title: "Cloud Databases",
    icon: dynamodb,
  },
  {
    title: "CI/CD & DevOps (CodePipeline, CodeBuild, GitHub Actions)",
    icon: CICD,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "cloudformation",
    icon: cloudformation,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "CICD",
    icon: CICD,
  },
  {
    name: "DynamoDB",
    icon: dynamodb,
  },

  {
    name: "Lambda",
    icon: lambda,
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
    name: "EC2",
    icon: EC2,
  },
];

const experiences = [
  {
    title: "Backend Developer Intern",
    company_name: "SMIT – Saylani Mass And I.T. Training",
    icon: smit,
    iconBg: "#0188E3",
    date: "Sept 2024 - Oct 2024",
    points: [
      "Selected for a competitive 2-month internship at SMIT among numerous talented students.",
      "Worked as a backend developer in a 10-member team on the Saylani Tech website.",
      "Contributed to the ongoing official SMIT website project (not yet launched).",
      "Gained invaluable experience in web development, teamwork, and collaborative problem-solving.",
    ],
  },
  {
    title: "Sales Team Incharge",
    company_name: "R and H Software House, Pakistan",
    icon: RH,
    iconBg: "#ffff",
    date: "Nov 2022 - Aug 2024",
    points: [
      "Led the sales team and managed online presence across multiple platforms.",
      "Handled artwork creation and supervised design tasks for social media campaigns.",
      "Oversaw Twitter sales activities and boosted client engagement.",
      "Coordinated marketing activities on Facebook and Discord to grow outreach.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Real-Time Chat App",
    description:     "A modern real-time chat application built with React and AWS, featuring secure authentication, instant messaging, voice notes, and image sharing. The backend leverages AWS Lambda, API Gateway, and DynamoDB for a fully serverless and scalable architecture, while WebSocket integration ensures seamless live communication.",
    tags: [
    { name: "AWS Lambda", color: "green-text-gradient" },
    { name: "API Gateway", color: "purple-text-gradient" },
    { name: "DynamoDB", color: "yellow-text-gradient" },
    { name: "S3 Bucket", color: "pink-text-gradient" },
    { name: "WebSocket", color: "orange-text-gradient" },

    ],
    image: chat,
    source_code_link: "https://github.com/Husban-Ali/Husban-ChatApp.git",
    live_website_link: "https://d2j16s8yniu6t1.cloudfront.net/",
  },
  {
    name: "Luxe Store – E-commerce Platform",
    description: "A modern and responsive e-commerce web application designed to deliver a seamless online shopping experience. Built with the MERN stack and deployed on AWS (Free Tier), Luxe Store provides users with a clean UI and secure functionality.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "AWS Lambda", color: "green-text-gradient" },
      { name: "AWS API Gateway", color: "purple-text-gradient" },
      { name: "AWS DynamoDB", color: "pink-text-gradient" },
      { name: "AWS S3 Bucket", color: "blue-text-gradient" },

    ],
    image: luxestore,
    source_code_link: "https://github.com/Husban-Ali/AWS-Ecommerce.git",
    live_website_link: "https://d2aqprnfyi3s3y.cloudfront.net/",
  },

  {
    name: "Saylani TEC",
    description: "The official website of Saylani Tech Limited, developed during my internship at Saylani Mass IT Training (SMIT). Built using the MERN stack with Tailwind CSS, the platform showcases company services, highlights key initiatives, and provides a modern, responsive, and user-friendly interface.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: image3,
    source_code_link: "https://github.com/Husban-Ali/saylani_tech.git",
    live_website_link: "https://saylanitech.com/",
  },
  {
    name: "SMIT WEBSITE",
    description: "A dynamic web application developed during my internship at Saylani Mass IT Training (SMIT). Built with the MERN stack, the website features responsive design, structured course sections, student-focused modules, and smooth navigation to deliver a user-friendly experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: image4,
    source_code_link: "https://github.com/MRsabcod/SMIT-Web.git",
    live_website_link: "https://smit-web-iota.vercel.app/",
  },
  {
  name: "F&H International - Import Export Website",
  description:
    "A professional import-export company website developed with React and MongoDB, designed to showcase services, manage inquiries, and streamline business communication. The platform highlights product portfolios, integrates a dynamic services section, and ensures smooth user experience for clients worldwide.",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "MongoDB", color: "green-text-gradient" },
    { name: "Node.js", color: "yellow-text-gradient" },
    { name: "Express", color: "pink-text-gradient" },
  ],
  image: FandH, // yahan apko apna image import karna hoga
  source_code_link: "https://github.com/Husban-Ali/fh-frontend.git",
  live_website_link: "https://fh-frontend-steel.vercel.app/",
},
  {
    name: "Blog",
    description:
      "A service side blog writing app made using HTML, CSS and Firebase as a database",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: image2,
    source_code_link: "https://github.com/Husban-Ali/patanh-bs-ban-gyi-.git",
    live_website_link:
      "https://husban-ali.github.io/patanh-bs-ban-gyi-/",
  },
  {
    name: "Airport Management System",
    description:
      "Flight management system, developed through Java by integrating Java Swing library. It completely works on the concept of Object Oriented Programming.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "swing", color: "green-text-gradient" },
      { name: "oop", color: "pink-text-gradient" },
    ],
    image: airport,
    source_code_link:
      "https://github.com/HamizMuzaffer/Airport-Management.git",
    live_website_link:
      "https://github.com/HamizMuzaffer/Airport-Management.git",
  },
  {
    name: "Stopwatch",
    description:
      "A stopwatch with reset and pause feature for user built using vanilla JS",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: stopwatch,
    source_code_link: "https://github.com/Husban-Ali/stopwatch.gitt",
    live_website_link: "",
  },
  {
    name: "Calculator",
    description:
      "A JavaScript calculator with all arithmetic operations enabled",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: calculator,
    source_code_link: "https://github.com/Husban-Ali/Calculator.git",
    live_website_link: "https://husban-ali.github.io/Calculator/",
  },
];


export { services, technologies, experiences,  projects };
