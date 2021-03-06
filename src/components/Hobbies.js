import React from "react";
import '../styles/Hobbies.scss';
 
function Hobbies() {
  return (
    <div className="container">     
      <div className="content">
        <p className="p-txt">
          My biggest hobby and side gig is music <span role="img" aria-label="guitar-emoji">🎸</span>.
          Jamming with friends, exploring jazz theory, and composing pieces are pretty much my
          entire life outside of school. I do my own mixing and mastering and release my music
          on Spotify, Apple Music, SoundCloud, etc. (link below). I currently have about 11,000
          monthly listeners.
        </p>
        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:4F5oMQRJEqpLZaW5cc7BEC&size=detail&theme=dark"
          title="spotify-follow"
          width="300"
          height="56"
          scrolling="no"
          frameborder="0"
          style={{border: "none", overflow: "hidden", padding: "5px"}}
          allowtransparency="true">
        </iframe>
        <iframe src="https://open.spotify.com/embed/track/1vL2mduX2fyNtywTlNzgb8"
          title="spotify-player"
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media">
        </iframe>
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
          I really enjoy visual art too. My album arts (above) were drawn by my finger on
          a free mobile drawing app. Below are some of my paintings.
        </p>
        <ul className="extra-gallery">
        <li className="extra-art">
            <img
              src={require("../artwork/drawings/field.jpg")}
              alt=""
              width={170}
              height={170}
              mode='fit'
            />
          </li>
          <li className="extra-art">
            <img
              src={require("../artwork/drawings/europe.jpg")}
              alt=""
              width={170}
              height={170}
              mode='fit'
            />
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
          <li className="extra-art">
            <img
              src={require("../artwork/drawings/parking.JPG")}
              alt=""
              width={170}
              height={170}
              mode='fit'
            />
          </li>
        </ul>
      </div> 
    </div>
  )
}
 
export default Hobbies;