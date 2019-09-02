import React from 'react';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Assets
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="row p-3">
      <div className="col text-center">
        <a href="https://www.linkedin.com/in/thomas-lauerman/" className="m-1">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a href="https://github.com/TempixTL" className="m-1">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href="https://www.instagram.com/tempixtl/" className="m-1">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href="https://twitter.com/tempixtl" className="m-1">
          <FontAwesomeIcon icon={faTwitter}/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
