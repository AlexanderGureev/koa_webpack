import validator from "./validate/validate.js";

if (module.hot) {
    module.hot.accept("./validate/validate.js", () => {
        
            alert("test");
    
    });
  }

alert(validator());

function sum(...elements) {
    return elements.reduce((prev, curr) => prev + curr);
}

console.log(`SUM = ${sum(1,2,3,4,5,6)}`);

import "../../less/home/main.less";