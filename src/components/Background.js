import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  const movement = {
    start: {},
    end: (delayValue) => ({
      marginLeft: ["10%", "80%", "80%", "10%", "10%"],
      marginTop: ["10vh", "10vh", "80vh", "80vh", "10vh"],
      // scale: [1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1],
      transition: {
        type: "spring",
        duration: 10,
        repeat: Infinity,
        delay: delayValue,
      },
    }),
    hover: { scale: 3 },
  };

  return (
    <motion.div id="background">
      <motion.div
        className="circle"
        initial="start"
        animate="end"
        whileHover="hover"
        custom={0}
        variants={movement}
      />
      <motion.div
        className="circle"
        initial="start"
        animate="end"
        whileHover="hover"
        custom={1}
        variants={movement}
      />
      <motion.div
        className="circle"
        initial="start"
        animate="end"
        whileHover="hover"
        custom={2}
        variants={movement}
      />
    </motion.div>
  );
};

export default Background;
