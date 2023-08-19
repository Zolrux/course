'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
// 	return name.length < 5;
// });

// console.log(shortNames);

// map

// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

// every/some // Возвращают true / false

// const some = [4, 5, 7];

// console.log(some.some(item => typeof item === 'number'));
// console.log(some.some(Number));

// console.log(some.every(item => typeof item === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const result = arr.reduce((sum, current) => sum + current, 3);

// console.log(result);

// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(result);

const obj = {
	ivan: 'person',
	ann: 'person',
	dog: 'animal',
	cat: 'animal'
};

const newArr = Object.entries(obj)
	.filter(item => item[1] === 'person')
	.map(item => item[0]);

console.log(newArr);

// Метод fromEntries преобразовывает обратно в объект!!!

let prices = {
	banana: 1,
	orange: 2,
	meat: 4,
};
 
let doublePrices = Object.fromEntries(
	// преобразовать в массив, затем map, затем fromEntries обратно объект
	Object.entries(prices).map(([key, value]) => [key, value * 2])
);
 
console.log(doublePrices); // 8