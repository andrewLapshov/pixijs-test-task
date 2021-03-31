export default class BaseNode {
  constructor() {
    this.node = null;
    this.animation = null;
    this.delay = null;
  }

  _addParams(params) {
    Object.entries(params).forEach(([key, value]) => {
      if (key === "animation" || key === "delay") {
        this[key] = value;
      } else if (Array.isArray(value)) {
        this.node[key].set(...value);
      } else {
        this.node[key] = value;
      }
    });
  }

  addListener(event, listener) {
    this.node.on(event, listener);
  }
}
