import CustomLocalStorageService from "../services/CustomLocalStorageService.js";


const loggedInNav = () => {
    return(
        `
        <a href="#wallet">
            <i class="fa-solid fa-wallet"></i>
        </a>

        <a href="#cart">
            <i class="fa-solid fa-bag-shopping"></i>
        </a>

        <a href="#dashboard">
            <i class="fa-solid fa-house-user"></i>
        </a> 
    
        <a href="#logout">
            <i class="fa-solid fa-right-from-bracket"></i>
        </a>
        
        `
    )
}


const nav = function () {
  const token = CustomLocalStorageService.getSpecificItem("token");

  return `
            <nav class="nav">
                <a href="/">
                    <i class="fa-solid fa-house"></i>
                </a>
                <a href="#menu">
                    <i class="fa-solid fa-utensils"></i>
                </a>
                ${
                  token && token.isLoggedIn
                    ?  loggedInNav()
                    : `<a href="#login"><i class="fa-solid fa-right-to-bracket"></i></a>`
                }
            </nav>
        
        `;
};

export default nav;
