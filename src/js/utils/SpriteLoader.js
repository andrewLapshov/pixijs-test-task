// libs
import * as PIXI from "pixi.js";
// utils
import Sprite from "./Sprite";

export default class SpriteLoader {
  constructor(resources) {
    this._resources = resources;
  }

  texture(name, params) {
    const node = new PIXI.Sprite(this._resources[name].texture);
    return new Sprite(node, params);
  }
}
