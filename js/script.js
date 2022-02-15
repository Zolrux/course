"use strict";

const now = new Date("2021-05-01");
// new Date.parse("2021-05-01");

// console.log(now.getFullYear());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

// console.log(now.getUTCHours());
// console.log(now.getUTCFullYear());
// console.log(now.getUTCMinutes());
// console.log(now.getUTCMonth());
// console.log(now.getUTCSeconds());
// console.log(now.getUTCMilliseconds());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let index = 0; index < 100000; index++) {
  let some = index ** 3;
}

let end = new Date();
alert(`Цикл отроботал за ${end - start} милисекунд`);
