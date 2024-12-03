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


// console.log("calculate sum is run 2");

module.exports = {x, calculateSum};
