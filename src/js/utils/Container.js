// libs
import * as PIXI from "pixi.js";
import { ease } from "pixi-ease";
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
    const addSingleChild = (node, animation) => {
      if (animation) {
        if (typeof animation === "function") {
          this._app.ticker.add(animation(node));
        } else {
          ease.add(node, animation.params, animation.options);
        }
      }
      this.node.addChild(node);
    };
    const addFunc = ({ node, animation, delay }) => {
      if (delay) {
        setTimeout(() => {
          addSingleChild(node, animation);
        }, delay);
      } else {
        addSingleChild(node, animation);
      }
    };

    Array.isArray(child) ? child.forEach(addFunc) : addFunc(child);
  }
}
