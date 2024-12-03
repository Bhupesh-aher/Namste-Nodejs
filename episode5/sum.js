// by default modules protect thier variables and functions from leaking

// console.log("calculate sum is run");

var x = "hello world";

const calculateSum = (a, b) => {
    let sum = 0;
    sum = a + b;
    // console.log("inside function");
    
    console.log(sum);
     
}


// calculateSum(10, 20);




module.exports = {x, calculateSum};





// ES modules  -

// export var x = "hello world";

// export const calculateSum = (a, b) => {
//     let sum = 0;
//     sum = a + b;
//     // console.log("inside function");
    
//     console.log(sum);
     
// }

