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
          </a> with 4+ years of professional experience in iGaming Slots development. Currently building next-generation game frameworks using Godot and TypeScript.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView="visible"
          variants={Xmove}
          viewport={{ once: true }}
          custom={0.5}
        >
          My career trajectory spans from Junior Gameplay Developer (2022) to Framework Developer (Aug 2023), where I was promoted to Senior (Mar 2026). I've contributed to production iGaming titles using proprietary frameworks and cutting-edge game technologies. My core tech stack includes React, Redux, TypeScript, and modern JavaScript patterns—combined with deep expertise in game-specific technologies like Pixi.js and WebGL.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView="visible"
          variants={Xmove}
          viewport={{ once: true }}
          custom={1}
        >
          I've led initiatives across framework architecture, shader creation, performance optimization, and mentoring junior developers. My skillset spans the full spectrum: advanced graphics programming (WebGL2, custom shaders), front-end architecture (React, Redux state management), and low-level game mechanics. GitHub and collaborative tooling are fundamental to my workflow for building scalable systems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView="visible"
          variants={Xmove}
          viewport={{ once: true }}
          custom={1.5}
        >
          Beyond iGaming, I'm passionate about exploring the full game development landscape—from Unreal Engine and C++ for high-performance systems, to Unity and Godot for rapid prototyping. I believe great software comes from combining technical excellence with creative problem-solving and strong communication.
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
