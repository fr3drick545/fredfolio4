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
    cursorControls.start(currentVar);
  }, [currentVar, cursorControls]);

  const cursorVariants = {
    initial: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.6, bounce: 0.4 },
    },
    homeBlock1: {
      scale: 9,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.6, bounce: 0 },
    },
    homeBlock2: {
      scale: 7,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.6, bounce: 0 },
    },
    titles: {
      scale: 4,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.6, bounce: 0 },
    },
    links: {
      scale: 2.2,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.6, bounce: 0 },
    },
    video: {
      scale: 0.5,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.6, bounce: 0 },
    },
  };

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = -100 + "px";
    cursor.style.top = -100 + "px";

    document.addEventListener("touchstart", (e) => {
      cursor.style.display = "none";
    });

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // * Home
    const home1 = document.querySelector(".home-block-1");
    const home2 = document.querySelector(".home-block-2");
    home1.addEventListener("mouseover", (e) => {
      changeState("homeBlock1");
    });
    home1.addEventListener("mouseleave", (e) => {
      changeState("initial");
    });

    home2.addEventListener("mouseover", (e) => {
      changeState("homeBlock2");
    });
    home2.addEventListener("mouseleave", (e) => {
      changeState("initial");
    });

    // * About
    const aboutTitle = document.querySelector(".about-heading");
    aboutTitle.addEventListener("mouseover", (e) => {
      changeState("titles");
    });
    aboutTitle.addEventListener("mouseleave", (e) => {
      changeState("initial");
    });

    // * Projects
    const projectTitle = document.querySelector(".project-heading");
    projectTitle.addEventListener("mouseover", (e) => {
      changeState("titles");
    });
    projectTitle.addEventListener("mouseleave", (e) => {
      changeState("initial");
    });

    // * Footer
    const footerLinks = document.querySelectorAll(".contact-link");

    footerLinks.forEach((element) => {
      element.addEventListener("mouseover", (e) => {
        changeState("links");
      });
      element.addEventListener("mouseleave", (e) => {
        changeState("initial");
      });
    });

    // * GridItems
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((element) => {
      element.addEventListener("mouseover", (e) => {
        changeState("video");
      });
      element.addEventListener("mouseleave", (e) => {
        changeState("initial");
      });
    });
  });

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
