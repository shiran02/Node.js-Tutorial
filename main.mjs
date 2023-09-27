//first and second patern .........................

/*
import add from "./math-esm.mjs";
console.log(add(2,1));
*/

//third patterm......................................

/*
import math from "./math-esm.mjs";

console.log(math.add(2,4));
console.log(math.substract(8,4));

*/

//fifth pattern ......................

/*
import math from "./math-esm.mjs"

const {add,substract} = math;

console.log(add(2,4));
console.log(substract(8,4));
*/

//  sixth pattern ..........................................

import * as math from "./math-esm.mjs"

const {add , substract} = math;

console.log(add(6,5));
console.log(substract(8,5));

//..

import {add , substract} from  "./math-esm.mjs"


console.log(add(6,5));
console.log(substract(8,5));