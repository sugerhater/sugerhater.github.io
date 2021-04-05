import React from "react";
import "./style.css";

const Project = ({title,imageLink,intro,fetures,deployedLink,repoLink}) => {
  return (
    // <div class="project">
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
      <div class="card text-center h-100">
        <img src={imageLink} class="card-img-top border-bottom"
          />
        <div class="card-body mb-5 pl-0">
          <h3>{title}</h3>
          <p class="card-text">
            {intro}
            </p>
          <p class="card-text">
            <small>
              {fetures}
                </small>
          </p>
          <div class="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
            <a href={deployedLink} target="_blank" className="btn mr-2">
              <i class="fas fa-laptop-code"></i> Demo</a>
            <a href={repoLink} target="_blank" className="btn">
              <i class="fab fa-github"></i> Github</a>
          </div>
        </div>
      </div>
    </div>
          // </div>
  )
}

export default Project;