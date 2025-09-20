import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./SectionWrapper";

const githubIcon =
  "https://cdn-icons-png.flaticon.com/512/733/733553.png";

// ✅ SafeTilt (desktop only)
const SafeTilt = ({ children, ...props }) => {
  return (
    <>
      {/* Desktop → Tilt */}
      <div className="hidden sm:block w-full h-full">
        <Tilt {...props}>{children}</Tilt>
      </div>
      {/* Mobile → Simple div */}
      <div className="block sm:hidden w-full h-full">{children}</div>
    </>
  );
};

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
      className="w-full h-full" // ✅ width fix
    >
      <SafeTilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl h-full flex flex-col" // ✅ no fixed sm:w-[90%]
      >
        {/* Image Section */}
        <div
          className="w-full h-[220px] sm:h-[230px] relative cursor-pointer"
          onClick={() =>
            live_website_link && window.open(live_website_link, "_blank")
          }
        >
          <img
            src={
              image
                ? `${image}${image.includes("?") ? "&" : "?"}tr=f-auto`
                : ""
            }
            alt={name || "project"}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end mt-3 card-img_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
              >
                <img
                  src={githubIcon}
                  alt="GitHub Icon"
                  loading="lazy"
                  className="object-contain w-1/2 h-1/2"
                />
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-5 flex flex-col flex-grow">
          <h3 className="text-white font-bold text-[18px] sm:text-[20px] md:text-[24px]">
            {name}
          </h3>
          <p className="text-secondary mt-3 text-[13px] sm:text-[15px] flex-grow leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <span
                key={tag.name}
                className={`${tag.color} text-[12px] sm:text-[14px] md:text-[15px]`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </SafeTilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="overflow-x-hidden"> {/* ✅ Prevent horizontal scroll */}
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Things I’ve Built </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-6"
        >
          <div className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Here are some of the projects I’ve built using modern web and
            <span className="text-[#FF9900] font-medium"> AWS cloud technologies</span>.
            From <span className="text-[#FF9900] font-medium">frontend animations</span> to
            <span className="text-[#FF9900] font-medium"> backend logic</span> and
            <span className="text-[#FF9900] font-medium"> cloud-native deployments</span>,
            with live demos and source code provided, these works reflect my hands-on
            experience in building
            <span className="text-[#FF9900] font-medium"> scalable</span>,
            <span className="text-[#FF9900] font-medium"> secure</span>, and
            <span className="text-[#FF9900] font-medium"> maintainable</span> applications.
          </div>
        </motion.div>
      </div>

      {/* ✅ Responsive Grid with vertical gap */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8 items-stretch">
        {projects?.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(Works, "projects");
