// utils
import BaseComponent from "../utils/BaseComponent";
// animations
import { pulseAnimation, scaleInAnimation } from "../animations/animations";

export default class Background extends BaseComponent {
  constructor(app, spriteLoader) {
    super(app, spriteLoader);
    this.stair = null;
    this._create();
  }

  _create() {
    const { _app, _sprites, _spriteLoader } = this;

    _sprites.push(
      _spriteLoader.texture("back", {
        anchor: [0.5, 0.5],
        position: [_app.screen.width / 2, _app.screen.height / 2],
      })
    );

    _sprites.push(
      _spriteLoader.texture("plant", {
        anchor: [0.5, 0.5],
        position: [_app.screen.width, _app.screen.height * 0.3],
      })
    );

    _sprites.push(
      _spriteLoader.texture("plant", {
        anchor: [0.5, 0.5],
        position: [_app.screen.width * 0.3, _app.screen.height * 0.1],
      })
    );

    _sprites.push(
      _spriteLoader.texture("sofa", {
        anchor: [0.5, 0.5],
        position: [_app.screen.width * 0.2, _app.screen.height * 0.8],
      })
    );

    _sprites.push(
      _spriteLoader.texture("bookStand", {
        anchor: [0.5, 1],
        position: [_app.screen.width * 0.75, _app.screen.height * 0.3],
      })
    );

    _sprites.push(
      _spriteLoader.texture("globe", {
        anchor: [0.5, 1],
        position: [_app.screen.width * 0.05, _app.screen.height * 0.5],
      })
    );

    _sprites.push(
      _spriteLoader.texture("table", {
        anchor: [0.5, 1],
        position: [_app.screen.width * 0.2, _app.screen.height * 0.7],
      })
    );

    _sprites.push(
      _spriteLoader.texture("logo", {
        anchor: [0.5, 0.5],
        position: [170, 70],
        scale: [0.8],
        zIndex: 16,
        animation: scaleInAnimation,
        delay: 1000,
      })
    );

    _sprites.push(
      _spriteLoader.texture("austin", {
        anchor: [0.5, 0.5],
        position: [_app.screen.width * 0.7, _app.screen.height * 0.3],
        scale: [-1, 1],
      })
    );

    _sprites.push(
      _spriteLoader.texture("mediumPlant", {
        anchor: [0.5, 0.5],
        position: [_app.screen.width * 0.95, _app.screen.height * 0.9],
        zIndex: 10,
      })
    );

    const oldStair = _spriteLoader.texture("oldStair", {
      anchor: [0.5, 0.5],
      position: [1250, 380],
    });
    _sprites.push(oldStair);
    this.stair = oldStair;

    _sprites.push(
      _spriteLoader.texture("button", {
        anchor: [0.5, 0.5],
        position: [_app.screen.width * 0.5, _app.screen.height * 0.8],
        zIndex: 14,
        animation: pulseAnimation,
      })
    );
    this.addSpritesToStage();
  }
}
