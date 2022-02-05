import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <ul>
        <li className="contact-link">
          <a
            href="./Prakhhar Makhija - Resume.pdf"
            onClick={(e) => {
              e.preventDefault();
              window.open(`./Prakhhar Makhija - Resume.pdf`, "_blank");
            }}
          >
            <i class="fas fa-file"></i>
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
            <i class="fab fa-linkedin"></i>
          </a>
        </li>

        <li className="contact-link">
          <a href="mailto:prakhharmakhija@gmail.com">
            <i class="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
