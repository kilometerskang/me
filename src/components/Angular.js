import React from "react";
import { Link } from "react-router-dom";
 
function Angular() {
  return (
    <div className="container"> 
      <div className="content">
        <p className="p-txt">
          I developed this simple color-sorting game to give myself exposure to the fundamentals of Angular.
          I came to appreciate the <b>Angular CLI</b> and overall simplicity of component-building
          with <b>Typescript</b> and integrating UI frameworks like <b>Bootstrap</b>, which I used for this project.
        </p>
        <p className="p-txt">
          AngulArtist: <a
            className="link"
            href="https://kilometerskang.github.io/angulartist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              https://kilometerskang.github.io/angulartist
            </b>
          </a>
        </p>
        <p className="p-txt">
          AngulArtist Repo: <a
            className="link"
            href="https://github.com/kilometerskang/angulartist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              https://github.com/kilometerskang/angulartist
            </b>
          </a>
        </p>
        <span className="p-txt-small">
          <Link className="back-btn" to="/exp">
            Back to Experience
          </Link>
        </span>
      </div> 
    </div>
  )
}
 
export default Angular;