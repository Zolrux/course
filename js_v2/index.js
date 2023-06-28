'use strict';

function createCounter() {
	let counter = 0;
	return function() {
		return counter++;
	};
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);