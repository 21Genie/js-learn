'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
	}
}


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function remeberMyFilms() {
	for (let i = 0; i < 1; i++) {
		const a = prompt('Один из последних просмотренных фильмов?',''),
			b = prompt('На сколько оцените его?','');
  
		if (a != null && b != null && a != ''  && b != '') {
			personalMovieDB['movies'][a] = b;
		} else {
			i--;
		}
  
	}
}


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Вы просмотрели мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		alert('Вы обычный зритель');
	} else if (personalMovieDB.count > 31) {
		alert('Вы киноман');
	} else {
		alert('404');
	}
} 

function showMyBD(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyBD(personalMovieDB.privat);

function writeYoursGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш жанр под номером ${i}`);
	}
}

writeYoursGenres();