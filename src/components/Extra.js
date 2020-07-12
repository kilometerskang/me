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
            <img src="artwork/ice-cream-lover.jpg" width={130} height={130} mode='fit'/>
          </li>
          <li className="extra-art">
            <img src="artwork/acacia.png" width={130} height={130} mode='fit'/>
          </li>
          <li className="extra-art">
            <img src="artwork/danny-boy.png" width={130} height={130} mode='fit'/>
          </li>
          <li className="extra-art">
            <img src="artwork/wav.jpeg" width={130} height={130} mode='fit'/>
          </li>
        </ul>
        <div className="small-container">
          <a className="speech-bubble p-txt" href="http://smarturl.it/mileskang">
            Click to stream my music!
          </a>
        </div>
        <p className="p-txt">
          I really enjoy the visual arts too. My album arts (above) were drawn by my finger on
          a free mobile drawing app (it was very hard). I have also painted for as long as I can
          remember, but I am no professional <span role="img" aria-label="funny-face">😬</span>.
        </p>
        <ul className="extra-gallery">
          <li className="extra-art">
            <img src="artwork/drawings/bridge.jpg" width={138} height={190} mode='fit'/>
          </li>
          <li className="extra-art">
            <img src="artwork/drawings/europe.jpg" width={170} height={170} mode='fit'/>
          </li>
          <li className="extra-art">
            <img src="artwork/drawings/swan.jpg" width={185} height={145} mode='fit'/>
          </li>
          <li className="extra-art">
            <img src="artwork/drawings/plastic.jpg" width={138} height={190} mode='fit'/>
          </li>
          <li className="extra-art">
            <img src="artwork/drawings/snowy.jpg" width={185} height={145} mode='fit'/>
          </li>
          <li className="extra-art">
            <img src="artwork/drawings/ship.jpg" width={138} height={190} mode='fit'/>
          </li>
          <li className="extra-art">
            <img src="artwork/drawings/river.jpg" width={185} height={145} mode='fit'/>
          </li>
        </ul>
      </div> 
    </div>
  )
}
 
export default Extra;