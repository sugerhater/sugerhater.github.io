import React from "react";
import "./style.css";

const Skills = () => {
  return (
    <section class="container skills">
    <div class="skillsCard">
      <h2><i class="fas fa-code"></i></h2>
      <h3>Technical Skills</h3>
      <ul data-columns="3">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>ES6</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>Express</li>
        <li>Git</li>
      </ul>

      {/* <p>
        HTML5, CSS3, ES6, JavaScript, jQuery, Bootstrap, Bulma, Node.js, AJAX, , NoSQL, Express,
        HandlebarsJS, Git, Github, npm, Postman
      </p> */}
      <p id="skillsIcon">
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-js-square"></i>
        <i class="fab fa-npm"></i>
        <i class="fab fa-node"></i>
        <i class="fab fa-git"></i>
      </p>
    </div>
  </section>
  )
}

export default Skills;