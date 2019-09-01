import React, { useState, useEffect } from 'react';
// Components
import { Nav } from 'react-bootstrap';
import FlareComponent from 'flare-react';
import { CSSTransition } from 'react-transition-group';
// Styles
import './App.css';
// Assets
import signature from 'assets/signature.flr';

function App() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    setShowName(true);
  }, []);

  return (
    <div>
      <div className="container" style={{padding: "20px 0"}}>
        <div className="row">
          <div className="col text-center" style={{width: "200px", height: "200px"}}>
            <FlareComponent
              width={200} height={200}
              animationName="stroke"
              file={signature} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <CSSTransition in={showName} timeout={2000} classNames="name">
              <h2 className="name">Thomas Lauerman</h2>
            </CSSTransition>
          </div>
        </div>
      </div>
      <Nav variant="pills" defaultActiveKey="about" className="justify-content-center">
        <Nav.Link eventKey="about">about</Nav.Link>
        <Nav.Link eventKey="projects">projects</Nav.Link>
        <Nav.Link eventKey="links">links</Nav.Link>
      </Nav>
    </div>
  );
}

export default App;
