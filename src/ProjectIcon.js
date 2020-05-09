import React from 'react';
import {Link} from 'react-router-dom';
import './styles/ProjectIcon.css';
 
function ProjectIcon(props) {
  return (
    <div className="all-projects">
      <span className="project">
        <Link className="project-link" to={props.link}>
          <div className="project-image">
            <img src={props.image} width={100} height={100} mode='fit' alt="Project"/>
          </div>
          <div className="project-title">{props.title}</div>
          <div className="project-category">{props.category}</div>
        </Link>
      </span>
    </div>
  );
}
 
export default ProjectIcon;