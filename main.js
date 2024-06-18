//logique de routing

import LoginContainer from "./src/js/containers/LoginContainer.js"
import header from "./src/js/layouts/header.js"
import landingUI from "./src/js/pages/landingUI.js"
import loginUI from "./src/js/pages/loginUI.js"

const container = document.getElementById('container')


window.onpopstate = () => {
    routerPush(window.location.hash)
}

const routerPush = function(hash){

    window.history.pushState({}, "", window.location.origin + hash)

    container.innerHTML = ""
    container.innerHTML += header()

    if(hash == ""){
        console.log('La page racine')
        container.innerHTML += landingUI();
    } 

    if(hash == "#login"){
        container.innerHTML += loginUI()
        new LoginContainer()
    }
}

routerPush(window.location.hash)