import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <h2>Thanks for visiting!</h2>
      <ul>
        <li className="contact-link">
          <a
            href="./Prakhhar Makhija - Resume.pdf"
            onClick={(e) => {
              e.preventDefault();
              window.open(`./Prakhhar Makhija - Resume.pdf`, "_blank");
            }}
          >
            <i className="fas fa-file"></i>
          </a>
        </li>

        <li className="contact-link">
          <a
            href="https://www.linkedin.com/in/prakhhar-makhija/"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                `https://www.linkedin.com/in/prakhhar-makhija/`,
                "_blank"
              );
            }}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>

        <li className="contact-link">
          <a href="mailto:prakhharmakhija@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
