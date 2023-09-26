//Type of modules

//1. local modules - modules that we create in our application
//2.Built-in module - modules that Node.js ships with out of the box
//3. third party modules - modules written by othrther developers that we can use in our application

const addFn = require('./add');
const myDetailFn = require('./myDetail');

console.log("Hello from Module");
const sum1 = addFn(1,2)
const detail1 = myDetailFn("shiran",33)

console.log(sum1)
console.log(detail1)

