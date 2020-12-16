import React from "react";
import { Link } from "react-router-dom";
 
function Ccle() {
  return (
    <div className="container"> 
      <div className="content">
        <p className="p-txt">
          As an intern for UCLA Tech,
          I learned a great deal about a couple different tech stacks, as well as the <b>Agile</b> process.
          My internship can be broken into 2 parts: working on the existing CCLE website, and creating a new
          web application to manage library reserves.
        </p>
        <p className="p-txt">
          <a
            className="link"
            href="https://ccle.ucla.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              CCLE
            </b>
          </a> is UCLA's website for communication between instructors and students at UCLA. As a developer, I
          fulfilled feature requests and patched bugs for the website, built primarily using <b>PHP</b> and <b>MySQL</b>.
          It was quite difficult but rewarding to work with such a large codebase.
        </p>
        <p className="p-txt">
          Another big chunk of my internship was spent on building a new LTI web application to integrate into CCLE.
          As this was a new app, I got to be a part of the design and decision-making process in choosing a tech
          stack and UI framework. We eventually decided on using the <b>MERN stack (MongoDB, Express.js, React.js,
          and Node.js)</b>.
        </p>
        <p className="p-txt">
          The application that I worked on is an LTI tool that retrieves the library reserves of a course
          from the UCLA registrar API, stores it into a local MongoDB database, and displays it (as well as other
          features) for the user upon loading the application. I wrote update scripts to sync the registrar's data
          with our own database, and <b>RESTful APIs</b> to easily access the database from the frontend. The
          interface of the application depends on the role of the user (student or admin) and the course
          department. For example, the 'Analytics' tab would only appear for an admin user, who might use it to track
          student engagement in the course. I implemented these functionalities using <b>Express.js</b> and <b>
            React.js
          </b> (whose logic I tested using <b>Jest/Enzyme</b>).
        </p>
        <p className="p-txt emphasis">
          <b>
            Library Resources Repo: <a
              className="link"
              href="https://github.com/ucla/lti-library-resources"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ucla/lti-library-resources
            </a>
          </b>
        </p>
        <p className="p-txt">
          The development process involved coding, reviewing, and testing (using <b>Jira</b>). We were able to maintain a clean
          and well-documented codebase with <b>ESLint</b> and <b>Github Actions</b>, as well as thorough code reviews and frequent
          discussion/collaboration with the team.
        </p>
        <span className="p-txt-small">
          <Link className="back-btn" to="/exp">
            Back to Experience
          </Link>
        </span>
      </div> 
    </div>
  )
}
 
export default Ccle;