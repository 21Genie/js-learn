'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0; i < 1; i++) {
	const a = prompt('Один из последних просмотренных фильмов?',''),
		b = prompt('На сколько оцените его?','');

	if (a != null && b != null && a != ''  && b != '') {
		personalMovieDB['movies'][a] = b;
	} else {
		i--;
	}

}

if (personalMovieDB.count < 10) {
	alert('Вы просмотрели мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	alert('Вы обычный зритель');
} else if (personalMovieDB.count > 31) {
	alert('Вы киноман');
} else {
	alert('404');
}