import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: (delayAnim) => ({
      opacity: 1,
      transition: { duration: 1, delay: delayAnim },
    }),
    hidden: { opacity: 0 },
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
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        custom={0}
        className="about-heading"
      >
        About Me
      </motion.h1>

      <motion.div className="about-content">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 200 }}
          animate={controls}
          variants={Xmove}
          custom={1.5}
        >
          I am a 21 year old Game Development Student from Algonquin College,
          Ottawa. Highly passionate about coding, I like to create games and
          websites.
        </motion.p>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: -200 }}
          animate={controls}
          variants={Xmove}
          custom={2}
        >
          There always a behind the scenes curiosity while playing a game as to
          how do the developers make this stuff, which is what got me into the
          world of Game Development.
        </motion.p>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 200 }}
          animate={controls}
          variants={Xmove}
          custom={2.5}
        >
          In the beginning I limited myself to mostly C++ / C# which was the
          bounds of my course at Algonquin College. Summer of 2021, I became
          interested in furthering my knowledge and looked into Web Development.
        </motion.p>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: -200 }}
          animate={controls}
          variants={Xmove}
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
