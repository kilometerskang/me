import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
 
function Projects(props) {
  return (
    <div id="mainbody">
      <body>
      <div className="all-projects">
        <Thumbnail
            link="/project1"
            image="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Coltrane_Giant_Steps.jpg/220px-Coltrane_Giant_Steps.jpg"
            title="Project 1"
            category=""
        />
      </div>
      </body>
    </div>
  )
}
 
export default Projects;