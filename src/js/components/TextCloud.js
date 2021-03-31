// constants
import { clouds } from "../constants/constants";
// utils
import Ellipse from "../utils/Ellipse";
import Container from "../utils/Container";
import TextNode from "../utils/TextNode";
import BaseComponent from "../utils/BaseComponent";

const austinTextStyle = {
  fontFamily: "Arial",
  fontSize: 26,
  fontWeight: "bold",
  fill: "#a4572d",
  wordWrap: true,
  wordWrapWidth: 400,
  align: "center",
};

export default class TextCloud extends BaseComponent {
  constructor(app, spriteLoader) {
    super(app, spriteLoader);
    this._container = new Container(app, { zIndex: 14 });
    this.create();
  }

  remove() {
    this.removeFromStage(this._container);
  }

  create() {
    const { _container } = this;
    this.addToStage(_container);

    clouds.forEach(({ params, styles }, index) => {
      const textEllipse = new Ellipse(
        {
          ...params,
          animation: {
            params: { alpha: 1 },
            options: { duration: 1000 },
          },
          delay: 600 / (index + 1),
        },
        styles
      );
      _container.addChild(textEllipse);
    });

    const austinText = new TextNode(
      "Our house is in terrible shape. Help me fix it up!",
      austinTextStyle,
      {
        alpha: 0,
        position: [350, 90],
        animation: {
          params: { alpha: 1 },
          options: { duration: 1000 },
        },
        delay: 600,
      }
    );

    _container.addChild(austinText);
  }
}
