// console.log("namste node");

var a = 10;
 var b = 20;

//  console.log(a+b);



// global object  in node js is "global" 
//  console.log(global);
 

//  empty object 
// "this" is not equal to global object which is "global" in node js 
 console.log(this);



 // it is now pointing to global object and "globalThis" can be use in any browser and in node js basically in any js runtime enviornment
 // it is pointing to same global object

 console.log(globalThis);
 


// it will give true here
 console.log(globalThis === global );
 
 
 