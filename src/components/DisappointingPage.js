import React from "react";
import { Link } from "react-router-dom";
 
function DisappointingPage(props) {
  return (
    <div className="container"> 
      <div className="content">
        <p className="p-txt">
          Not much going on here.
        </p>
        <span className="p-txt-small">
          <Link className="back-btn" to="/projects">
            Back to John Coltrane's Face
          </Link>
        </span>
      </div> 
    </div>
  )
}
 
export default DisappointingPage;