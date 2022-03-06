import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector("#custom-cursor");

    window.addEventListener("touchstart", (e) => {
      cursor.style.display = "none";
    });

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // * Home
    const home1 = document.querySelector(".home-block-1");
    const home2 = document.querySelector(".home-block-2");
    home1.addEventListener("mouseover", (e) => {
      cursor.style.transform =
        "scale(7) translate(calc(-50% / 7), calc(-50% / 7))";
    });
    home1.addEventListener("mouseleave", (e) => {
      cursor.style.transform = "scale(1) translate(-50%, -50%)";
    });

    home2.addEventListener("mouseover", (e) => {
      cursor.style.transform =
        "scale(5) translate(calc(-50% / 5), calc(-50% / 5))";
    });
    home2.addEventListener("mouseleave", (e) => {
      cursor.style.transform = "scale(1) translate(-50%, -50%)";
    });

    // * About
    const aboutTitle = document.querySelector(".about-heading");
    aboutTitle.addEventListener("mouseover", (e) => {
      cursor.style.transform =
        "scale(2.5) translate(calc(-50% / 2.5), calc(-50% / 2.5))";
    });
    aboutTitle.addEventListener("mouseleave", (e) => {
      cursor.style.transform = "scale(1) translate(-50%, -50%)";
    });

    // * Projects
    const projectTitle = document.querySelector(".project-heading");
    projectTitle.addEventListener("mouseover", (e) => {
      cursor.style.transform =
        "scale(2.5) translate(calc(-50% / 2.5), calc(-50% / 2.5))";
    });
    projectTitle.addEventListener("mouseleave", (e) => {
      cursor.style.transform = "scale(1) translate(-50%, -50%)";
    });

    // * Footer
    const footerLinks = document.querySelectorAll(".contact-link");

    footerLinks.forEach((element) => {
      element.addEventListener("mouseover", (e) => {
        cursor.style.transform =
          "scale(2) translate(calc(-50% / 2), calc(-50% / 2))";
      });
      element.addEventListener("mouseleave", (e) => {
        cursor.style.transform = "scale(1) translate(-50%, -50%)";
      });
    });
  }, []);

  return <div id="custom-cursor" className="cursor"></div>;
};

export default Cursor;
