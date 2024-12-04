// require("./xyz.js") // one module into another

// require("./sum.js")

// const obj = require("./sum.js");

// const {x, calculateSum} = require("./calculate/sum"); // object destructure
// const {calculateMultiply} = require("./calculate/multiply")


const {x, calculateMultiply, calculateSum} = require("./calculate")

const data = require("./data.json")


 
calculateSum(10, 20);
calculateMultiply(10, 20);
console.log(x);
console.log(data);










// ES modules  -


//  import {x, calculateSum } from "./sum.js";


//  var a = 10;
//  var b = 20;
 
  
//  // obj.calculateSum(a, b);
//  // console.log(obj.x);
 
  
//  console.log(x);
//  calculateSum(a, b);
 
 
 
//   console.log("app module");


 
 
 
