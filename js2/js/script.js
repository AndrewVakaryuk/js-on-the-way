/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
//console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genre: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const lastSeenFilm = prompt("Один из последних просмотренных фильмов?", ""),
    estimateFilm = +prompt("На сколько оцените его? 1-10", "");

  if (lastSeenFilm != 0 && estimateFilm != 0 && lastSeenFilm != '' && estimateFilm != '' && lastSeenFilm.length < 50) {
    personalMovieDB.movies[lastSeenFilm] = estimateFilm;
  } else {
    console.log('Error');
    i--;
  }
}

 if (personalMovieDB.count < 10) {
   alert('Просмотрено довольно мало фильмов');
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   alert('Вы классический зритель');
 } else if (personalMovieDB.count >= 30) {
   alert('Вы киноман');
 } else {
   alert('Error');
 }



console.log(personalMovieDB);