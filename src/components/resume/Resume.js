import React from 'react';
// Components
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Assets
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

function Resume() {
  const resumePath = process.env.PUBLIC_URL + "/resume.pdf";

  return (
    <div className="row justify-content-center">
      <div className="col-8 text-center">
        <div className="embed-responsive embed-responsive-1by1">
          <embed src={resumePath} type="application/pdf" className="embed-responsive-item"/>
        </div>
        <br/>
        <Button className="m-3" href={resumePath}>
          <FontAwesomeIcon icon={faFileDownload}/> Download
        </Button>
      </div>
    </div>
  );
}

export default Resume;
