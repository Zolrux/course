"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (personalMovieDB.numberOfFilms == "" || personalMovieDB.numberOfFilms == null || isNaN(personalMovieDB.numberOfFilms)) {
      personalMovieDB.numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },
  rememberMyFilms: function () {
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
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
      if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == "") {
        i--;
      }
    }
    personalMovieDB.genres.forEach((genre, index) => {
      console.log(`Любимый жанр #${index + 1} - это ${genre}`);
    });
  },
  showMyDB: function () {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
  typeOfViewers: function () {
    if (personalMovieDB.count < 10 && personalMovieDB.count > -1) {
      console.log("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель!");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка!");
    }
  },
  toggleVisibleMyDB: function () {
    if (!personalMovieDB.privat) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};

personalMovieDB.start();
// personalMovieDB.rememberMyFilms();

// personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();

// personalMovieDB.typeOfViewers();

personalMovieDB.toggleVisibleMyDB();
