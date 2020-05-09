import React from "react";
import ProjectIcon from './ProjectIcon.js';
 
function Projects(props) {
  return (
    <div className="container">
      <div className="content">
        <div className="all-projects">
          <ProjectIcon
              link="/disappointing_page"
              image="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Coltrane_Giant_Steps.jpg/220px-Coltrane_Giant_Steps.jpg"
              title="Some Project"
              category=""
          />
        </div>
      </div>
    </div>
  )
}
 
export default Projects;