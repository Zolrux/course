"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm = prompt("Один из последних просмотренных фильмов?"),
  rating = +prompt("Насколько оцените его?");

personalMovieDB.movies[lastFilm] = rating;

console.log(personalMovieDB);
