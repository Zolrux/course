"use strict";
let num = 20;
function showFirstMessage(text) {
  console.log(text);
  let num = 10;
}

showFirstMessage("Hello");
console.log(num);

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 5));

const logger = function () {
  console.log("Hi");
};

let Calc = (a, b) => a + b;

console.log(Calc(2, 5));
