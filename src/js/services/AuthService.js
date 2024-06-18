import CustomLocalStorageService from "./CustomLocalStorageService";
import LocalUsersService from "./LocalUsersService";

class AuthService {

    static login(){

        LocalUsersService
        CustomLocalStorageService.setSpecificItem(token, {
            isLoggedIn: true,

        })
    }

    static isLoggedIn(){
       const token = CustomLocalStorageService.getSpecificItem("token")
       return token.isLoggedIn
    }

    static logout(token){
        CustomLocalStorageService.removeSpecificItem(token)
    }


}

export default AuthService