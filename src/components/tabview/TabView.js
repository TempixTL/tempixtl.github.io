import React, { useState } from 'react';
// Components
import { Nav } from 'react-bootstrap';
import About from 'components/about/About';

function TabView() {
  // Tracks selected tab
  const [tab, setTab] = useState("about");

  return (
    <div>
      <Nav
        style={{ paddingTop: "20px" }}
        variant="pills"
        defaultActiveKey={tab}
        className="justify-content-center"
        onSelect={(eventKey, _) => setTab(eventKey)}>
        <Nav.Link eventKey="about">about</Nav.Link>
        <Nav.Link eventKey="projects">projects</Nav.Link>
        <Nav.Link eventKey="resume">resume</Nav.Link>
        <Nav.Link eventKey="links">links</Nav.Link>
      </Nav>
      <div className="row justify-content-center">
        <div className="col-10">
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-10 col-xs-12">
          {(() => {
            switch (tab) {
              case "about": return <About />;
              default: return <p>{tab}</p>;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default TabView;
