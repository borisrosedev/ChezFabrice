//logique de routing

import LoginContainer from "./src/js/containers/LoginContainer.js"
import loginUI from "./src/js/pages/loginUI.js"

const container = document.getElementById('container')

const routerPush = function(hash){
    if(hash == ""){
        console.log('La page racine')
    } 

    if(hash == "#login"){
        container.innerHTML += loginUI()
        new LoginContainer()
    }
}

routerPush(window.location.hash)