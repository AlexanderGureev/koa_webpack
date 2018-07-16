import validator from "./validate/validate.js";
import sum from "./validate/sum";
import "../common/socket.io";

// if (module.hot) {
//     module.hot.accept('./validate/sum', function () {
//         console.log('Accepting the updated sum module!');
//         console.log(`SUM = ${sum(1,2,3,4,5,6)}`);
//     })
// }

//alert(validator());



console.log(`SUM = ${sum(1,2,3,4,5,6,7)}`);

import "../../less/home/main.less";