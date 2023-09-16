'use strict';

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose = (...functions) => {
	return result => {
		// let flag = true;
		return functions.reduceRight((acc, currentFn) => {
			// if (flag) {
			// 	flag = false;
			// 	return currentFn(acc(result));
			// }
			return currentFn(acc);
		}, result);
	};
};

// Спсобо №2 (не оптимальный)

// const compose = (...functions) => {
// 	return result => {
// 		let flag = true;
// 		let functionResult;

// 		[...functions].reverse().forEach(value => {
// 			if (flag) {
// 				flag = false;
// 				functionResult = value(result);
// 			} else {
// 				functionResult = value(functionResult);
// 			}
// 		});

// 		return functionResult;
// 	};
// };

// const res = compose(normalizePrice, divide100, multiply20)(200);
// console.log(res);

const add1 = function(a){return a + 1;};
const addAll3 = function(a,b,c){return a + b + c;};

const composeWithArgs = (...functions) => {
	return (...args) => {
		// let flag = true;
		return functions.reduceRight((acc, currentFn) => {
			// if (flag) {
			// 	flag = false;
			// 	return currentFn(acc(...args)); 
			// } 
			// return currentFn(acc);
			return currentFn(acc(...args)); 
		});
	};
};

// Способ №2 (не оптимальный)

// const composeWithArgs = (...functions) => {
// 	return (...args) => {
// 		let flag = true;
// 		let functionResult;

// 		[...functions].reverse().forEach((value) => {
// 			if (flag) {
// 				flag = false;
// 				functionResult = value(...args);
// 			} else {
// 				functionResult = value(functionResult);
// 			}
// 		});
// 		return functionResult;
// 	};
// };

// const res = composeWithArgs(add1,addAll3)(1,2,3); // => Вернет 7
// console.log(res);