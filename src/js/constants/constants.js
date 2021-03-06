export const sources = [
  { name: "back", url: "src/static/images/back.png" },
  { name: "plant", url: "src/static/images/plant.png" },
  { name: "sofa", url: "src/static/images/sofa.png" },
  { name: "bookStand", url: "src/static/images/book_stand.png" },
  { name: "globe", url: "src/static/images/globe.png" },
  { name: "table", url: "src/static/images/table.png" },
  { name: "logo", url: "src/static/images/logo.png" },
  { name: "austin", url: "src/static/images/Austin.png" },
  { name: "mediumPlant", url: "src/static/images/medium_plant.png" },
  { name: "oldStair", url: "src/static/images/old-stair.png" },
  { name: "hammer", url: "src/static/images/icon_hammer.png" },
  { name: "button", url: "src/static/images/btn.png" },
  { name: "menuStair1", url: "src/static/images/menu/stair-1.png" },
  { name: "menuStair2", url: "src/static/images/menu/stair-2.png" },
  { name: "menuStair3", url: "src/static/images/menu/stair-3.png" },
  { name: "menuItem", url: "src/static/images/menu/item.png" },
  { name: "menuSelectedItem", url: "src/static/images/menu/selected-item.png" },
  { name: "menuSubmit", url: "src/static/images/menu/submit.png" },
  { name: "newStair1", url: "src/static/images/stairs/new-stair-1.png" },
  { name: "newStair2", url: "src/static/images/stairs/new-stair-2.png" },
  { name: "newStair3", url: "src/static/images/stairs/new-stair-3.png" },
  { name: "final", url: "src/static/images/final.png" },
  { name: "overlay", url: "src/static/images/overlay.png" },
];

export const clouds = [
  {
    params: {
      x: 540,
      y: 120,
      alpha: 0,
    },
    styles: {
      width: 220,
      height: 70,
      fill: 0xebdbae,
      lineStyle: {
        width: 2,
        color: 0xffffff,
        alpha: 1,
      },
    },
  },
  {
    params: {
      x: 800,
      y: 90,
      alpha: 0,
    },
    styles: {
      width: 15,
      height: 15,
      fill: 0xebdbae,
      lineStyle: {
        width: 2,
        color: 0xffffff,
        alpha: 1,
      },
    },
  },
  {
    params: {
      x: 840,
      y: 100,
      alpha: 0,
    },
    styles: {
      width: 5,
      height: 5,
      fill: 0xebdbae,
      lineStyle: {
        width: 2,
        color: 0xffffff,
        alpha: 1,
      },
    },
  },
];

export const menuItems = [
  {
    stairId: "menuStair1",
    anchorX: 0.27,
    anchorY: 0.7,
    menuItemX: 0,
    menuItemY: 0,
    newStairId: "newStair1",
    newStairX: 0,
    newStairY: -10,
  },
  {
    stairId: "menuStair2",
    anchorX: 0.2,
    anchorY: 0.77,
    menuItemX: 140,
    menuItemY: -90,
    newStairId: "newStair2",
  },
  {
    stairId: "menuStair3",
    anchorX: 0.35,
    anchorY: 0.6,
    menuItemX: 300,
    menuItemY: -100,
    newStairId: "newStair3",
    newStairX: 30,
    newStairY: 10,
  },
];
