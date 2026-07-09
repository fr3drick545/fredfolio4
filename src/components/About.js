import React from "react";
import { motion } from "framer-motion";
import { titleVariants } from "./CommonVariants";

const About = () => {
  const Xmove = {
    visible: (delayAnim) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: delayAnim },
    }),
  };

  return (
    <motion.div id="about">
      <motion.h1
        initial="hiddenTitle"
        whileInView="visibleTitle"
        variants={titleVariants}
        custom={0}
        viewport={{ once: true }}
        className="about-heading"
      >
        About Me
      </motion.h1>

      <motion.div className="about-content">
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView="visible"
          variants={Xmove}
          viewport={{ once: true }}
          custom={0}
        >
          Senior Front-End Software Engineer at <a
            href="https://www.lnw.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: "300", color: "rgb(0,200,255)" }}
          >
            Light & Wonder
          </a> with 4+ years of professional experience in iGaming Slots development. Currently leading a team of 3 engineers building next-generation game frameworks using Godot and TypeScript.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView="visible"
          variants={Xmove}
          viewport={{ once: true }}
          custom={0.5}
        >
          My career trajectory spans from Junior Gameplay Developer (2022) to Framework Developer (Aug 2023), where I was promoted to Senior after a year and a half. I've contributed to production iGaming titles using proprietary frameworks and cutting-edge game technologies, working across gameplay mechanics, framework architecture, and front-end optimization.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView="visible"
          variants={Xmove}
          viewport={{ once: true }}
          custom={1}
        >
          My technical expertise includes TypeScript, HTML5, Pixi.js, WebGL, and game framework design patterns. I've led initiatives in code architecture, performance optimization, and team mentorship. Currently spearheading a Godot-based framework concept that will shape the future of LnW's iGaming platform.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView="visible"
          variants={Xmove}
          viewport={{ once: true }}
          custom={1.5}
        >
          Beyond my professional work, I maintain passion for game development, exploring game engines like Unreal and Unity, building custom graphics pipelines, and creating web-based interactive experiences. I believe in combining technical excellence with creative problem-solving to deliver impactful digital products.
        </motion.p>
      </motion.div>

      {/* <div className="wip">
        <h2>
          More coming soon :) <br /> Work In Progress
        </h2>
      </div> */}
    </motion.div>
  );
};

export default About;
