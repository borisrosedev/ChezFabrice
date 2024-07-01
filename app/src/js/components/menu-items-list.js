import menuItem from "./menu-item.js";

const menuItemsList = function (data) {
  return `
            <ul class="menu-items-list">
                    ${data.map((el, index) => menuItem(el)).join("")}
            </ul>
        
        `;
};

export default menuItemsList;
