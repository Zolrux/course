'use strict';

const btnTop = document.querySelector('.top');
let coeff = 0.01;

btnTop.addEventListener('click', scrollTopAnimate);

function scrollTopAnimate() {
	if (scrollY > 0) {
		console.log(coeff);
		const scrollValue = parseInt(scrollY * coeff) + 1;
		window.scrollBy(0, -scrollValue);
		coeff -= 0.00001;
		requestAnimationFrame(scrollTopAnimate);
	}
}