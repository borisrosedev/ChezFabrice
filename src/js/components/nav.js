import CustomLocalStorageService from "../services/CustomLocalStorageService.js";

const nav = function () {
 const token = CustomLocalStorageService.getSpecificItem("token")

  return `
            <nav class="nav">
                <a href="/">
                    <i class="fa-solid fa-house"></i>
                </a>
                <a href="#menu">
                    <i class="fa-solid fa-utensils"></i>
                </a>
                ${token && token.isLoggedIn ? 
                `<a href="#logout">
                 <i class="fa-solid fa-right-from-bracket"></i>
                </a>` : `<a href="#login"><i class="fa-solid fa-right-to-bracket"></i></a>`}
            </nav>
        
        `;
};

export default nav;
