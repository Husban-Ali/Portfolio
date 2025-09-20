import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} className="relative w-full mx-auto px-4 sm:px-8">
        <motion.div>
          <Component />
        </motion.div>
      </section>
    );
  };

export { SectionWrapper };
