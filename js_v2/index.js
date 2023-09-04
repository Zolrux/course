'use strict';

// (Глобальное загрязнение)
// const app = '123'; // Ошибка, так как в lib.js есть такая переменная

const number = 1;

(function() {
	let number = 2;
	console.log(number);
	console.log(number + 3);
}());

console.log(number);

const user = (function() {
	const privat = function() {
		console.log('I am private function');
	};

	const sum = (a, b) => a + b;

	const getSumInfo = (a, b) => {
		console.log(`Сумма чисел ${a} и ${b} = ${sum(a, b)}`);
		return this;
	};

	return {
		sayHello: privat,
		getSumInfo,
		get sumTest() {
			console.log('Пример использование суммы чисел 5 и 10');
			return sum(5, 10);
		}
	};
	
}());

user.sayHello();
console.log(user.sumTest);
user.getSumInfo(5, 10);