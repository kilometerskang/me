import React from "react";
import ResumePdf from '../documents/resume.pdf';
 
function Resume(props) {
  return (
    <div className="container"> 
      <div className="content">
        <p className="p-txt">
          Find my resume <a className="link" href={ResumePdf} target="_blank" rel="noopener noreferrer"><b>here</b></a>.
        </p>
      </div>
    </div>
  )
}
 
export default Resume;