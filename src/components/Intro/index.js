import React from 'react';
import "./style.css";

const Intro = () => {
  return (
    <section id="intro" class="container">
      <div class="row">
      <div class="col-sm-6 col-m-12 m-auto text-center">
          {/* <img src="Images/linkedin.jpg" alt="picture of me" class="img-fluid" /> */}
          <img src={`${process.env.PUBLIC_URL}/assets/images/linkedin.jpg`} alt="picture of me" class="img-fluid" />
        </div>

        <div class="col-sm-6 col-m-12" id="introLines">
          <h4 class="subtitle">Hello World, I'm</h4>
          <h1>
            <span id="kl">
              Kehong
          </span> Li
        </h1>
          {/* <h4 class="subtitle">Junior Full Stack Web Developer</h4> */}
          <h4 class="subtitle">Junior Web Developer</h4>
        </div>

        {/* <h5 id ="selfIntro">
        Hi, I am Kehong Li. I was born and grew up in a small village in the middle of China. Because of complicated reasons, after graduated from high school in 2011, I determined to come to America to peruse freedom and eventually land on US soil in 2013 as a student. Because I love America and wanted to be a part of our country, in 2016 I enlisted for the US army reserve to become an American. I graduated from OSU in 2017 and was kept waiting for the army to send me to basic training and my citizenship. Finally, after a long and painful waiting period, I was naturalized on Sep 26th, 2019.
          </h5>
          <h5>
        After I became a US citizen, I worked for Team Fishel for 6 months and then decided to enroll in an OSU full stack web developer boot camp to start my software developer career. I think I am a really good student in the boot camp and ready for a web developing job.
        </h5>
        <h6>
        ⚡ Fun fact: The address of my personnal page and email go as: I-Li-Kehong, which is I+{`myLastName`}+{`myFirstName`}, instead of I like hong. People often wonder, who is Hong?
        </h6> */}
      </div>

      <div class="arrow">
        <a href="#about">
          <i class="fas fa-angle-down"></i>
        </a>
      </div>
    </section>
  )
}

export default Intro;