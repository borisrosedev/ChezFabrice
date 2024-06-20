//logique de routing

import LandingContainer from "./src/js/containers/LandingContainer.js";
import LoginContainer from "./src/js/containers/LoginContainer.js";
import LogoutContainer from "./src/js/containers/LogoutContainer.js";
import MenuContainer from "./src/js/containers/MenuContainer.js";
import RegisterContainer from "./src/js/containers/RegisterContainer.js";
import header from "./src/js/layouts/header.js";
import messageAside from "./src/js/layouts/message-aside.js";
import landingUI from "./src/js/pages/landingUI.js";
import loginUI from "./src/js/pages/loginUI.js";
import logoutUI from "./src/js/pages/logoutUI.js";
import menuUI from "./src/js/pages/menuUI.js";
import registerUI from "./src/js/pages/registerUI.js";

const container = document.getElementById("container");

window.onpopstate = () => {
  routerPush(window.location.hash);
};

const routerPush = async function (hash) {
  window.history.pushState({}, "", window.location.origin + hash);

  container.innerHTML = "";
  container.innerHTML += header();

  if (hash == "") {
    container.innerHTML += landingUI();
    container.innerHTML += messageAside();
    new LandingContainer();
  }

  if (hash == "#login") {
    container.innerHTML += loginUI();
    container.innerHTML += messageAside();
    new LoginContainer();
  }

  if (hash == "#register") {
    container.innerHTML += registerUI();
    container.innerHTML += messageAside();
    new RegisterContainer();
  }

  if (hash == "#logout") {
    container.innerHTML += logoutUI();
    container.innerHTML += messageAside();
    new LogoutContainer();
  }

  if (hash == "#menu") {
    console.log("menu");
    container.innerHTML += messageAside();
    container.innerHTML += await menuUI();
    new MenuContainer();
  }
};

routerPush(window.location.hash);
