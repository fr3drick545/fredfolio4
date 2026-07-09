import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Cursor = () => {
  const cursorControls = useAnimation();
  const [currentVar, setCurrentVar] = useState("");
  const changeState = (newState) => {
    if (newState === currentVar) return;

    setCurrentVar(newState);
  };

  useEffect(() => {
    cursorControls.start(currentVar, { type: "tween" });
  }, [currentVar, cursorControls]);

  const transitionConfig = {
    type: "tween",
    duration: 0.2,
    ease: "easeBackOut",
  };

  const cursorVariants = {
    initial: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: transitionConfig,
    },
    homeBlock1: {
      scale: 10,
      x: "-50%",
      y: "-50%",
      transition: transitionConfig,
    },
    homeBlock2: {
      scale: 7,
      x: "-50%",
      y: "-50%",
      transition: transitionConfig,
    },
    titles: {
      scale: 4,
      x: "-50%",
      y: "-50%",
      transition: transitionConfig,
    },
    links: {
      scale: 2.2,
      x: "-50%",
      y: "-50%",
      transition: transitionConfig,
    },
    gridItem: {
      scale: 0.5,
      x: "-50%",
      y: "-50%",
      transition: transitionConfig,
    },
    video: {
      cursor: "auto",
    },
  };

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;
    
    cursor.style.left = -100 + "px";
    cursor.style.top = -100 + "px";

    const handleTouchStart = () => {
      cursor.style.display = "none";
    };

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const addToCursorScaleList = (elementToActOn, stateActivate) => {
      if (!elementToActOn) return;
      const handleMouseOver = () => changeState(stateActivate);
      const handleMouseLeave = () => changeState("initial");
      
      elementToActOn.addEventListener("mouseover", handleMouseOver);
      elementToActOn.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        elementToActOn.removeEventListener("mouseover", handleMouseOver);
        elementToActOn.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
    
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("mousemove", handleMouseMove);
    
    const cleanupFunctions = [];
    
    // * Home
    const home1 = document.querySelector(".home-block-1");
    const home2 = document.querySelector(".home-block-2");
    cleanupFunctions.push(addToCursorScaleList(home1, "homeBlock1"));
    cleanupFunctions.push(addToCursorScaleList(home2, "homeBlock2"));

    // * About
    const aboutTitle = document.querySelector(".about-heading");
    cleanupFunctions.push(addToCursorScaleList(aboutTitle, "titles"));

    // * Projects
    const projectTitle = document.querySelector(".project-heading");
    cleanupFunctions.push(addToCursorScaleList(projectTitle, "titles"));

    // * Footer
    const footerLinks = document.querySelectorAll(".contact-link");
    footerLinks.forEach((element) => {
      cleanupFunctions.push(addToCursorScaleList(element, "links"));
    });

    // * GridItems
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((element) => {
      cleanupFunctions.push(addToCursorScaleList(element, "gridItem"));
    });
    
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("mousemove", handleMouseMove);
      cleanupFunctions.forEach((cleanup) => cleanup && cleanup());
    };
  }, [changeState]);

  return (
    <motion.div
      className="cursor"
      id="custom-cursor"
      initial="initial"
      animate={cursorControls}
      variants={cursorVariants}
    ></motion.div>
  );
};

export default Cursor;
