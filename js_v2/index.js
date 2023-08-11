'use strict';

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject) {
// 	setTimeout(() => {
// 		console.log('Подготовка данных...');

// 		const product = {
// 			name: 'TV',
// 			price: 2000
// 		};

// 		resolve(product);

// 	}, 2000);
// });

// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'order';
// 			// reject();
// 			resolve(product);
// 		}, 2000);
// 	});
// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then((data) => {
// 	console.log(data);
// }).catch(() => {
// 	console.error('Произошла ошибка');
// }).finally(() => {
// 	console.log('Finally');
// });

// const test = (time) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve(), time);
// 	});
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Когда все передаваемые промисы в массиве были выполнены

// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log('All');
// });

// Когда один из передаваемых промисов
// выполнился самым первым

// Promise.race([test(1000), test(2000)]).then(() => {
// 	console.log('All');
// });

// const promise = new Promise((resolve, reject) => {
// 	const NUMBER = 5;
// 	console.log('Hello async code!');
// 	resolve(NUMBER);
// }).finally(() => {console.log('final');}).then(number => console.log(number));

// console.log('Hello sync code!');

// function generateNumber(str) {
// 	return new Promise((resolve, reject) => {
// 		const parsed = parseInt(str);
// 		if (isNaN(parsed)) reject('Not a number');
// 		else resolve(parsed);
// 	});
// }
// function printNumber(str) {
// 	generateNumber(str)
// 		.then((value) => {
// 			if (value === 4) throw 'Несчастливое число';
// 			return value * value;
// 		})
// 		.then((finalValue) => console.log(`Result: ${finalValue}`))
// 		.catch((error) => console.log(error));
// }
// printNumber('rty'); // Not a number
// printNumber('3'); // Result: 9
// printNumber('4'); // Несчастливое число
// printNumber('5'); // Result: 25

// function generateNumber2(str) {
// 	return new Promise((resolve, reject) => {
// 		const parsed = parseInt(str);
// 		if (isNaN(parsed)) reject('Not a number');
// 		else resolve(parsed);
// 	});
// }
// function printNumber2(str) {
// 	generateNumber2(str)
// 		.then((value) => value * value)
// 		.then((value) => {console.log(`Result: ${value}`); return 5;})
// 		.catch((error) => {
// 			console.log(error);
// 			return 0;
// 		})
// 		.then((value) => console.log('Status code:', value));
// }
// printNumber2('ert3'); // Not a number
// printNumber2('4'); // Not a number
// Status code: 0

// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, 'Hello');
// });
// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 500, 'World');
// });
// Promise.all([promise1, promise2]).then((values) => {
// 	const [promise1data, promise2data] = values;
// 	console.log(promise1data, promise2data); // Hello World
// });

// let urls = [
// 	'https://api.github.com/users/iliakan',
// 	'https://api.github.com/users/remy',
// 	'https://api.github.com/', // тут намеренная ошибка в url (uses)
// ];

// Promise.allSettled(urls.map((url) => fetch(url))).then((results) =>
// 	results.forEach((result) => {
// 		if (result.status == 'fulfilled') {
// 			console.log('fulfilled:', result);
// 		}
// 		if (result.status == 'rejected') {
// 			console.log('rejected:', result);
// 		}
// 	})
// );

let urlsForAnyMethod = [
	'https://chupapi/users/iliakan',
	'https://api.com/users/remy',
	'https://api.github.com/users/zolrux', // тут намеренная ошибка в url (uses)
];

Promise.any(urlsForAnyMethod.map(url => fetch(url)))
	.then(result => {
		console.log(result);
	});