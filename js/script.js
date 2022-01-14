"use strict";

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}
console.log(arr);
// arr[99] = 0;

// console.log(arr.length);

// arr.forEach(function (item, index, arr) {
//   console.log(`${index}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));
