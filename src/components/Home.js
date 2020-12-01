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
            Javascript (ES6, Node.js, React.js, Express.js, Jest/Enzyme), MongoDB, mySQL, Python, C++, C, PHP, 
            HTML/CSS/SCSS, Git, Docker, Agile, Jira.
          </b>
        </p>
        <p className="p-txt">
            My experience in <b className="txt-accent">software development</b> comes primarily from previous/current
            employment, coursework, and school organizations. My work so far has been concentrated in web
            development, though it is by no means limited to it. This website is intended to explain my activities
            all in one place, and hopefully I will keep it up to date.
        </p>
        <p className="p-txt">
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
        <p className="p-txt txt-accent">
            <b>Last updated: 11.10.2020.</b>
        </p>
      </div>
    </div>
  )
}
 
export default Projects;