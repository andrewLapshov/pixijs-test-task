// components
import BaseComponent from "../utils/BaseComponent";
// animations
import { scaleInAnimation } from "../animations/animations";

export default class Final extends BaseComponent {
  constructor(app, spriteLoader) {
    super(app, spriteLoader);
  }

  create() {
    const { _app, _sprites, _spriteLoader } = this;
    _sprites.push(
      _spriteLoader.texture("final", {
        anchor: [0.5, 0.5],
        position: [_app.screen.width / 2, _app.screen.height / 3],
        zIndex: 15,
        scale: [0],
        animation: scaleInAnimation,
      })
    );

    _sprites.push(
      _spriteLoader.texture("overlay", {
        width: _app.screen.width,
        height: _app.screen.height,
        zIndex: 10,
        alpha: 0.5,
      })
    );
    this.addSpritesToStage();
  }
}
