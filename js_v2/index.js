'use strict';

const films = [
	{
		name: 'Titanic',
		rating: 9,
	},
	{
		name: 'Die hard 5',
		rating: 5,
	},
	{
		name: 'Matrix',
		rating: 8,
	},
	{
		name: 'Some bad film',
		rating: 4,
	},
];

function showGoodFilms(arr) {
	return arr.filter(({rating}) => rating >= 8);
}

// console.log(showGoodFilms(films));

function showListOfFilms(arr) {
	return arr.reduce((prevValue, obj, index) => {
		prevValue += index < arr.length - 1  ? `${obj.name}, ` : `${obj.name}`;
		return prevValue;
	}, '');
}

// console.log(showListOfFilms(films));

function setFilmsIds(arr) {
	return arr.map((film, index) => Object.assign(film, {id: index}));
}

// console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
	return arr.every(obj => 'id' in obj);
}

// console.log(checkFilms(tranformedArray));