// libs
import * as PIXI from "pixi.js";
// utils
import SpriteLoader from "../utils/SpriteLoader";
// components
import Background from "./Background";
import TextCloud from "./TextCloud";
import Final from "./Final";
import StairMenu from "./StairMenu";
import Controls from "./Controls";

export default class App {
  constructor() {
    this.app = new PIXI.Application({
      width: 1280,
      height: 720,
      antialias: true,
    });
    this.app.stage.sortableChildren = true;
    this.init = this.init.bind(this);
  }

  init(loader, resources) {
    const { app } = this;
    const spriteLoader = new SpriteLoader(resources);

    const background = new Background(app, spriteLoader);
    const textCloud = new TextCloud(app, spriteLoader);
    const final = new Final(app, spriteLoader);
    const onStairsMenuSubmit = () => {
      final.create();
    };

    const stairMenu = new StairMenu(
      app,
      spriteLoader,
      background.stair,
      onStairsMenuSubmit
    );
    const onHammerClick = () => {
      stairMenu.create();
      textCloud.remove();
    };
    new Controls(app, spriteLoader, onHammerClick);
  }
}
