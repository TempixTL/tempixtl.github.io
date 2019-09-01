import React from 'react';
import { animated, useSpring } from 'react-spring';
// Assets
import headshot from 'assets/headshot.jpg';

function About() {
  return (
    <div>
      <img
        src={headshot}
        alt="Headshot"
        className="rounded"
        style={{ width: "200px", height: "200px" }} />
      <p>Testing</p>
    </div>
  );
}

export default About;
