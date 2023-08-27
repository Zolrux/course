'use strict';

// localStorage.setItem('number', 5);
// localStorage.getItem('number');

// localStorage.removeItem('number');
// localStorage.clear();

// console.log(localStorage.getItem('number'));

// Cookies

// document.cookie = 'name=Kostya';
// document.cookie = 'surname=Kirov';

// document.cookie = 'fullname=' + encodeURIComponent('Kostya Kirov') + '; max-age=10;';
// ИЛИ
// const date = new Date(Date.now() + 1000 * 10).toUTCString();
// document.cookie = 'name=Kostya; expires=' + date;

// document.cookie = 'setHttp=true; httpOnly';

// document.cookie = 'name=Kostya; secure';

// Practice

const form = document.forms[0];
const textarea = form[0];
const button = form[1];

if (localStorage.getItem('textareaValue')) {
	textarea.value = localStorage.getItem('textareaValue');
}

textarea.addEventListener('input', function (e) {
	localStorage.setItem('textareaValue', textarea.value);
});

button.addEventListener('click', function (e) {
	if (localStorage.getItem('textareaValue')) {
		localStorage.removeItem('textareaValue');
	}
});