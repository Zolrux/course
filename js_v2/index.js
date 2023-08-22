'use strict';

const delay = ms => {
	return new Promise(r => setTimeout(() => r(), ms));
};

// delay(2000).then(() => console.log('2 seconds'));

const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
// 	console.log('Fetch todo started...');
// 	return delay(2000)
// 		.then(() => fetch(url))
// 		.then(response => response.json());
// }

// fetchTodos()
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch(error => console.error(error));

function sum(a) {
	const now = Date.parse(new Date());
	for (let i = 0; i < 1_000_000_000; i++) {
		a += i;
	}
	const endTime = Date.parse(new Date());
	const resSeconds =  (endTime - now) / 1000;
	console.log('Fn time result: ',resSeconds);
	return a;
}

async function fetchAsyncTodos() {
	console.log('Fetch todo started...');
	try {
		await delay(2000);
		const getSum = await sum(5);
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log('Data:', data);
			console.log('sum: ', getSum);
		}
	} catch (e) {
		console.error(e);
	} finally {
		console.log('Fetch todo finally ended!');
	}
}

fetchAsyncTodos();

function sum2(a, b) {
	return a + b;
}

async function calculate() {
	return await sum2(5, 6);
}

console.log(calculate());