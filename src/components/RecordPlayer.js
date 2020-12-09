import React from "react";
import { Link } from "react-router-dom";
 
function RecordPlayer() {
  return (
    <div className="container"> 
      <div className="content">
        <p className="p-txt">
          In a team of 3, I developed a <b>Javascript</b> record player simulator / shooting game (the record
          player turns into a tank, after a snazzy animation sequence). We used
          a <b>WebGL</b> library called TinyGraphics and Maya, a modeling software, to implement the graphical
          elements of this project, namely the shapes, animations, player controls, collision detection,
          texture mapping, and gravity model. We were able to collaborate efficiently, with minimal merge
          conflicts, with an organized Git workflow.
        </p>
        <p className="p-txt">
          This project was extremely helpful in getting hands-on object-oriented programming experience
          in Javascript. Challenges beyond the grapics-specific concepts mentioned previously included smooth
          audio integration and somewhat-complex game logic.
        </p>
        <p className="p-txt">
          I also composed/produced all the sound effects and boss/victory music
          myself. <span role="img" aria-label="cool-emoji">😎</span>
        </p>
        <img
          src={require("../screenshots/player-1.png")}
          className="screenshot"
          alt=""
          mode='fit'
        />
        <img
          src={require("../screenshots/player-2.png")}
          className="screenshot"
          alt=""
          mode='fit'
        />
        <p className="p-txt emphasis">
          <b>
            Record Player Simulator Repo: <a
              className="link"
              href="https://github.com/kilometerskang/record-player-simulator"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/kilometerskang/record-player-simulator
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
 
export default RecordPlayer;