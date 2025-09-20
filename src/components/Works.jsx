import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_website_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex" // 👈 ensure equal height distribution
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl min-w-[300px] sm:w-[360px] flex flex-col h-full"
      >
        {/* Image Section */}
        <div
          className="w-full h-[230px] relative cursor-pointer"
          onClick={() => window.open(live_website_link, "_blank")}
        >
          <img
            src={`${image}${image.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end mt-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            >
              <img
                src={`${github}${github.includes("?") ? "&" : "?"}tr=f-auto`}
                alt="GitHub Icon"
                loading="lazy"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-5 flex flex-col flex-grow">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-4 text-[15px] flex-grow">
            {description}
          </p>

          {/* Tags ko bottom par fix karne ke liye */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`${tag.color} text-[15px]`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Things I’ve Built </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-1"
        >
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Here are some of the projects I’ve built using modern web and
            <span className="text-[#FF9900] font-medium"> AWS cloud technologies</span>.
            From <span className="text-[#FF9900] font-medium">frontend animations</span>
            to <span className="text-[#FF9900] font-medium">backend logic</span> and
            <span className="text-[#FF9900] font-medium"> cloud-native deployments</span>,
            with live demos and source code provided, these works reflect my
            hands-on experience in building
            <span className="text-[#FF9900] font-medium"> scalable</span>,
            <span className="text-[#FF9900] font-medium"> secure</span>, and
            <span className="text-[#FF9900] font-medium"> maintainable</span> applications.
          </p>

        </motion.p>
      </div>
      <div className=" mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works,"projects");
