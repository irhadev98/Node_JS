// console.log("hello World");


// common js import method
// have type common js in package.json

const math = require('./math')

console.log(math.add(2 , 5));
console.log(math.sub(6 , 2));


// ES Module import method 
// have type module in package.json

import { multiply , divide } from "./math.js";

console.log(multiply(2 , 3));
console.log(divide(2 , 3));

