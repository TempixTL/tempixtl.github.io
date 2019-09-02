import React from 'react';
// Components
import FlareComponent from 'flare-react';
// Assets
import signature from 'assets/signature.flr';
// Misc.
import SignatureController from './SignatureController';

function Signature({width, height}) {
  const controller = new SignatureController();

  return (
    <div onClick={() => controller.restart()} style={{display: "inline-block"}}>
      <FlareComponent
        width={width}
        height={height}
        controller={controller}
        file={signature} />
    </div>
  );
}

Signature.defaultProps = {
  width: 200,
  height: 200,
};

export default Signature;
