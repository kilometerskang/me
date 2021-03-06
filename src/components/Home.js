import React from "react";
 
function Projects(props) {
  return (
    <div className="container">
      <div className="content">
        <p className="p-txt">
          Hello! <span role="img" aria-label="music-emoji">🎵</span>
        </p>
        <p className="p-txt">
            I am an undergraduate student at UCLA, pursuing a B.S.
            in <b className="txt-accent">Computer Science</b>.
        </p>
        <p className="p-txt">
          <b className="txt-accent">Briefly</b>, the skills I have spent ample time on are:
        </p>
        <p className="p-txt">
          <b>
            Python, C++, C, Javascript (ES6, Node.js, React.js, Express.js, Jest/Enzyme), Typescript, Angular,
            MongoDB, mySQL, PHP, HTML/CSS/SCSS, Git, Docker, Agile, Jira.
          </b>
        </p>
        <p className="p-txt">
            My experience in <b className="txt-accent">software development</b> comes primarily from previous/current
            employment, coursework, free time, and school organizations. So far, I have focused quite a bit on web
            development, though I am by no means limited to it. This website is intended to explain my activities
            all in one place, and hopefully I will keep it up to date.
        </p>
        <p className="p-txt emphasis">
          <b>
            Github: <a
              className="link"
              href="https://github.com/kilometerskang"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/kilometerskang
            </a>
          </b>
          <br />
          <b>
            LinkedIn: <a
              className="link"
              href="https://www.linkedin.com/in/kilometerskang"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/kilometerskang
            </a>
          </b>
        </p>
      </div>
    </div>
  )
}
 
export default Projects;