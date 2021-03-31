// styles
import "../static/css/index.css";
// components
import App from "./components/App";
// sources
import { sources } from "./constants/constants";

const gameApp = new App();

document.body.appendChild(gameApp.app.view);

gameApp.app.loader.add(sources).load(gameApp.init);
