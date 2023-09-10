'use strict';

// function* generator() {
// 	yield 'S';
// 	yield 'c';
// 	yield 'r';
// 	yield 'i';
// 	yield 'p';
// 	yield 't';
// }

// const str = generator();

// console.log(str.next().value);

function* count(n) {
	for (let i = 0; i < n; i++) {
		yield i;
	}
}

for (const k of count(7)) {
	console.log(k);
}

// const counter = count(7);

// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());