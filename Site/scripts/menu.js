//HAMBURGER MENU//
const burger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

//Burger menu click to toggle the nav and the burger menu
burger.onclick = () => {
	if (burger.classList.contains('x') && nav.classList.contains('active')) {
		nav.classList.remove('active');
		burger.classList.remove('x');
	} else {
		burger.classList.add('x');
		nav.classList.add('active');
	}
};

//close the nav after menu has been chosen and change color of burger menu
const navLinks = document.querySelectorAll('.nav-link');
Array.from(navLinks).forEach((link) => {
	link.addEventListener('click', function () {
		if (burger.classList.contains('x') && nav.classList.contains('active')) {
			nav.classList.remove('active');
			burger.classList.remove('x');
		}
	});
});

//when scrolling to the lighter section, add a background to the menu bar
