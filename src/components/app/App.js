import React, { useState } from 'react';
// Components
import { Nav } from 'react-bootstrap';
import Signature from 'components/signature/Signature';
import { CSSTransition } from 'react-transition-group';
// Styles
import './App.css';

function App() {
  const [tab, setTab] = useState("about");

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center" style={{height: "200px"}}>
          <Signature width={200} height={200}/>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <CSSTransition in={true} appear={true} timeout={2000} classNames="name">
            <h2 className="name">Thomas Lauerman</h2>
          </CSSTransition>
        </div>
      </div>
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
        <div className="col-10">
          <p>{tab}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
