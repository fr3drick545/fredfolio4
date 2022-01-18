import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    visible: (delayAnim) => ({
      opacity: 1,
      transition: { duration: 1, delay: delayAnim },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <motion.div id="home">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        custom={0}
        viewport={{ once: true }}
        className="home-block-1"
      >
        <h3>Hello, I am</h3>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          custom={1}
        >
          Prakhhar <br />
          Makhija
        </motion.h1>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          custom={2}
        >
          Also known as <span>Fredrick</span>
        </motion.h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        custom={3}
        viewport={{ once: true }}
        className="home-block-2"
      >
        <h2>
          A Game & <br /> Front-End <br />
          Developer
        </h2>
      </motion.div>
    </motion.div>
  );
};

export default Home;
