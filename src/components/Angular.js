import React from "react";
import { Link } from "react-router-dom";
 
function Angular() {
  return (
    <div className="container"> 
      <div className="content">
        <p className="p-txt">
          I developed this simple color-sorting game to give myself exposure to the fundamentals of Angular.
          I came to appreciate the <b>Angular CLI</b> and the overall simplicity of component-building
          with <b>Typescript</b> and integrating UI frameworks like <b>Bootstrap</b>, which I used for this project.
        </p>
        <img
          src={require("../screenshots/angulartist.png")}
          className="screenshot"
          alt=""
          mode='fit'
        />
        <p className="p-txt emphasis">
          <b>
            AngulArtist: <a
              className="link"
              href="https://kilometerskang.github.io/angulartist"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://kilometerskang.github.io/angulartist
            </a>
          </b>
          <br />
          <b>
            AngulArtist Repo: <a
              className="link"
              href="https://github.com/kilometerskang/angulartist"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/kilometerskang/angulartist
            </a>
          </b>
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