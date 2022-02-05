import React, { useEffect } from "react";

import Home from "./Home";
import About from "./About";
// import Background from "./Background";
import Cursor from "./Cursor";

import "./App.scss";

import { motion, useViewportScroll, useAnimation } from "framer-motion";

const App = () => {
  const interval = setInterval(() => appendTitle(), 1500);
  let titles = { size: 3, current: 0 };

  console.log("Hi There!");

  const appendTitle = () => {
    if (titles.current === 0) {
      document.title = "PM | A Game &";
    } else if (titles.current === 1) {
      document.title = "PM | Front-End ";
    } else if (titles.current === 2) {
      document.title = "PM | Developer ";
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
      backgroundColor: "rgb(17, 60, 252)",
    },
    colorChange1: {
      backgroundColor: "rgb(25, 52, 152)",
    },
    colorChange2: {
      backgroundColor: "rgb(21, 151, 229)",
    },
    colorChange3: {
      backgroundColor: "rgb(105, 218, 219)",
    },
  };

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={colorVariants}
      id="app"
    >
      <Cursor />
      {/* <Background /> */}
      <motion.div className="app-inner">
        <Home />
        <About />
      </motion.div>
    </motion.div>
  );
};

export default App;
