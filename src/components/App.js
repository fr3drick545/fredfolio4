import React, { useEffect } from "react";

import Home from "./Home";
import About from "./About";

import "./App.scss";

import { motion, useViewportScroll, useAnimation } from "framer-motion";

const App = () => {
  const interval = setInterval(() => appendTitle(), 2000);
  let titles = { size: 2, current: 0 };

  console.log("Hi There!");

  const appendTitle = () => {
    if (titles.current === 0) {
      document.title = "Prakhhar Makhija | Game Dev";
    } else if (titles.current === 1) {
      document.title = "Prakhhar Makhija | Front-End Dev";
    }

    titles.current++;

    if (titles.current === titles.size) {
      titles.current = 0;
    }
  };

  useEffect(() => {
    return () => clearInterval(interval);
  });

  const controls = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
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
