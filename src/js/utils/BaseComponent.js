// libs
import { ease } from "pixi-ease";

export default class BaseComponent {
  constructor(app, spriteLoader) {
    this._app = app;
    this._spriteLoader = spriteLoader;
    this._sprites = [];
    this.addToStage = this.addToStage.bind(this);
  }

  addSpritesToStage() {
    this._sprites.forEach(this.addToStage);
  }

  addToStage({ node, animation, delay }) {
    const addFunc = () => {
      if (animation) {
        if (typeof animation === "function") {
          this._app.ticker.add(animation(node));
        } else {
          ease.add(node, animation.params, animation.options);
        }
      }
      this._app.stage.addChild(node);
    };
    if (delay) {
      setTimeout(() => {
        addFunc();
      }, delay);
    } else {
      addFunc();
    }
  }

  removeFromStage({ node }) {
    this._app.stage.removeChild(node);
  }
}
