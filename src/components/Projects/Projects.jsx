import React from "react";
import "./projects.css";
import IMG1 from "../../assets/DeadSiege_New_Logo.png";
import IMG2 from "../../assets/group-project.herokuapp.com.png";
import IMG3 from "../../assets/OneStopShop.png";
import IMG4 from "../../assets/personal-crypto-tracker.png";
import IMG5 from "../../assets/RunBuddy.png";
import IMG6 from "../../assets/budget-tracker.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Dead Siege",
    github: "https://github.com",
    demo: "https://gamejolt.com/games/dead-siege/114865",
  },
  {
    id: 2,
    image: IMG2,
    title: "Parachute Play",
    github: "https://github.com/jessebubble/parachute-play",
    demo: "https://jam-group-project.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "One Stop Shop",
    github: "https://github.com/brenhamp/one-stop-shop",
    demo: "https://group1-one-stop-shop.herokuapp.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Personal Crypto Tracker",
    github: "https://github.com/mikebashford/personal-crypto-tracker",
    demo: "https://mikebashford.github.io/personal-crypto-tracker/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Run Buddy",
    github: "https://github.com/mikebashford/run-buddy",
    demo: "https://mikebashford.github.io/run-buddy/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Budget Tracker",
    github: "https://github.com/mikebashford/budget-tracker",
    demo: "https://sheltered-plains-94321.herokuapp.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
