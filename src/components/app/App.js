import React from 'react';
import { useSpring, animated } from 'react-spring';
// Components
import Signature from 'components/signature/Signature';
import TabView from 'components/tabview/TabView';
import Footer from 'components/footer/Footer';

function App() {
  // Animates name fade-in
  const nameStyle = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center" style={{height: "200px"}}>
          <Signature width={200} height={200}/>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <animated.h2 style={nameStyle}>Thomas Lauerman</animated.h2>
        </div>
      </div>
      <TabView/>
      <Footer/>
    </div>
  );
}

export default App;
