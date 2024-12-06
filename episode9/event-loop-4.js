/**
 * Last line of the file.
 * nextTick
 * inner nextTick
 * Promise
 * Timer expired
 * setImmediate
 * File Reading CB
 * 
 * const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});
process.nextTick(() => {
  process.nextTick(() => console.log(" inner nextTick"));
  console.log("nextTick");
});

console.log("Last line of the file.");
 *
 */



const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
setImmediate(() => {
  console.log("setImmediate 2")
  process.nextTick(() => {
    console.log(" nextTick inside setImmediate")
     
  Promise.resolve("promise inside setImmediate inside nextTick").then((data) => {
    console.log(data);
    
  });
    })
  Promise.resolve("Promise inside setImmediate in outer").then(console.log);


}); 

setTimeout(() =>  {
  
  console.log("Timer expired ");
  process.nextTick(() => console.log(" inner nextTick inside timeout"));
  Promise.resolve("Promise inside timeout").then(console.log);

}, 0);


// Promise.resolve("Promise").then(console.log);
Promise.resolve("Promise").then((data) => {
  console.log(data);
  
  Promise.resolve("promise2").then((data) => {
    console.log(data);
    
  });
  console.log("promise 3");
  
});


fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});
process.nextTick(() => {
  process.nextTick(() => {
    process.nextTick(() => {
    console.log(" inner most nextTick")
     
  Promise.resolve("promise inside nextTick").then((data) => {
    console.log(data);
    
  });
    })
    console.log(" inner nextTick ")
  });
  console.log("nextTick");
});

console.log("Last line of the file.");