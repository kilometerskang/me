import React from "react";
import { Link } from "react-router-dom";
 
function TeachLa() {
  return (
    <div className="container"> 
      <div className="content">
        <p className="p-txt">
        <a
            className="link"
            href="https://teachla.uclaacm.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              Teach LA
            </b>
          </a> is a branch of UCLA ACM that is committed to making computer science a more accessible field
          at local Title I schools in Los Angeles. As a member of the Dev Team, I help develop online lessons that
          other committees, namely ACM AI Outreach, can use to aid in their instruction.
        </p>
        <p className="p-txt">
          I have focused mainly on creating interactive websites that teach concepts in <b>Machine Learning</b>.
          This includes a lesson on <b>Mean Squared Error (MSE)</b>, which was coded in HTML/CSS/Javascript with the
          help of Bulma, math.js, anime.js, FunctionPlot (d3.js), mathJAX, and unDraw. These tools were necessary in
          building a user-friendly layout and implementing graphing and animating functionalities.
        </p>
        <img
          src={require("../screenshots/mse.png")}
          className="screenshot"
          alt=""
          mode='fit'
        />
        <p className="p-txt">
          I have also contributed to Teach LA's online code editor, and I am currently in the planning stages of a lesson
          on Linear and Logistic Regression, built using <b>React.js</b> and <b>Material UI</b>.
        </p>
        <p className="p-txt emphasis">
          <b>
            MSE Lesson: <a
              className="link"
              href="https://uclaacm.github.io/getting-mean-about-error"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://uclaacm.github.io/getting-mean-about-error
            </a>
          </b>
          <br />
          <b>
            MSE Repo: <a
              className="link"
              href="https://github.com/uclaacm/getting-mean-about-error"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/uclaacm/getting-mean-about-error
            </a>
          </b>
          <br />
          <b>
            Teach LA Editor: <a
              className="link"
              href="https://editor.uclaacm.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://editor.uclaacm.com
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
 
export default TeachLa;