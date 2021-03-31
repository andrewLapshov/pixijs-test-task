// utils
import BaseNode from "./BaseNode";

export default class Sprite extends BaseNode {
  constructor(node, params) {
    super();
    this.node = node;
    if (params) {
      this._addParams(params);
    }
  }
}
