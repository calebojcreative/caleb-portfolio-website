import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <ul className="list-group list-group-horizontal list-group-flush ">
        <li className="list-group-item border-0">
          <a href="https://github.com/calebojcreative">
            <FaGithub />
          </a>
        </li>
        <li className="list-group-item border-0">
          <a href="https://www.linkedin.com/in/calebojwilliams">
            <FaLinkedin />
          </a>
        </li>
        <li className="list-group-item border-0">
          <a href="https://twitter.com/calebojwills">
            <FaTwitter />
          </a>
        </li>
        <li className="list-group-item border-0">
          <a href="https://instagram.com/calebojwills">
            <FaInstagram />
          </a>
        </li>
        <li className="list-group-item border-0">
          <a href="mailto:calebojwilliams@gmail.com">
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
