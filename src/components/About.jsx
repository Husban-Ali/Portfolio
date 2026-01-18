import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-r from-[#FF9900] to-[#232F3E] shadow-lg rounded-[20px] p-[1px]"
      >
        <div className="bg-[#0d1117] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={`${icon}${icon.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={title}
            loading="lazy"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-[#FF9900] text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      {/* Intro Text */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-[14px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-1"
      >
        Hi, I'm <span className="text-[#FF9900] font-semibold">Husban Ali</span> — 
        an <span className="text-[#FF9900]">AWS Certified Full Stack Developer</span> with hands-on experience in designing and developing scalable web applications using{" "}
        <span className="text-[#FF9900]">React.js</span>,{" "}
        <span className="text-[#FF9900]">Next.js</span>,{" "}
        <span className="text-[#FF9900]">Express.js</span>,{" "}
        <span className="text-[#FF9900]">MongoDB</span>, and{" "}
        <span className="text-[#FF9900]">AWS services</span>. I'm experienced in building{" "}
        <span className="text-[#FF9900]">cloud-native</span> and{" "}
        <span className="text-[#FF9900]">serverless solutions</span>, integrating front-end and back-end systems to deliver secure, high-performance applications.
        <br /><br />
        I work extensively with AWS services like{" "}
        <span className="text-[#FF9900]">Lambda</span>,{" "}
        <span className="text-[#FF9900]">API Gateway</span>,{" "}
        <span className="text-[#FF9900]">DynamoDB</span>,{" "}
        <span className="text-[#FF9900]">S3</span>,{" "}
        <span className="text-[#FF9900]">CloudFormation</span>, and implement{" "}
        <span className="text-[#FF9900]">CI/CD pipelines</span> using{" "}
        <span className="text-[#FF9900]">AWS CodePipeline</span>,{" "}
        <span className="text-[#FF9900]">CodeBuild</span>, and{" "}
        <span className="text-[#FF9900]">GitHub Actions</span>. Experienced in integrating front-end and back-end systems to deliver secure, high-performance applications.
        <br /><br />
        <span className="text-[#FF9900] font-semibold">Certifications:</span>
        <br />
        • AWS Developer Associate (Udemy, Aug 2025)
        <br />
        • Cloud Practitioner - AWS (July 2025)
        <br />
        • Full Stack Development – Saylani Mass IT Training Program (June 2024)
      </motion.p>

      {/* Services Cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
