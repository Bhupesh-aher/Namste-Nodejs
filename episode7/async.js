const fs = require("node:fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous - 
// it will block the main thread. the console log will happen once the file is read completly
// so it will offload the file operation to libuv but till the time file data has not come js engine will not move further it will wait for the file to come (till libuv returns data to it)
// once the data is returned to js engine then it will execute that and then it will move to next line
// so it is blocking the main thread
// and js engine still needs to offload the file task to libuv beacuse js engine does not have the file system capability
// but it will Synchronous operation and js engine will block the main thred till file data is not retuned back to js engine by libuv
// as developer we should never use the sync method but still they are available for you to use

// fs.readFileSync("./file.txt", "utf8"); // 10 ms
// console.log("This will execute only after file read after 10ms");






https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// Async function
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);