// libs
import * as PIXI from "pixi.js";
// utils
import BaseNode from "./BaseNode";

export default class TextNode extends BaseNode {
  constructor(content, styles, params) {
    super();
    this.node = new PIXI.Text(content, new PIXI.TextStyle(styles));
    if (params) {
      this._addParams(params);
    }
  }
}
