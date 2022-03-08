import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Cursor = () => {
  const cursorControls = useAnimation();

  const cursorVariants = {
    initial: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.4, bounce: 0.4 },
    },
    homeBlock1: {
      scale: 7,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.8, bounce: 0.7 },
    },
    homeBlock2: {
      scale: 5,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.8, bounce: 0.7 },
    },
    titles: {
      scale: 2.5,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.8, bounce: 0.7 },
    },
    links: {
      scale: 2,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.8, bounce: 0.7 },
    },
    video: {
      scale: 0.5,
      x: "-50%",
      y: "-50%",
      transition: { type: "spring", duration: 0.8, bounce: 0.7 },
    },
  };

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    window.addEventListener("touchstart", (e) => {
      cursor.style.display = "none";
    });

    document.addEventListener("mousemove", (e) => {
      cursor.style.display = "inherit";
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // * Home
    const home1 = document.querySelector(".home-block-1");
    const home2 = document.querySelector(".home-block-2");
    home1.addEventListener("mouseover", (e) => {
      cursorControls.start("homeBlock1");
    });
    home1.addEventListener("mouseleave", (e) => {
      cursorControls.start("initial");
    });

    home2.addEventListener("mouseover", (e) => {
      cursorControls.start("homeBlock2");
    });
    home2.addEventListener("mouseleave", (e) => {
      cursorControls.start("initial");
    });

    // * About
    const aboutTitle = document.querySelector(".about-heading");
    aboutTitle.addEventListener("mouseover", (e) => {
      cursorControls.start("titles");
    });
    aboutTitle.addEventListener("mouseleave", (e) => {
      cursorControls.start("initial");
    });

    // * Projects
    const projectTitle = document.querySelector(".project-heading");
    projectTitle.addEventListener("mouseover", (e) => {
      cursorControls.start("titles");
    });
    projectTitle.addEventListener("mouseleave", (e) => {
      cursorControls.start("initial");
    });

    // * Footer
    const footerLinks = document.querySelectorAll(".contact-link");

    footerLinks.forEach((element) => {
      element.addEventListener("mouseover", (e) => {
        cursorControls.start("links");
      });
      element.addEventListener("mouseleave", (e) => {
        cursorControls.start("initial");
      });
    });
  }, [cursorControls]);

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
