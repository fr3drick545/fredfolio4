import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector("#custom-cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    const home1 = document.querySelector(".home-block-1");
    const home2 = document.querySelector(".home-block-2");
    home1.addEventListener("mouseover", (e) => {
      cursor.style.transform = "scale(7)";
      // cursor.style.transition = "0.1s all ease";
    });
    home1.addEventListener("mouseleave", (e) => {
      cursor.style.transform = "scale(1)";
      // cursor.style.transition = "none";
    });

    home2.addEventListener("mouseover", (e) => {
      cursor.style.transform = "scale(5)";
      // cursor.style.transition = "0.1s all ease";
    });
    home2.addEventListener("mouseleave", (e) => {
      cursor.style.transform = "scale(1)";
      // cursor.style.transition = "none";
    });

    const aboutTitle = document.querySelector(".about-heading");
    aboutTitle.addEventListener("mouseover", (e) => {
      cursor.style.transform = "scale(2.5)";
      // cursor.style.transition = "0.1s all ease";
    });
    aboutTitle.addEventListener("mouseleave", (e) => {
      cursor.style.transform = "scale(1)";
      // cursor.style.transition = "none";
    });
  }, []);

  return <div id="custom-cursor" className="cursor"></div>;
};

export default Cursor;
