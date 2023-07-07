'use strict';

function showThis(a, b) {
	console.log(this);
	function sum() {
		console.log(this);
		return a + b;
	}

	console.log(sum());
}

// showThis(4, 5);

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };

// obj.sum();

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log(`Hello ${this.name}`);
// 	};
// }

// let ivan = new User('ivan', 23);

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
// 	return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция: this - Window, но если use-strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручаня привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
	console.log(this);
	// this.style.backgroundColor = 'red';
});

const obj = {
	num: 5,
	sayNumber: function () {
		const say = () => {
			console.log(this.num);
		};
		say();
	},
};

// obj.sayNumber();

const double = (a) => a * 2;

// console.log(double(4));

function Animal(type, legs) {
	this.type = type;
	this.legs = legs;
	this.logInfo = function () {
		console.log(this === myCat); // => false
		console.log('The ' + this.type + ' has ' + this.legs + ' legs');
	};
}
const myCat = new Animal('Cat', 4);
// logs "The undefined has undefined legs"
// or throws a TypeError, in strict mode
// setTimeout(myCat.logInfo, 1000);

const numbers = {
	array: [3, 5, 10],
	getNumbers: function () {
		return this.array;
	},
};
// Create a bound function
const boundGetNumbers = numbers.getNumbers.bind(numbers);
console.log(boundGetNumbers()); // => [3, 5, 10]
// Extract method from object
var simpleGetNumbers = numbers.getNumbers.bind(numbers);
// console.log(simpleGetNumbers); // => undefined or throws an error in strict mode