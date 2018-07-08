// Show header text
document.addEventListener('DOMContentLoaded', function() {
	setTimeout(function() {
		const headerText = document.querySelector('.camlab-story');
		const courses = document.querySelector('.camlab-courses');
		headerText.classList.remove('hidden-text');
		headerText.classList.add('slideLeft');
		courses.classList.remove('hidden-text');
		courses.classList.add('slideRight');
	}, 1000);
});

// Responsive navbar
mobileNav();


function mobileNav() {
	const hamburger = document.querySelector('.hamburger-menu');
	const nav = document.querySelector('.nav-content');
	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('animated');
		nav.classList.toggle('display-none');
		nav.classList.toggle('slideLeft');
		closeNav();
	});
}

function closeNav() {
	const hamburger = document.querySelector('.hamburger-menu');
	const nav = document.querySelector('.nav-content');
	let links = document.querySelectorAll('.closeNavJs');
	links = Array.from(links);
	links.forEach(function(elem) {
		elem.addEventListener('click', function() {
			hamburger.classList.remove('animated');
			nav.classList.remove('slideLeft');
			nav.classList.add('display-none');
		});
	});
}

// Dropdown menu
openDrop();

function openDrop() {
	const drop = document.querySelector('.dropdown');
	const content = document.querySelector('.content');
	drop.addEventListener('click', function() {
		content.classList.toggle('open');
		content.classList.toggle('slideDown');
	});
}

// Courses

showInfo();

function showInfo() {
	let corsi = document.querySelectorAll('.getInfoJs');
	corsi = Array.from(corsi);
	let info = document.querySelectorAll('.showInfoJs');
	info = Array.from(info);
	corsi.forEach(function(el, index) {
		el.addEventListener('click', function() {
			info[index].classList.toggle('display-none');
			info[index].classList.toggle('slideDown');
		});
	});
}
