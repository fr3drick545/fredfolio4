import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const variants = {
    visibleAbout: (delayAnim) => ({
      opacity: 1,
      transition: { duration: 1, delay: delayAnim },
    }),
    hiddenAbout: { opacity: 0 },
  };

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
        initial="hiddenAbout"
        whileInView="visibleAbout"
        variants={variants}
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
          custom={1.5}
        >
          I am a 21 year old Game Development Student from Algonquin College,
          Ottawa. Highly passionate about coding, I like to create games and
          websites.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView="visible"
          variants={Xmove}
          viewport={{ once: true }}
          custom={2}
        >
          There always a behind the scenes curiosity while playing a game as to
          how do the developers make this stuff, which is what got me into the
          world of Game Development.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView="visible"
          variants={Xmove}
          viewport={{ once: true }}
          custom={2.5}
        >
          In the beginning I limited myself to mostly C++ / C# which was the
          bounds of my course at Algonquin College. Summer of 2021, I became
          interested in furthering my knowledge and looked into Web Development.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView="visible"
          variants={Xmove}
          viewport={{ once: true }}
          custom={3}
        >
          I learned the structure of HTML / CSS in a week, then Javascript for
          the remaining month. After finding out that a lot of the OOP concepts
          I learned in C++ can be applied to HTML using React, I started my
          first Udemy course on it which opened a lot of logical processes for
          me.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
