import React, { useEffect, useState } from "react";

import Home from "./Home";
import About from "./About";

import "./App.scss";

import { motion, useViewportScroll, useAnimation } from "framer-motion";

const App = () => {
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    console.log(scrollY.get());
    scrollY.onChange(() => {
      if (scrollY.get() < 200) {
        controls.start("initial");
      }
      if (scrollY.get() >= 200) {
        controls.start("colorChange1");
      }
    });
  }, [scrollY, controls]);

  const colorVariants = {
    initial: {
      backgroundColor: "rgb(139, 255, 255)",
    },
    colorChange1: {
      backgroundColor: "rgb(130, 172, 255)",
    },
    colorChange2: {
      backgroundColor: "rgb(143, 113, 255)",
    },
    colorChange3: {
      backgroundColor: "rgb(255, 93, 158)",
    },
  };

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={colorVariants}
      id="app"
    >
      <Home />
      <About />
    </motion.div>
  );
};

export default App;
