// libs
import * as PIXI from "pixi.js";
// utils
import BaseNode from "./BaseNode";

export default class Container extends BaseNode {
  constructor(app, params) {
    super();
    this._app = app;
    this.node = new PIXI.Container();
    this._addParams(params);
  }

  addChild(child) {
    const add = ({ node, animation, delay }) => {
      if (delay) {
        setTimeout(() => {
          if (animation) {
            this._app.ticker.add(animation(node));
          }
          this.node.addChild(node);
        }, delay);
      } else {
        if (animation) {
          this._app.ticker.add(animation(node));
        }
        this.node.addChild(node);
      }
    };

    Array.isArray(child) ? child.forEach(add) : add(child);
  }
}
