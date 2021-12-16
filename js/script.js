"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

while (numberOfFilms == "" || numberOfFilms == null) {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let i = 0;

while (i < 2) {
  const lastFilm = prompt("Один из последних просмотренных фильмов?"),
    rating = +prompt("Насколько оцените его?");

  if (lastFilm != null && rating != null && lastFilm != "" && rating != "" && lastFilm.length < 50) {
    personalMovieDB.movies[lastFilm] = rating;
  } else {
    i--;
  }
  i++;
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10 && personalMovieDB.count > -1) {
  console.log("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель!");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка!");
}
