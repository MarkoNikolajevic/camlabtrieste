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
const drenante = document.querySelector('#drenante');
const info = document.querySelector('.info');
drenante.addEventListener('click', function() {
	info.classList.toggle('slideDown');
	info.classList.toggle('display-none');
});
