'use strict';

document.body.innerHTML = 'Подождите, идет получение данных с сервера';

// GET request

// let counter = 0;


// fetch('https://jsonplaceholder.typicode.com/photos')
// 	.then(response => {
// 		if (response.ok) {
// 			return response.json();
// 		} else {
// 			document.body.innerHTML = 'Что-то пошло не так...';
// 		}
// 	})
// 	.then(json => {
// 		document.body.innerHTML = '';
// 		for (const {url} of json) {
// 			if (counter < 50) {
// 				const img = document.createElement('img');
// 				img.src = url;
// 				img.style.width = '100px';
// 				document.body.append(img);
// 				counter++;
// 			}
// 		}
// 	})
// 	.catch(error => {
// 		document.body.innerHTML = 'Что-то пошло не так...';
// 	});


// POST request

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({userId: 16, title: 'How are you?'}),
	headers: {
		'Content-type': 'application/json'
	}
})
	.then(response => {
		if (response.ok) {
			document.body.innerHTML = 'Ответ от сервера успешно получен!';
			return response.json();
		}
	})
	.then(json => {
		document.body.innerHTML += JSON.stringify(json);
	})
	.catch(error => {
		document.body.innerHTML = 'Что-то пошло не так...';
	});
