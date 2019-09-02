import React from 'react';
// Assets
import headshot from 'assets/headshot.jpg';

function About() {
  return (
    <div>
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-3">
          <img
            src={headshot}
            alt="Headshot"
            className="img-fluid shadow rounded"/>
        </div>
        <div className="col-sm-6 py-3">
          <p>
            <span role="img" aria-label="home">🏠</span> Dallas/Fort Worth &amp; San Antonio resident
            <br/>
            <span role="img" aria-label="old building">🏛️</span> Trinity University Class of 2021 student
            <br/>
            <span role="img" aria-label="graduation cap">🎓</span> Computer Science Major &amp; Art Minor
            <br/>
            <span role="img" aria-label="laptop">💻</span> ACM Computer Science Tutor
            <br/>
            <span role="img" aria-label="saxaphone">🎷</span> 80's music addict
            <br/>
            <span role="img" aria-label="joystick">🕹️</span> Nintendo fanboy
            <br/>
            <span role="img" aria-label="frying pan">🍳</span> Egg fanatic
            <br/>
            <span role="img" aria-label="cat">🐈</span> Cat lover
          </p>
        </div>
      </div>
      <div className="row justify-content-center py-3">
        <div className="col-md-8 col-sm-10">
          <p>
            <span className="lead">I'm a student at Trinity University with a passion for all things computer science.</span> I've been taking courses in programming since my sophomore year at Frisco High school, and I haven't gone a single semester since then without taking a course that furthers my understanding of the field. Programming is an art, so I pride myself on coming up with creative solutions and implementing them with a fierce work ethic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
