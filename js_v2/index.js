'use strict';

// const now = new Date('2023-07-03');
// new Date.parse(now);

// console.log(now.setHours(40));
// console.log(now.setMinutes(40));
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
// 	let some = i ** 3;
// }
// let end = new Date();

// alert(`Цикл отработал за ${end - start}мс`);

// 1)
// alert(new Date(2012, 1, 20, 3, 12));

// 2)
// function getWeekDay(date) {
// 	const arr = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
// 	return arr[date.getDay()];
// switch (dt.getDay()) {
// case 0: {
// 	return 'ВС';
// }
// case 1: {
// 	return 'ПН';
// }
// case 2: {
// 	return 'ВТ';
// }
// case 3: {
// 	return 'СР';
// }
// case 4: {
// 	return 'ЧТ';
// }
// case 5: {
// 	return 'ПТ';
// }
// case 6: {
// 	return 'СБ';
// }
// }
// }

// alert(getWeekDay(new Date(2023, 6, 16)));

// 3)

// function getLocalDay(date) {
// 	if (date.getDay() === 0) {
// 		return 7;
// 	}
// 	return date.getDay();
// }

// let date = new Date(2023, 6, 3);
// alert( getLocalDay(date) );  

// 4)

// function getDateAgo(date, day) {
// 	const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - day);
// 	return newDate.getDate();

// 	/* Лучше сделать через setDate(день) */
// }

// alert( getDateAgo(new Date(2015, 0, 2), 365));

// 5)

/* function getLastDayOfMonth(year, month) {
	return new Date(year, month + 1, 0).getDate();
}

alert(getLastDayOfMonth(2020, 1)); */

// 6) 

// function getSecondsToday() {
// 	const now = Date.now();
// 	const startDate = new Date().setHours(0, 0, 0);
// 	const getTotalSeconds = Math.floor((now - startDate) / 1000);
// 	return getTotalSeconds;
// }

// console.log(getSecondsToday());

// 7)

// function getSecondsToTomorrow() {
// 	const secondsInDay = 60 * 60 * 24;
// 	const now = new Date();
// 	const timePassedHoursToSeconds = now.getHours() * 60 * 60;
// 	const timePassedMinutesToSeconds = now.getMinutes() * 60;
// 	const timePassedSeconds = now.getSeconds();
// 	const timePassedTotalSeconds = timePassedHoursToSeconds + timePassedMinutesToSeconds + timePassedSeconds;
// 	return secondsInDay - timePassedTotalSeconds;
// }

// console.log(getSecondsToTomorrow());

// 8)

function formatDate(date) {
	const getPassedTimeInSeconds = (new Date() - date) / 1000;
	if (getPassedTimeInSeconds < 1) {
		return 'прямо сейчас';
	}

	const getPassedTimeInMinutes = (new Date() - date) / 1000 / 60;
	if (getPassedTimeInMinutes < 1) {
		return `${Math.floor(getPassedTimeInMinutes * 60)} секунд назад`;
	}

	const getPassedTimeInHours = (new Date() - date) / 1000 / 60 / 60;
	if (getPassedTimeInHours < 1) {
		return `${Math.floor(getPassedTimeInHours * 60)} минут назад`;
	}

	const convertValue = value => value < 10 ? `0${value}` : value;
	const day = convertValue(date.getDate());
	const month = convertValue(date.getMonth() + 1);
	const year =  date.getFullYear();
	const hours =  convertValue(date.getHours());
	const minutes =  convertValue(date.getMinutes());
	return `${day}.${month}.${year} ${hours}:${minutes}`;
}

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));