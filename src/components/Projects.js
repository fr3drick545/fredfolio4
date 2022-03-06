import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { titleVariants } from "./CommonVariants";

const Projects = () => {
  const [vidSrc, setVidSrc] = useState("");
  const [vidTitle, setVidTitle] = useState("");
  const [posSrc, setPosSrc] = useState("");
  const [viewingProject, setViewingProject] = useState(false);
  const controls = useAnimation();

  const videoVariants = {
    initial: { top: "100vh", transition: { duration: 0.8 } },
    visible: { top: "0", transition: { duration: 1 } },
  };

  useEffect(() => controls.start("initial"));

  const FullProjectView = ({
    videoSource = "null",
    videoTitle = "null",
    posterSource = "null",
  }) => {
    return (
      <motion.div
        initial="initial"
        animate={controls}
        variants={videoVariants}
        className="project-full-view"
      >
        <div
          className="close-wrapper"
          onClick={() => {
            controls.start("initial");
            setViewingProject(true);
          }}
        >
          <div className="close-container">
            <div className="leftright"></div>
            <div className="rightleft"></div>
          </div>
        </div>

        <div className="project-content">
          <div className="full-view-title ">{videoTitle}</div>
          <div className="video-full-view">
            <video
              src={`/videos/${videoSource}`}
              poster={`/videos/${posterSource}`}
              controls
              autoPlay
              loop
            ></video>
          </div>

          <div className="full-view-description"></div>
        </div>
      </motion.div>
    );
  };

  const GridItem = ({ videoSource, videoTitle, posterSource }) => {
    return (
      <div
        className="grid-item"
        onClick={async () => {
          setVidSrc(`${videoSource}`);
          setVidTitle(`${videoTitle}`);
          setPosSrc(`${posterSource}`);

          await controls.start("visible");
          //console.log(didStart);
          // if (viewingProject === false)
          //setViewingProject(!viewingProject);
        }}
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
          videoSource="GrappleHookDemo_Final.mp4"
          videoTitle="Grapple Hook"
          posterSource="GrappleHookDemo_Final.png"
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

      <FullProjectView
        videoSource={vidSrc}
        videoTitle={vidTitle}
        posterSource={posSrc}
      />
    </div>
  );
};
export default Projects;
