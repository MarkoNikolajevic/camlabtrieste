// Show header text
document.addEventListener('DOMContentLoaded', function() {
	setTimeout(function() {
		const headerText = document.querySelector('.camlab-story');
		headerText.classList.remove('hidden-text');
		headerText.classList.add('fadeIn');
	}, 1000);
});

// Responsive navbar
mobileNav();


function mobileNav() {
	const hamburger = document.querySelector('.hamburger-menu');
	const nav = document.querySelector('.nav-mobile');
	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('animated');
		nav.classList.toggle('display-none');
		closeNav();
	});
}

function closeNav() {
	const hamburger = document.querySelector('.hamburger-menu');
	const nav = document.querySelector('.nav-mobile');
	let links = document.querySelectorAll('.nav-mobile-link');
	links = Array.from(links);
	links.forEach(function(elem) {
		elem.addEventListener('click', function() {
			hamburger.classList.remove('animated');
			nav.classList.add('display-none');
		});
	});
}
