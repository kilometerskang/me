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
          <ProjectIcon
              link="/acm"
              image="https://teachla.uclaacm.com/img/teachLA_wordmark_light.svg"
              title="Developer"
              subtitle="Sep. 2020 - Present"
              category=""
          />
          <ProjectIcon
              link="/angular"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
              title="Angular Project"
              subtitle="Dec. 2020"
              category=""
          />
          <ProjectIcon
              link="/player"
              image={require("../screenshots/player-icon.png")}
              title="WebGL Project"
              subtitle="Feb. 2020 - Mar. 2020"
              category=""
          />
        </div>
      </div>
    </div>
  )
}
 
export default Experience;