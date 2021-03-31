// utils
import Graphics from "./Graphics";

export default class Ellipse extends Graphics {
  constructor(params, styles) {
    super(params);
    this.draw(styles);
  }

  draw(styles) {
    const { lineStyle, fill, width, height, centerX = 0, centerY = 0 } = styles;
    this.node.lineStyle(lineStyle.width, lineStyle.color, lineStyle.alpha);
    this.node.beginFill(fill);
    this.node.drawEllipse(centerX, centerY, width, height);
    this.node.endFill();
  }
}
