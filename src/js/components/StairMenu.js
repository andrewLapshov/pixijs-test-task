// constants
import { menuItems } from "../constants/constants";
// animations
import {
  bubbleAnimation,
  fadeInAndMoveDownAnimation,
} from "../animations/animations";
// utils
import Container from "../utils/Container";
import BaseComponent from "../utils/BaseComponent";

export default class StairMenu extends BaseComponent {
  constructor(app, spriteLoader, oldStair, submitHandler) {
    super(app, spriteLoader);
    this._app = app;
    this._container = new Container(app, {
      position: [750, 300],
      zIndex: 10,
    });
    this._activeMenuItem = {
      selectedItem: null,
      submitButton: null,
    };
    this._currentStair = oldStair;
    this._submitHandler = submitHandler;
    this._onSubmit = this._onSubmit.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onSubmit() {
    this.removeFromStage(this._container);
    if (this._submitHandler) {
      this._submitHandler();
    }
  }

  _onButtonClick({ target }) {
    if (target?.data?.stairId === this._currentStair.node?.stairId) {
      return;
    }
    const { stairId, stairX, stairY } = target.data;
    const { _activeMenuItem, _spriteLoader } = this;
    if (_activeMenuItem.selectedItem && _activeMenuItem.submitButton) {
      _activeMenuItem.selectedItem.visible = false;
      _activeMenuItem.submitButton.visible = false;
    }
    const newSelectedItem = target.children[1];
    const newSubmitButton = target.parent.children[1];
    newSelectedItem.visible = true;
    newSubmitButton.visible = true;

    _activeMenuItem.selectedItem = newSelectedItem;
    _activeMenuItem.submitButton = newSubmitButton;

    const newStair = _spriteLoader.texture(stairId, {
      anchor: [0.5, 0.5],
      alpha: 0,
      position: [1200 + stairX, 170 + stairY],
      zIndex: 9,
      stairId,
      animation: fadeInAndMoveDownAnimation,
    });

    this.removeFromStage(this._currentStair);
    this._currentStair = newStair;
    this.addToStage(newStair);
  }

  create() {
    const { _app, _spriteLoader } = this;

    menuItems.forEach(
      (
        {
          stairId,
          anchorX,
          anchorY,
          menuItemX,
          menuItemY,
          newStairId,
          newStairX = 0,
          newStairY = 0,
        },
        index
      ) => {
        const menuItem = new Container(_app, {
          interactive: true,
          data: {
            stairId: newStairId,
            stairX: newStairX,
            stairY: newStairY,
          },
        });
        menuItem.addListener("pointerdown", this._onButtonClick);

        const item = _spriteLoader.texture("menuItem", {
          anchor: [0.5],
          scale: [1.15],
          y: 5,
        });
        const itemSelect = _spriteLoader.texture("menuSelectedItem", {
          anchor: [0.5],
          visible: false,
        });
        const stairItem = _spriteLoader.texture(stairId, {
          anchor: [anchorX, anchorY],
        });
        menuItem.addChild([item, itemSelect, stairItem]);

        const menuButton = new Container(_app, {
          scale: [0],
          position: [menuItemX, menuItemY],

          animation: bubbleAnimation,
          delay: 100 * index,
        });

        const submitButton = _spriteLoader.texture("menuSubmit", {
          anchor: [0.5],
          position: [menuButton.node.width / 2, 90],
          interactive: true,
          visible: false,
        });
        submitButton.addListener("pointerdown", this._onSubmit);

        menuButton.addChild([menuItem, submitButton]);

        this._container.addChild(menuButton);
      }
    );
    this.addToStage(this._container);
  }
}
