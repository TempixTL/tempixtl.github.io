import FlareComponent from 'flare-react';

// * Custome Flare Controller that allows for restarting the animation
class SignatureController extends FlareComponent.Controller {
  constructor() {
    super();
    this._stroke = null;
    this._strokeTime = 0;
  }

  initialize(artboard) {
    this._stroke = artboard.getAnimation("stroke");
  }

  advance(artboard, elapsed) {
    if (this._strokeTime < this._stroke.duration) {
      this._strokeTime += elapsed;
    }

    this._stroke.apply(this._strokeTime, artboard, 1.0);

    // Continue rendering
    return true;
  }

  restart() {
    this._strokeTime = 0;
  }
}

export default SignatureController;
