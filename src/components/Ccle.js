import React from "react";
import { Link } from "react-router-dom";
 
function Ccle(props) {
  return (
    <div className="container"> 
      <div className="content">
        <p className="p-txt">
          As an intern for UCLA's <a
            className="link"
            href="https://ccle.ucla.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              CCLE website
            </b>
          </a>,
          I learned a great deal about a couple different web stacks, as well as the <b>Agile</b> process.
          The bulk of my internship was spent on building an LTI web application to integrate into
          CCLE. This was done using the <b>MERN stack (MongoDB, Express.js, React.js, and Node.js)</b>.
        </p>
        <p className="p-txt">
          The application that I worked on is an LTI tool that retrieves the library reserves of a course
          from the UCLA registrar API and displays it for the user. The frontend interface of the application
          depends on the role of the user (student or admin), as well as the course information. For example,
          the 'Analytics' tab would only appear for an admin user, who might use it to track student engagement
          in the course. I implemented these functionalities using <b>RESTful APIs (Express, Axios)</b> and <b>
            React hooks
          </b> (whose logic I tested using <b>Jest/Enzyme</b>).
        </p>
        <p className="p-txt">
          Library Resources Repo: <a
            className="link"
            href="https://github.com/ucla/lti-library-resources"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              https://github.com/ucla/lti-library-resources
            </b>
          </a>
        </p>
        <p className="p-txt">
          The development process involved coding, reviewing, and testing. We were able to maintain a clean
          and organized codebase with <b>ESLint</b> and <b>Github Actions</b>, as well as thorough code reviews.
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