import CustomLocalStorageService from "../services/CustomLocalStorageService.js";

class LogoutContainer {

    constructor(){
        this.onInit()
    }

    onInit(){
        CustomLocalStorageService.removeSpecificItem("token")
    }

}

export default LogoutContainer