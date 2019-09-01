import React from 'react';
// Assets
import headshot from 'assets/headshot.jpg';

function About() {
  return (
    <div>
      <img
        src={headshot}
        alt="Headshot"
        className="shadow rounded float-left"
        style={{ width: "200px", height: "200px", margin: "10px" }} />
      <p>Testing</p>
    </div>
  );
}

export default About;
