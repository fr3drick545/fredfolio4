import React from "react";
import { motion, useAnimation } from "framer-motion";
import { titleVariants } from "./CommonVariants";

const Projects = () => {
  let vidSrc = "";
  let vidTitle = "";
  let posSrc = "";
  let vidDesc = "";

  const OnActivate = (videoSource, videoTitle, posterSource, videoDesc) => {
    const fullView = document.getElementsByClassName("project-full-view");

    vidSrc = videoSource;
    vidTitle = videoTitle;
    posSrc = posterSource;
    vidDesc = videoDesc;

    console.log(vidSrc);
    controls.start("visible");
  };

  const GridItem = ({ videoSource, videoTitle, posterSource }) => {
    return (
      <div
        className="grid-item"
        onClick={() => OnActivate(videoSource, videoTitle, posterSource)}
      >
        <div className="video-div">
          <video
            src={`/videos/${videoSource}`}
            poster={`/videos/${posterSource}`}
          >
            {videoTitle}
          </video>
        </div>
        <h3>{videoTitle}</h3>
      </div>
    );
  };

  const controls = useAnimation();

  const videoVariants = {
    initial: { top: "100vh", transition: { duration: 0.8 } },
    visible: { top: "0", transition: { duration: 1 } },
  };

  return (
    <div id="projects">
      <motion.h1
        initial="hiddenTitle"
        whileInView="visibleTitle"
        variants={titleVariants}
        custom={0}
        viewport={{ once: true }}
        className="project-heading"
      >
        Projects
      </motion.h1>

      <div className="projects-grid">
        <GridItem
          videoSource="BombermanAIDemo_Final.mp4"
          videoTitle="Bomberman AI"
          posterSource="BombermanAIDemo_Final.png"
        />
        <GridItem
          videoSource="BombermanAIDemo_Final.mp4"
          videoTitle="Bomberman AI"
          posterSource="BombermanAIDemo_Final.png"
        />
        <GridItem
          videoSource="BombermanAIDemo_Final.mp4"
          videoTitle="Bomberman AI"
          posterSource="BombermanAIDemo_Final.png"
        />
        <GridItem
          videoSource="BombermanAIDemo_Final.mp4"
          videoTitle="Bomberman AI"
          posterSource="BombermanAIDemo_Final.png"
        />
        <GridItem
          videoSource="BombermanAIDemo_Final.mp4"
          videoTitle="Bomberman AI"
          posterSource="BombermanAIDemo_Final.png"
        />
        <GridItem
          videoSource="BombermanAIDemo_Final.mp4"
          videoTitle="Bomberman AI"
          posterSource="BombermanAIDemo_Final.png"
        />
      </div>

      <motion.div
        initial="initial"
        animate={controls}
        variants={videoVariants}
        onClick={() => controls.start("initial")}
        className="project-full-view"
      >
        <div className="exit-button">
          <span className="one"></span>
          <span className="two"></span>
        </div>
        <div className="project-content">
          <div className="video-full-view">
            <video src={`/videos/${vidSrc}`} poster={`/videos/${posSrc}`}>
              {vidTitle}
            </video>
          </div>

          <div className="project-text">
            <div className="full-view-title">{vidTitle}</div>
            <div className="full-view-description">{vidDesc}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
