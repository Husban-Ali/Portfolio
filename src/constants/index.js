// import {
//   mongodb,
//   git,
 
// } from "../../public/assets";
// Direct path from public folder

const lambda = "/assets/lambda.svg";
const dynamodb = "/assets/dynamodb.png";
const CICD = "/assets/CICD.svg";
const mern = "/assets/mern.png";
const cloudformation = "/assets/cloudformation.svg";
const EC2 = "/assets/EC2.svg";
const optima = "/assets/optima.png";
const barber = "/assets/barber.png";
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
const radiant = "/assets/RandH.png"; // Using RandH logo as placeholder for Radiant Solutions
const chat = "/assets/Chat.png";
const FandH = "/assets/FandH.png";
const javascript =
  "https://ik.imagekit.io/bqzlidc77g/my%20portfolio/tech/javascript.png?updatedAt=1749961104755";
const reactjs =
  "https://ik.imagekit.io/bqzlidc77g/my%20portfolio/tech/reactjs.png?updatedAt=1749961105057";
const tailwind =
  "https://ik.imagekit.io/bqzlidc77g/my%20portfolio/tech/tailwind.png?updatedAt=1749961111586";
const nodejs =
  "https://ik.imagekit.io/bqzlidc77g/my%20portfolio/tech/nodejs.png?updatedAt=1749961104709";
const mongodb =
  "https://ik.imagekit.io/bqzlidc77g/my%20portfolio/tech/mongodb.png?updatedAt=1749961104590";
const git =
  "https://ik.imagekit.io/bqzlidc77g/my%20portfolio/tech/git.png?updatedAt=1749961104346";


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
  title: "Full Stack Developer",
  company_name: "Radiant Solutions",
  icon: radiant,
  iconBg: "#E6DEDD",
  date: "July 2025 - Present",
  points: [
    "Developing and maintaining scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
    "Designing and implementing RESTful APIs and integrating third-party services to enhance application functionality.",
    "Building responsive and server-side rendered user interfaces using Next.js and Material UI (MUI).",
    "Collaborating with cross-functional teams to improve performance, security, and scalability."
  ],
},
{
  title: "Full Stack Developer",
  company_name: "R&H Software House",
  icon: RH,
  iconBg: "#FFFFFF",
  date: "Nov 2024 - July 2025",
  points: [
    "Developed and maintained production-level web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    "Optimized backend logic and database queries to improve application performance and response time.",
    "Implemented clean, reusable, and maintainable code following industry best practices.",
    "Worked closely with designers and developers to deliver user-friendly and efficient solutions."
  ],
},
{
  title: "Backend Developer Intern",
  company_name: "Saylani Tech (SMIT)",
  icon: smit,
  iconBg: "#0188E3",
  date: "Sept 2024 - Oct 2024",
  points: [
    "Selected for a competitive 2-month Backend Developer Internship at SMIT, working within a 10-member development team.",
    "Contributed to backend architecture, database design, and REST API development.",
    "Worked on server-side logic, API integration, debugging, and performance improvements.",
    "Gained hands-on experience in professional backend development and collaborative problem-solving."
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
    name: "Stack Collaboration & Management System",
    description: "A centralized platform designed to streamline internal communication, task management, project collaboration, and organizing team communications within Radiant Solutions RS (Pvt) Ltd. The system enhances team productivity by integrating Slack channels, managing project updates, and efficiently managing resources across departments.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "yellow-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Slack API", color: "purple-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "JWT", color: "orange-text-gradient" },
      { name: "Axios", color: "green-text-gradient" },
    ],
    image: optima,
    source_code_link: "https://github.com/Husban-Ali/",
    live_website_link: "https://management-frontend-ebon.vercel.app/login",
  },
  {
    name: "Barber Shop - Full Service Platform",
    description: "A comprehensive barber shop management platform featuring online appointment booking, payment integration, product marketplace, and customer management. Built with the MERN stack, it streamlines salon operations with real-time scheduling, secure payment processing, inventory management, and seamless customer experience.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "yellow-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Payment Gateway", color: "purple-text-gradient" },
      { name: "Booking System", color: "orange-text-gradient" },
      { name: "E-commerce", color: "blue-text-gradient" },
    ],
    image: barber,
    source_code_link: "https://github.com/Husban-Ali/",
    live_website_link: "https://barber-frontend-eight.vercel.app/",
  },
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
  // {
  //   name: "Stopwatch",
  //   description:
  //     "A stopwatch with reset and pause feature for user built using vanilla JS",
  //   tags: [
  //     { name: "javascript", color: "blue-text-gradient" },
  //     { name: "html", color: "green-text-gradient" },
  //     { name: "css", color: "pink-text-gradient" },
  //   ],
  //   image: stopwatch,
  //   source_code_link: "https://github.com/Husban-Ali/stopwatch.git",
  //   live_website_link: "",
  // },
  // {
  //   name: "Calculator",
  //   description:
  //     "A JavaScript calculator with all arithmetic operations enabled",
  //   tags: [
  //     { name: "javascript", color: "blue-text-gradient" },
  //     { name: "html", color: "green-text-gradient" },
  //     { name: "css", color: "pink-text-gradient" },
  //   ],
  //   image: calculator,
  //   source_code_link: "https://github.com/Husban-Ali/Calculator.git",
  //   live_website_link: "https://husban-ali.github.io/Calculator/",
  // },
];


export { services, technologies, experiences,  projects };
