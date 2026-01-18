import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col sm:flex-row items-center justify-between">
      {/* Left Section: Text */}
      <div
        className={`${styles.paddingX} sm:w-1/2 w-full flex flex-col justify-center gap-5 mt-20 sm:mt-0`}
      >
        {/* Left Line + Dot */}
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#FF9900]" /> {/* AWS Orange */}
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#FF9900] to-[#232F3E]" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#FF9900]">Husban Ali</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-gray-200`}>
              AWS Certified Full Stack Developer. <br className="sm:block hidden" />
              I design scalable cloud solutions & build modern web applications.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section: Computer Canvas */}
      <div className="sm:w-1/2 w-full h-[500px] sm:h-full">
        <ComputersCanvas />
      </div>

      {/* Scroll Down Animation */}
      <div className="absolute sm:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#FF9900] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#FF9900] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
