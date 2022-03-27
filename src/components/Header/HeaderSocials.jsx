import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FiDribbble } from "react-icons/fi";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/mikebashford/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mikebashford" target="_blank">
        <ImGithub />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
}

export default HeaderSocials;
