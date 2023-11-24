'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...'
		]
	};
  
	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		addInput = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('[type="checkbox"]');
	
	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		let newFilms = addInput.value;
		const favorite = checkbox.checked;
    
		
		if (newFilms) {

			if (newFilms.length > 21) {
				newFilms = `${newFilms.slice(0, 22)}...`;
			}

			if (favorite) {
				console.log('Добавляем любимый фильм');
			}

			movieDB.movies.push(newFilms);
			sortArray(movieDB.movies);
			createMovieList(movieDB.movies, movieList);
		}

		event.target.reset();
	});
  
	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};
  
	const makeChanges = () => {
		genre.textContent = 'драма';
		poster.style.backgroundImage = 'url("img/bg.jpg")';
	};

	
  
	const sortArray = (arr) => {
		arr.sort();
	};

  
	function createMovieList(films, parent) {
		parent.innerHTML = '';
		sortArray(films);

		films.forEach((film, i) => {
			parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				createMovieList(films, parent);
			});
		});
	}
  
	deleteAdv(adv);
	makeChanges();
	sortArray(movieDB.movies);
	createMovieList(movieDB.movies, movieList);
});