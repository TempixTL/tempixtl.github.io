import React from 'react';
//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Assets
import headshot from 'assets/headshot.jpg';
import { faMapMarkerAlt, faBriefcase, faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div>
      <div className="row">
        <img
          src={headshot}
          alt="Headshot"
          className="shadow rounded float-left"
          style={{ width: "200px", height: "200px", margin: "10px" }} />
        <div>
          {/* TODO vertical alignment :( */}
          <ul className="fa-ul">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} listItem />
              Dallas/Fort Worth &amp; San Antonio
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} listItem />
              ACM Computer Science Tutor
            </li>
            <li>
              <FontAwesomeIcon icon={faUniversity} listItem />
              Trinity University Class of 2021
            </li>
            <li>
              <FontAwesomeIcon icon={faGraduationCap} listItem />
              Computer Science Major &amp; Art Minor
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <p>
          <span className="lead">I'm a student at Trinity University with a passion for all things computer science.</span> I've been taking courses in programming since my sophomore year at Frisco High school, and I haven't gone a single semester since then without taking a course that furthers my understanding of the field. Programming is an art, so I pride myself on coming up with creative solutions and implementing them with a fierce work ethic.
        </p>
      </div>
    </div>
  );
}

export default About;
