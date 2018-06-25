// Show header text
document.addEventListener('DOMContentLoaded', function() {
	setTimeout(function() {
		const headerText = document.querySelector('.camlab-story');
		headerText.classList.remove('hidden-text');
		headerText.classList.add('fadeIn');
	}, 1000);
});
