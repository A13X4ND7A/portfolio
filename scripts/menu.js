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
const navLinks = document.querySelectorAll('a.nav-link');

Array.from(navLinks).forEach((link) => {
	link.addEventListener('click', function () {
		if (burger.classList.contains('x') && nav.classList.contains('active')) {
			nav.classList.remove('active');
			burger.classList.remove('x');
			link.classList.add('nav-link-active');
		}
	});
});

window.addEventListener('scroll', function () {
	if (burger.classList.contains('x') && nav.classList.contains('active')) {
		nav.classList.remove('active');
		burger.classList.remove('x');
		// link.classList.add('nav-link-active');
	}
});

//observe the page to see which section is in view and change the nav depending upon this.
const navMenu = document.getElementById('nav-menu');
const skills = document.getElementById('skills');
const sections = document.querySelectorAll('section');

const options = {
	root: null,
	rootMargin: '0% 0% -10% 0%',
	threshold: 0.1,
};
const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			navLinks.forEach((navLink) => {
				var navLinkId = navLink.hash;
				navLink.classList.add('nav-link-active');
				console.log(entry.target.id);
				console.log(navLinkId);
				if (navLinkId != '#' + entry.target.id) {
					navLink.classList.remove('nav-link-active');
				}
			});
		}
	});
}, options);

sections.forEach((section) => {
	observer.observe(section);
});

const bgOptions = {
	root: null,
	rootMargin: '-15% 0% -15% 0%',
	threshold: 0.25,
};
const addBgObserver = new IntersectionObserver(function (entries, addBgObserver) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			navMenu.classList.add('addBg');
		} else {
			navMenu.classList.remove('addBg');
		}
	});
}, bgOptions);

addBgObserver.observe(home);

//
