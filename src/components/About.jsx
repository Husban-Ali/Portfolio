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
        Hi, I’m <span className="text-[#FF9900] font-semibold">Husban Ali</span> — 
        an <span className="text-[#FF9900]">AWS Associate Developer</span> and 
        <span className="text-[#FF9900]"> MERN Stack Engineer</span>.  
        I work extensively with AWS services like{" "}
        <span className="text-[#FF9900]">Lambda</span>,{" "}
        <span className="text-[#FF9900]">API Gateway</span>,{" "}
        <span className="text-[#FF9900]">DynamoDB</span>,{" "}
        <span className="text-[#FF9900]">S3</span>,{" "}
        <span className="text-[#FF9900]">CloudFormation</span>, and{" "}
        <span className="text-[#FF9900]">IAM</span> to build secure and scalable cloud-native applications.  
        On the development side, I leverage{" "}
        <span className="text-[#FF9900]">React.js</span>,{" "}
        <span className="text-[#FF9900]">Node.js</span>,{" "}
        <span className="text-[#FF9900]">Express</span>, and{" "}
        <span className="text-[#FF9900]">MongoDB</span> to design and deliver modern full-stack web applications.  
        I also implement{" "}
        <span className="text-[#FF9900]">CI/CD pipelines</span> using{" "}
        <span className="text-[#FF9900]">AWS CodePipeline</span>,{" "}
        <span className="text-[#FF9900]">CodeBuild</span>,{" "}
        <span className="text-[#FF9900]">CodeDeploy</span>, and{" "}
        <span className="text-[#FF9900]">GitHub Actions</span>, ensuring smooth 
        and automated deployments.  
        My focus is on combining{" "}
        <span className="text-[#FF9900]">serverless cloud infrastructure</span>,{" "}
        <span className="text-[#FF9900]">DevOps practices</span>, and{" "}
        <span className="text-[#FF9900]">full-stack engineering</span> to deliver 
        reliable, secure, and high-performance solutions.
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
