// libs
import * as PIXI from "pixi.js";
// utils
import BaseNode from "./BaseNode";

export default class Graphics extends BaseNode {
  constructor(params) {
    super();
    this.node = new PIXI.Graphics();
    if (params) {
      this._addParams(params);
    }
  }
}
