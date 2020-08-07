import React from "react";
import Pdf from '../documents/resume.pdf'
 
function Resume(props) {
  return (
    <div className="container"> 
      <div className="content">
        <p className="bubble-txt">
          Find my resume <a className="link" href={Pdf} target="_blank" rel="noopener noreferrer"><b>here</b></a>.
        </p>
      </div>
    </div>
  )
}
 
export default Resume;