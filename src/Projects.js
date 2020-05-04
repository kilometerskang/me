import React from "react";
import Thumbnail from './Thumbnail.js';
 
function Projects(props) {
  return (
    <div className="container">
      <div className="content">
        <div className="all-projects">
          <Thumbnail
              link="/project1"
              image="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Coltrane_Giant_Steps.jpg/220px-Coltrane_Giant_Steps.jpg"
              title="Project 1"
              category=""
          />
        </div>
      </div>
    </div>
  )
}
 
export default Projects;