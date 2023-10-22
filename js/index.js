const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const lastWatchMovie = prompt('Один из последних просмотренных фильмов?','Logan'),
	pointMovie = prompt('На сколько оцените его?','9.9');

personalMovieDB['movies'][lastWatchMovie] = pointMovie;
console.log(personalMovieDB);