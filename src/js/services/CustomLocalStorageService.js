class CustomLocalStorageService {

    static getSpecificItem(itemName){
        // on passe du JSON au JS
        return JSON.parse(localStorage.getItem(itemName))
    }

    static setSpecificItem(itemName, itemData){
        localStorage.setItem(itemName, JSON.stringify(itemData))
        return this.getSpecificItem(itemName)
    }


    static removeSpecificItem(itemName){
        localStorage.removeItem(itemName)
    }

}

export default CustomLocalStorageService