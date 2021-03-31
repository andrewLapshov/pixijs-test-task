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
    if (delay) {
      setTimeout(() => {
        if (animation) {
          this._app.ticker.add(animation(node));
        }
        this._app.stage.addChild(node);
      }, delay);
    } else {
      if (animation) {
        this._app.ticker.add(animation(node));
      }
      this._app.stage.addChild(node);
    }
  }

  removeFromStage({ node }) {
    this._app.stage.removeChild(node);
  }
}
