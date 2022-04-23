import React from "react";
import "./about.css";
import { BsAward } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years Indie Development</small>
            </article>
          </div>
          <p>
            I am an indie game developer with experience in Unity and C#, I
            recently got a certificate from the UTSA Web Development Bootcamp to
            further enhance my skills and learn new technologies in a rapidly
            growing field. Before that I worked in the restaurant industry and
            gained the skills of time management, delegating tasks to fellow
            chefs, and communication between both ends of the restaurant. I
            chose to get into programming because I love building things and
            seeing them in action. I love the way the industry continues to grow
            and allow opportunities to learn something new everyday and want to
            continue that growth as a web developer at a company that will allow
            me to do so.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
