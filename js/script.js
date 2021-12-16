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

"slfks".length < 10 ? console.log("Да") : console.log("Нет");

switch ("sfjk;d".length) {
  case 10:
    console.log("Десять!");
    break;
  case 6:
    console.log("Шесть!");
    break;
  default:
    console.log("Иди нахуй, я не ебу");
    break;
}
