const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
const scrollLinks = document.querySelectorAll('.scroll-links');
const closeBtn = document.getElementById('close-btn');

navToggle.addEventListener('click', () => {
	navLinks.classList.add('show-links');
	// navLinkBtn.classList.toggle('hidden');
	closeBtn.classList.remove('hidden');
});

function removeActive() {
	scrollLinks.forEach((link) => {
		link.classList.remove('active');
	});
}

scrollLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		navLinks.classList.remove('show-links');
		removeActive();
		e.target.classList.add('active');
		closeBtn.classList.add('hidden');
	});
});

closeBtn.addEventListener('click', () => {
	navLinks.classList.remove('show-links');
	closeBtn.classList.add('hidden');
});
