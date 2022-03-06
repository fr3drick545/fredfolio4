import React from "react";
import { motion } from "framer-motion";
import { titleVariants } from "./CommonVariants";

class Projects extends React.Component {
  OnActivate = (videoSource, videoTitle, posterSource) => {};

  GridItem = ({ videoSource, videoTitle, posterSource }) => {
    return (
      <div
        className="grid-item"
        onClick={this.OnActivate(videoSource, videoTitle, posterSource)}
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

  render() {
    return (
      <div id="projects">
        <motion.h1
          initial="hiddenTitle"
          whileInView="visibleAbout"
          variants={titleVariants}
          custom={0}
          viewport={{ once: true }}
          className="project-heading"
        >
          Projects
        </motion.h1>

        <div className="projects-grid">
          <this.GridItem
            videoSource="BombermanAIDemo_Final.mp4"
            videoTitle="Bomberman AI"
            posterSource="BombermanAIDemo_Final.png"
          />
          <this.GridItem
            videoSource="BombermanAIDemo_Final.mp4"
            videoTitle="Bomberman AI"
            posterSource="BombermanAIDemo_Final.png"
          />
          <this.GridItem
            videoSource="BombermanAIDemo_Final.mp4"
            videoTitle="Bomberman AI"
            posterSource="BombermanAIDemo_Final.png"
          />
          <this.GridItem
            videoSource="BombermanAIDemo_Final.mp4"
            videoTitle="Bomberman AI"
            posterSource="BombermanAIDemo_Final.png"
          />
          <this.GridItem
            videoSource="BombermanAIDemo_Final.mp4"
            videoTitle="Bomberman AI"
            posterSource="BombermanAIDemo_Final.png"
          />
          <this.GridItem
            videoSource="BombermanAIDemo_Final.mp4"
            videoTitle="Bomberman AI"
            posterSource="BombermanAIDemo_Final.png"
          />
        </div>

        <motion.div className="project-full-view"></motion.div>
      </div>
    );
  }
}

export default Projects;
