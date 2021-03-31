// utils
import BaseComponent from "../utils/BaseComponent";

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
      animation: {
        params: { position: { x: 1160, y: 350 } },
        options: { duration: 400, ease: "easeOutBounce" },
      },
      delay: 1200,
    });
    hammerButton.addListener("pointerdown", this._onHammerClick);
    this._hammerButton = hammerButton;

    this.addToStage(hammerButton);
  }
}
