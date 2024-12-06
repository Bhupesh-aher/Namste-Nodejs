
const fs = require("fs");
// const https = require("https")
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

// https.get("https://dummyjson.com/products/1", (res) => {
//     console.log("Fetched Data Successfully");
// });


function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the file.");

// a=100
// Last line of the file.
// Timer expired
// setImmediate
// File Reading CB 







// one thing here is that though poll phase comes before check phase but still
// setImmediate will be printed first and then File Reading CB 
// beacuse reading file will take some time meanwhile poll phase queue will be empty
// so event loop will move to next phase which is check phase
// and it sees that okay there cb which is ready to be executed in check queue
// so event loop will send cb of setImmediate to call stack and call stack will quikly excute that cb
// and in next phase when event loop  is going through close phase and timer phase in that phase
// file reading operation is complete and now file cb function is in queue of poll 
// now after timer phase when event loop will come to poll phase and it sees okay there is
// cb which is ready to be executed is  sends to call stack and call stack will quikly excute that cb
// this is how it works