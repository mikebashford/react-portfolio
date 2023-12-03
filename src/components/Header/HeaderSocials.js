import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FiDribbble } from "react-icons/fi";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/mikebashford/" target="">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mikebashford" target="">
        <ImGithub />
      </a>
      <a href="https://dribbble.com" target="">
        <FiDribbble />
      </a>
    </div>
  );
}

export default HeaderSocials;
