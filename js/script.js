window.addEventListener('DOMContentLoaded', function() {

	// Tabs
    
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
        
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}
    
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});


    
	// Timer

	const deadline = '2024-12-31';

	function getTimeRemaining(endtime) {
		const t = Date.parse(deadline) - Date.parse(new Date());
        
		const days = Math.floor((t / (1000 * 60 * 60 * 24)));
		const hours = Math.floor(((t / (1000 * 60 * 60)) % 24));
		const minutes = Math.floor((t / (1000 * 60)) % 60);
		const seconds = Math.floor((t / (1000)) % 60);

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
        
		const timer = document.querySelector(selector);
		const days = timer.querySelector('#days');
		const hours = timer.querySelector('#hours');
		const minutes = timer.querySelector('#minutes');
		const seconds = timer.querySelector('#seconds');
		const timeInterval = setInterval(updateClock, 1000);
		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.textContent = getZero(t.days);
			hours.textContent = getZero(t.hours);
			minutes.textContent = getZero(t.minutes);
			seconds.textContent = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				days.textContent = 0;
				hours.textContent = 0;
				minutes.textContent = 0;
				seconds.textContent = 0;
			}
		}
	}

	setClock('.timer', deadline);

	// modal

	const modalTrigger = document.querySelectorAll('[data-modal]');
	const modal = document.querySelector('.modal');
	const modalCloseBtn = document.querySelector('[data-close]');

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', openModal);
	});

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	function closeModal() {
		modal.classList.remove('show');
		modal.classList.add('hide');
		document.body.style.overflow = '';
	}

	modalCloseBtn.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});

	// Добавление setTimeOut для modal
	const modalTimerId = setTimeout(openModal, 3000);

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
});
