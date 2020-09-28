import React from "react";
import ProjectIcon from './ProjectIcon';
 
function Experience(props) {
  return (
    <div className="container">
      <div className="content">
        <div className="all-projects">
          <ProjectIcon
              link="/ccle"
              image="https://pbs.twimg.com/profile_images/1085797622198063106/ed-DCJvt_400x400.jpg"
              title="SWE Intern"
              subtitle="Apr. 2020 - Sep. 2020"
              category=""
          />
        </div>
      </div>
    </div>
  )
}
 
export default Experience;