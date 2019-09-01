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
      <div className="container header">
        <div className="row">
          <div className="col signature">
            <FlareComponent
              className="signature"
              width={200} height={200}
              animationName="stroke"
              file={signature} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CSSTransition in={showName} timeout={2000} classNames="name">
              <h2 className="name">Thomas Lauerman</h2>
            </CSSTransition>
          </div>
        </div>
      </div>
      <div className="container nav">
        <Nav variant="pills">
          <Nav.Item defaultActiveKey="about">
            <Nav.Link eventKey="about">about</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default App;
