import React from "react";
import "./style.css";
import Project from "../Project";
const Portfolio = () => {
  return (
    <section id="portfolio" class="container p-3">
      <div id="portfolioHeader">

        <h1>Recent Projects</h1>
        <h4 class="subtitle">Visit my
      <span id="gitHub"><a href="https://github.com/sugerhater" target="_blank"> GitHub </a></span>
      to see more works.
    </h4>
      </div>
      <div class=" row justify-content-center">
        <Project title="Eat-Da-Burger!"
          imageLink={`${process.env.PUBLIC_URL}/assets/images/eatburger.PNG`}
          intro="A restaurant app that allows users input the names of burgers they'd like to eat.
                This is the homework I finished, which is about ORM, handlebars, and Mysql."
          fetures="Features: JavaScript, MySQL, Node, Express, Handlebars, personal ORM"
          deployedLink="https://radiant-dusk-60213.herokuapp.com/"
          repoLink="https://github.com/sugerhater/eat-da-burger"
        />
        <Project title="inRHYTHM"
          imageLink={`${process.env.PUBLIC_URL}/assets/images/project2.png`}
          intro="About inRHYTHM is a biorhythm calculating and reporting program that
                      graphically displays the current status of the users biorhythm and
                      the next month of data points to allow for future planning based on
                      the predicted data."
          fetures="Features: JavaScript, Node, Express, Handlebars, MySQL,
                      Sequelize, Passport"
          deployedLink="https://guarded-cliffs-86649.herokuapp.com/"
          repoLink="https://github.com/sugerhater/inrhythm"
        />
      </div>
    </section>
  )
}

export default Portfolio;