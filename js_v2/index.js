'use strict';

//  function pow(x, n) {
//  	let result = 1;
//  	for (let i = 0; i < n; i++) {
//  		result *= x;
//  	}
//  	return result;
//  }

function pow(x, n) {
	if (n === 1) {
		return x;
	} else {
		return x * pow(x, n - 1);
	}
}

console.log(pow(2, 1));
console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));

let students = {
	js: [
		{
			name: 'John',
			progress: 100,
		},
		{
			name: 'Ivan',
			progress: 60,
		},
	],
	html: {
		basic: [
			{
				name: 'Peter',
				progress: 20,
			},
			{
				name: 'Ann',
				progress: 18,
			},
		],

		pro: [
			{
				name: 'Sam',
				progress: 10,
			},
		],

		semi: {
			students: [
				{
					name: 'test',
					progress: 100,
				},
			],
		},
	},
};

function getTotalProgressByIteration(data) {
	let total = 0;
	let students = 0;

	for (let course of Object.values(data)) {
		if (Array.isArray(course)) {
			students += course.length;

			for (let i = 0; i < course.length; i++) {
				total += course[i].progress;
			}
		} else {
			for (let subCourse of Object.values(course)) {
				students += subCourse.length;

				for (let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress;
				}
			}
		}
	}

	return total / students;
}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
	if (Array.isArray(data)) {
		let total = 0;

		for (let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}

		return [total, data.length];
	} else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const subDataArr = getTotalProgressByRecursion(subData);
			total[0] += subDataArr[0];
			total[1] += subDataArr[1];
		}

		return total;
	}
}

const res = getTotalProgressByRecursion(students);

console.log(res[0] / res[1]);

function fibonacci(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

console.log(fibonacci(3));

function sumOfDigits(number) {
	if (number < 10) {
		return 1;
	} else {
		return 1 + Math.floor(sumOfDigits(number / 10));
	}
}

const num1 = sumOfDigits(33);
3;
const num2 = sumOfDigits(1333);
4;

console.log(num1, num2);

// ========================================================================================================================================================

/* 
Найдите наибольший общий делитель двух положительных чисел
Напишите программу на JavaScript, чтобы найти наибольший общий делитель 
(НОД) двух положительных чисел.
*/

let counter = 1;
let resultNOD = 0;

function findNOD(a, b) {
	const endIteration = Math.min(a, b);
	if (counter <= endIteration) {
		const boolValue = a % counter === 0 && b % counter === 0;
		if (boolValue) {
			resultNOD = counter;
		}
		if (counter < endIteration) {
			counter++;
			findNOD(a, b);
		}
	}
	if (counter === endIteration) {
		return resultNOD;
	}
}

console.log(findNOD(28, 15));

//========================================================================================================================================================

let gcd = function (a, b) {
	if (!b) {
		return a;
	}

	return gcd(b, a % b);
};
console.log(gcd(125, 75));

// ХОРОШИЙ ВАРИАНТ

// ========================================================================================================================================================

/* 
Получите целые числа в диапазоне
Напишите программу на JavaScript, чтобы получить целые числа в диапазоне (x, y).

Пример: диапазон (10, 18)
Ожидаемый результат: [11,12,13,14,15,16,17]
*/

const result = [];
function getNumbersRange(min, max) {
	if (min + 1 < max) {
		result.push(min + 1);
		return getNumbersRange(min + 1, max);
	}
}

getNumbersRange(10, 18);
console.log(result);

// ========================================================================================================================================================

/* 
Вычислите сумму массива целых чисел
Напишите программу на JavaScript для вычисления суммы массива целых чисел.

Пример: let array = [2, 3, 4, 5, 6, 7]
Ожидаемый результат: 27
*/

function getSumFromArr(arr, i = 0) {
	if (i < arr.length) {
		return arr[i] + getSumFromArr(arr, i + 1);
	} else {
		return 0;
	}
}

let array = [2, 3, 4, 5, 6, 7];
const sum = getSumFromArr(array);
console.log(sum);

// ========================================================================================================================================================

/* 
Вычислите экспоненту числа
Напишите программу на JavaScript для вычисления экспоненты числа.

Примечание: Показатель числа говорит о том, 
сколько раз базовое число используется в качестве множителя. 
8 2 = 8 x 8 = 64. Здесь 8 - основание, а 2 - показатель степени.
*/

function getPowNumber(num, n) {
	if (n <= 1) return 1;
	return num * getPowNumber(num, n - 1);
}

console.log(getPowNumber(5, 3));

// ========================================================================================================================================================

/* 
Получить первые n чисел Фибоначчи
Напишите программу на JavaScript, чтобы получить первые n чисел Фибоначчи.

Примечание: Последовательность Фибоначчи - это последовательность чисел: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,... 
Каждое последующее число является суммой двух предыдущих.
*/

function fib(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fib(n - 1) + fib(n - 2);
}

for (let i = 0; i < 13; i++) {
	console.log(fib(i));
}

// ========================================================================================================================================================

/* 
7. Проверьте, четное число или нет
Напишите программу на JavaScript, чтобы проверить, четное число или нет.
*/

function isNumberEven(number) {
	number = Math.abs(number);
	if (number === 0) {
		return true;
	} else if (number === 1) {
		return false;
	}
	return isNumberEven(number - 2);
}

console.log(isNumberEven(-96));