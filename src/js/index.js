import * as PIXI from "pixi.js";
import "../static/css/index.css";
import {
  bubbleAnimation,
  fadeInAndMoveDownAnimation,
  fadeInAnimation,
  fallDownAnimation,
  pulseAnimation,
  scaleInAnimation,
} from "./animations";
import { clouds, menuItems, sources } from "./constants";

const Application = PIXI.Application;
const Sprite = PIXI.Sprite;
const Container = PIXI.Container;
const Graphics = PIXI.Graphics;
const TextStyle = PIXI.TextStyle;
const Text = PIXI.Text;

const app = new Application({
  width: 1280,
  height: 720,
  antialias: true,
});

app.stage.sortableChildren = true;

document.body.appendChild(app.view);

app.loader.add(sources).load((loader, resources) => {
  const back = new Sprite(resources.back.texture);
  back.anchor.set(0.5, 0.5);
  back.position.set(app.screen.width / 2, app.screen.height / 2);

  const plantOne = new Sprite(resources.plant.texture);
  plantOne.anchor.set(0.5, 0.5);
  plantOne.position.set(app.screen.width, app.screen.height * 0.3);

  const plantTwo = new Sprite(resources.plant.texture);
  plantTwo.anchor.set(0.5, 0.5);
  plantTwo.position.set(app.screen.width * 0.3, app.screen.height * 0.1);

  const sofa = new Sprite(resources.sofa.texture);
  sofa.anchor.set(0.5, 0.5);
  sofa.position.set(app.screen.width * 0.2, app.screen.height * 0.8);

  const bookStand = new Sprite(resources.bookStand.texture);
  bookStand.anchor.set(0.5, 1);
  bookStand.position.set(app.screen.width * 0.75, app.screen.height * 0.3);

  const globe = new Sprite(resources.globe.texture);
  globe.anchor.set(0.5, 1);
  globe.position.set(app.screen.width * 0.05, app.screen.height * 0.5);

  const table = new Sprite(resources.table.texture);
  table.anchor.set(0.5, 1);
  table.position.set(app.screen.width * 0.2, app.screen.height * 0.7);

  const logo = new Sprite(resources.logo.texture);
  logo.anchor.set(0.5, 0.5);
  logo.scale.set(0.8);
  logo.position.set(170, 70);
  logo.zIndex = 16;

  const austin = new Sprite(resources.austin.texture);
  austin.anchor.set(0.5, 0.5);
  austin.scale.set(-1, 1);
  austin.position.set(app.screen.width * 0.7, app.screen.height * 0.3);

  const mediumPlant = new Sprite(resources.mediumPlant.texture);
  mediumPlant.anchor.set(0.5, 0.5);
  mediumPlant.position.set(app.screen.width * 0.95, app.screen.height * 0.9);
  mediumPlant.zIndex = 10;

  const oldStair = new Sprite(resources.oldStair.texture);
  oldStair.anchor.set(0.5, 0.5);
  oldStair.position.set(1250, 380);

  const hammer = new Sprite(resources.hammer.texture);
  hammer.anchor.set(0.5, 0.5);
  hammer.position.set(1160, 300);
  hammer.vy = 0;
  hammer.interactive = true;

  const button = new Sprite(resources.button.texture);
  button.anchor.set(0.5, 0.5);
  button.position.set(app.screen.width * 0.5, app.screen.height * 0.8);
  button.zIndex = 14;
  app.ticker.add(pulseAnimation(button));

  const final = new Sprite(resources.final.texture);
  final.anchor.set(0.5, 0.5);
  final.position.set(app.screen.width / 2, app.screen.height / 3);
  final.zIndex = 15;
  final.scale.set(0);

  const overlay = new Sprite(resources.overlay.texture);
  overlay.width = app.screen.width;
  overlay.height = app.screen.height;
  overlay.zIndex = 10;
  overlay.alpha = 0.5;

  /* TextCloud */
  const TextCloud = new Container();
  TextCloud.zIndex = 14;
  app.stage.addChild(TextCloud);

  clouds.forEach(({ width, height, x, y }, index) => {
    const textEllipse = new Graphics();
    textEllipse.lineStyle(2, 0xffffff, 1);
    textEllipse.beginFill(0xebdbae);
    textEllipse.drawEllipse(0, 0, width, height);
    textEllipse.endFill();
    textEllipse.x = x;
    textEllipse.y = y;
    textEllipse.alpha = 0;

    setTimeout(() => {
      app.ticker.add(fadeInAnimation(textEllipse));
      TextCloud.addChild(textEllipse);
    }, 600 / (index + 1));
  });

  const messageStyle = new TextStyle({
    fontFamily: "Arial",
    fontSize: 26,
    fontWeight: "bold",
    fill: "#A4572D",
    wordWrap: true,
    wordWrapWidth: 400,
    align: "center",
  });

  const message = new Text(
    "Our house is in terrible shape. Help me fix it up!",
    messageStyle
  );
  message.alpha = 0;
  message.position.set(350, 90);
  setTimeout(() => {
    app.ticker.add(fadeInAnimation(message));
    TextCloud.addChild(message);
  }, 600);

  /* Menu */
  const Menu = new Container();
  Menu.position.set(750, 300);
  Menu.zIndex = 10;

  const activeMenuItem = {
    selectedItem: null,
    submitButton: null,
  };
  let currentStair = oldStair;

  menuItems.forEach(
    ({
      stairId,
      anchorX,
      anchorY,
      menuItemX,
      menuItemY,
      newStairId,
      newStairX = 0,
      newStairY = 0,
    }) => {
      const MenuItem = new Container();
      MenuItem.interactive = true;

      const item = new Sprite(resources.menuItem.texture);
      item.anchor.set(0.5);
      item.scale.set(1.15);
      item.y = 5;

      const selectedItem = new Sprite(resources.menuSelectedItem.texture);
      selectedItem.anchor.set(0.5);
      selectedItem.visible = false;

      const stairItem = new Sprite(resources[stairId].texture);
      stairItem.anchor.set(anchorX, anchorY);

      const MenuButton = new Container();
      MenuButton.scale.set(0);

      MenuItem.addChild(item);
      MenuItem.addChild(selectedItem);
      MenuItem.addChild(stairItem);

      const submitButton = new Sprite(resources.menuSubmit.texture);
      submitButton.anchor.set(0.5);
      submitButton.position.set(MenuButton.width / 2, 90);
      submitButton.interactive = true;
      submitButton.visible = false;

      MenuButton.addChild(MenuItem);
      MenuButton.addChild(submitButton);

      submitButton.on("pointerdown", () => {
        app.stage.removeChild(Menu);
        app.ticker.add(scaleInAnimation(final));
        app.stage.addChild(final);
        app.stage.addChild(overlay);
      });

      MenuItem.on("pointerdown", () => {
        if (activeMenuItem.selectedItem && activeMenuItem.submitButton) {
          activeMenuItem.selectedItem.visible = false;
          activeMenuItem.submitButton.visible = false;
        }
        selectedItem.visible = true;
        submitButton.visible = true;

        activeMenuItem.selectedItem = selectedItem;
        activeMenuItem.submitButton = submitButton;

        const newStair = new Sprite(resources[newStairId].texture);
        newStair.anchor.set(0.5, 0.5);
        newStair.alpha = 0;
        newStair.position.set(1200 + newStairX, 170 + newStairY);
        newStair.zIndex = 9;

        if (
          newStair._texture.textureCacheIds[0] !==
          currentStair._texture.textureCacheIds[0]
        ) {
          app.stage.removeChild(currentStair);
          currentStair = newStair;
          app.ticker.add(fadeInAndMoveDownAnimation(newStair));
          app.stage.addChild(newStair);
        }
      });

      MenuButton.position.set(menuItemX, menuItemY);
      Menu.addChild(MenuButton);
    }
  );

  const handleMenu = () => {
    app.stage.removeChild(hammer);
    app.stage.removeChild(TextCloud);
    app.stage.addChild(Menu);
    Menu.children.forEach((child, index) => {
      setTimeout(() => {
        app.ticker.add(bubbleAnimation(child));
      }, 100 * index);
    });
  };

  hammer.on("pointerdown", handleMenu);

  app.stage.addChild(back);
  app.stage.addChild(plantOne);
  app.stage.addChild(plantTwo);
  app.stage.addChild(bookStand);
  app.stage.addChild(globe);
  app.stage.addChild(table);
  app.stage.addChild(sofa);
  app.stage.addChild(austin);
  app.stage.addChild(mediumPlant);
  app.stage.addChild(oldStair);
  app.stage.addChild(button);

  setTimeout(() => {
    app.ticker.add(scaleInAnimation(logo));
    app.stage.addChild(logo);
  }, 1000);

  setTimeout(() => {
    app.ticker.add(fallDownAnimation(hammer));
    app.stage.addChild(hammer);
  }, 1500);
});
