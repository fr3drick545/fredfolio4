import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>About Me</h1>
    </motion.div>
  );
};

export default About;
