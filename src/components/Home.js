import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
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

  return (
    <motion.div id="home">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        custom={0}
        className="home-block-1"
      >
        <h3>Hello, I am</h3>
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={1}
        >
          Prakhhar <br />
          Makhija
        </motion.h1>
        <motion.h3
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={2}
        >
          Also known as <span>Fredrick</span>
        </motion.h3>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        custom={3}
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
