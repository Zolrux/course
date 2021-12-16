"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}

function rememberMyFilms() {
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
}

rememberMyFilms();

// showMyDB();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номеро ${i + 1}`);
  }
}

writeYourGenres();

showMyDB();

function typeOfViewers() {
  if (personalMovieDB.count < 10 && personalMovieDB.count > -1) {
    console.log("Просмотрено довольно мало фильмов!");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель!");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка!");
  }
}

typeOfViewers();
