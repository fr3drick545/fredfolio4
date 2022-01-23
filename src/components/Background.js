import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.div id="background">
      <motion.div className="circle"></motion.div>
    </motion.div>
  );
};

export default Background;
