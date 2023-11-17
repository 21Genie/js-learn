'use strict';


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
		}
	},
	remeberMyFilms: function() {
		for (let i = 0; i < 1; i++) {
			const a = prompt('Один из последних просмотренных фильмов?',''),
				b = prompt('На сколько оцените его?','');
  
			if (a != null && b != null && a != ''  && b != '') {
				personalMovieDB['movies'][a] = b;
			} else {
				i--;
			}
		}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			alert('Вы просмотрели мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			alert('Вы обычный зритель');
		} else if (personalMovieDB.count > 31) {
			alert('Вы киноман');
		} else {
			alert('404');
		}
	},
	showMyBD: function(hidden) {
		if (personalMovieDB.privat) {
			console.log('Аккаунт скрыт');
		} else {
			console.log(personalMovieDB);
		}
	},

	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},

	writeYoursGenres: function() {
		for (let i = 1; i <= 3; i++) {
			if (personalMovieDB.genres[i - 1] === null || personalMovieDB.genres[i - 1] === '') {
				i--;
			} else {
				personalMovieDB.genres[i - 1] = prompt(`Ваш жанр под номером ${i}`).toLocaleLowerCase();
			}
		}
		personalMovieDB.genres.sort().forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	},
};