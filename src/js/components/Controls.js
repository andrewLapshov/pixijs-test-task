// utils
import BaseComponent from "../utils/BaseComponent";
// animations
import { fallDownAnimation } from "../animations/animations";

export default class Controls extends BaseComponent {
  constructor(app, spriteLoader, hammerClickHandler) {
    super(app, spriteLoader);
    this._hammerButton = null;
    this._hammerClickHandler = hammerClickHandler;
    this._onHammerClick = this._onHammerClick.bind(this);
    this._create();
  }

  _onHammerClick() {
    if (this._hammerClickHandler) {
      this._hammerClickHandler();
    }
    this.removeFromStage(this._hammerButton);
  }

  _create() {
    const { _spriteLoader } = this;

    const hammerButton = _spriteLoader.texture("hammer", {
      anchor: [0.5, 0.5],
      position: [1160, 300],
      vy: 0,
      interactive: true,
      animation: fallDownAnimation,
      delay: 1500,
    });
    hammerButton.addListener("pointerdown", this._onHammerClick);
    this._hammerButton = hammerButton;

    this.addToStage(hammerButton);
  }
}
