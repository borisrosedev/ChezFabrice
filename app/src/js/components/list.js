const list = function (data, context) {
  return `
            <ul class='list'>

                ${data.map((el, index) => listItem(el)).join("")}
            
            </ul>
        
        
        `;
};

export default list;
