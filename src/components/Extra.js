import React from "react";
import '../styles/Extra.scss';
 
function Extra() {
  return (
    <div className="container">     
      <div className="content">
        <p className="p-txt">
          My biggest hobby and side gig is music <span role="img" aria-label="guitar">🎸</span>.
          Jamming with friends, exploring jazz theory, and composing pieces are pretty much my
          entire life outside of school.
        </p>
        <ul className="extra-gallery">
          <li className="extra-art">
            <img
              src={require("../artwork/ice-cream-lover.jpg")}
              alt=""
              className="album-art"
              mode='fit'
            />
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/acacia.png")}
              alt=""
              className="album-art"
              mode='fit'
            />
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/danny-boy.png")}
              alt=""
              className="album-art"
              mode='fit'
            />
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/wav.jpeg")}
              alt=""
              className="album-art"
              mode='fit'
            />
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/hobo.jpg")}
              alt=""
              className="album-art"
              mode='fit'
            />
          </li>
        </ul>
        <div className="small-container">
          <a className="speech-bubble bubble-txt" href="http://smarturl.it/mileskang">
            <i>Stream my music here!</i>
          </a>
        </div>
        <p className="p-txt">
          I really enjoy the visual arts too. My album arts (above) were drawn by my finger on
          a free mobile drawing app (it was very hard). I have also painted for as long as I can
          remember, but I am no professional <span role="img" aria-label="funny-face">😬</span>.
        </p>
        <ul className="extra-gallery">
          <li className="extra-art">
            <img
              src={require("../artwork/drawings/bridge.jpg")}
              alt=""
              width={138}
              height={190}
              mode='fit'
            />
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/drawings/europe.jpg")}
              alt="" width={170} height={170} mode='fit'/>
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/drawings/swan.jpg")}
              alt=""
              width={185}
              height={145}
              mode='fit'
            />
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/drawings/plastic.jpg")}
              alt=""
              width={138}
              height={190}
              mode='fit'
            />
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/drawings/snowy.jpg")}
              alt=""
              width={185}
              height={145}
              mode='fit'
            />
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/drawings/ship.jpg")}
              alt=""
              width={138}
              height={190}
              mode='fit'
            />
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/drawings/river.jpg")}
              alt=""
              width={185}
              height={145}
              mode='fit'
            />
          </li>
        </ul>
      </div> 
    </div>
  )
}
 
export default Extra;