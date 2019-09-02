import React from 'react';
// Components
import { pdfjs, Document, Page } from 'react-pdf';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Assets
import resume from 'assets/resume.pdf';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

// * Performance: ensure pdf.worker.js loads
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div className="row justify-content-center">
      <div className="col-10 text-center">
        <div className="rounded shadow d-inline-block">
          <Document file={resume}>
            <Page pageNumber={1} />
          </Document>
        </div>
        <br/>
        <Button className="m-3" href={resume} target="_blank">
          <FontAwesomeIcon icon={faFileDownload}/> Download
        </Button>
      </div>
    </div>
  );
}

export default Resume;
