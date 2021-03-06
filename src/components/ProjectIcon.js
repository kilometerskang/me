import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ProjectIcon.scss';
 
function ProjectIcon(props) {
  return (
    <div className="all-projects">
      <span className="project">
        <Link className="project-link" to={props.link}>
          <div className="project-image">
            <img src={props.image} width={100} height={100} mode='fit' alt="icon"/>
          </div>
          <div className="project-title">{props.title}</div>
          <div className="project-subtitle">{props.subtitle}</div>
        </Link>
      </span>
    </div>
  );
}
 
export default ProjectIcon;