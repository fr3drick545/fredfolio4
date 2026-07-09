import React, { useEffect } from "react";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
// import Background from "./Background";
import Cursor from "./Cursor";
import Footer from "./Footer";

import "./App.scss";

import { motion, useViewportScroll, useAnimation } from "framer-motion";

const App = () => {
  const titles = React.useRef({ size: 3, current: 0 });

  console.log("Hi There!");

  const appendTitle = () => {
    if (titles.current.current === 0) {
      document.title = "PM | A Game &";
    } else if (titles.current.current === 1) {
      document.title = "PM | Front-End ";
    } else if (titles.current.current === 2) {
      document.title = "PM | Developer ";
    }

    titles.current.current++;

    if (titles.current.current === titles.current.size) {
      titles.current.current = 0;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => appendTitle(), 1500);
    return () => clearInterval(interval);
  }, []);

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
      if (scrollY.get() >= 1600) {
        controls.start("colorChange2");
      }
    });
  }, [scrollY, controls]);

  const bgDuration = 0.2;
  const colorVariants = {
    initial: {
      backgroundColor: "rgb(0, 113, 121)",
      transition: { duration: bgDuration },
    },
    colorChange1: {
      backgroundColor: "rgb(0, 51, 100)",
      transition: { duration: bgDuration },
    },
    colorChange2: {
      backgroundColor: "rgb(0, 91, 176)",
      transition: { duration: bgDuration },
    },
    colorChange3: {
      backgroundColor: "rgb(105, 218, 219)",
      transition: { duration: bgDuration },
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
        <Projects />
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default App;
