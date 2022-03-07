import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { titleVariants } from "./CommonVariants";

const Projects = () => {
  const [vidSrc, setVidSrc] = useState("");
  const [vidTitle, setVidTitle] = useState("");
  const [posSrc, setPosSrc] = useState("");
  let viewingProject = false;
  const controls = useAnimation();
  const [updates, setUpdates] = useState(false);

  const videoVariants = {
    initial: { top: "100vh", transition: { duration: 0.8 } },
    visible: { top: "0", transition: { duration: 0.8 } },
  };

  useEffect(() => {
    if (!updates) {
      controls.start("initial");
      // console.log("reached here");
    } else {
      controls.start("visible");
      console.log("reached");
    }
  }, [controls, updates]);

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
        <div className="full-view-inner">
          <div
            className="close-wrapper"
            onClick={() => {
              controls.start("initial");
              setTimeout(() => setUpdates(false), 800);
              viewingProject = false;
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
        </div>
      </motion.div>
    );
  };

  const GridItem = ({ videoSource, videoTitle, posterSource }) => {
    return (
      <motion.div
        className="grid-item"
        onClick={() => {
          setVidSrc(`${videoSource}`, setUpdates(true));
          setVidTitle(`${videoTitle}`, setUpdates(true));
          setPosSrc(`${posterSource}`, setUpdates(true));
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
      </motion.div>
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
          videoSource="CirclesDemo_Final.mp4"
          videoTitle="Hyper Dot"
          posterSource="CirclesDemo_Final.png"
        />
        <GridItem
          videoSource="GrappleHookDemo_Final.mp4"
          videoTitle="Grapple Hook"
          posterSource="GrappleHookDemo_Final.png"
        />
        <GridItem
          videoSource="DonkeyKongDemo_Final.mp4"
          videoTitle="Donkey Kong"
          posterSource="DonkeyKongDemo_Final.png"
        />
        <GridItem
          videoSource="StarWarsDemo_Final.mp4"
          videoTitle="Star Wars: Asteroid Rush"
          posterSource="StarWarsDemo_Final.png"
        />
        <GridItem
          videoSource="SurfaceShaderDemo_Final.mp4"
          videoTitle="Surface Shader"
          posterSource="SurfaceShaderDemo_Final.png"
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
