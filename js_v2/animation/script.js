'use strict';

const btnPhone = document.querySelector('#iphone'),
	btnMacbook = document.querySelector('#macbook'),
	images = document.querySelectorAll('img');

let phoneAnimation;

btnPhone.addEventListener('click', (e) => {
	if (!phoneAnimation) {
		phoneAnimation = images[0].animate(
			[
				{
					transform: 'translateY(0) rotate(0deg)',
					filter: 'opacity(100%)'
				},
				{
					transform: 'translateY(100px) rotate(180deg)',
					filter: 'opacity(50%)'
				},
				{
					transform: 'translateY(-100px) rotate(270deg)',
					filter: 'opacity(75%)'
				},
				{
					transform: 'translateY(0) rotate(360deg)',
					filter: 'opacity(100%)'
				},
			],
			{
				duration: 3000,
				iterations: Infinity,
			}
		);
	} else if (phoneAnimation.playState === 'paused') {
		phoneAnimation.play();
	} else {
		phoneAnimation.pause();
	}
});

images[1].animate([
	{transform: 'translate(0, 0)'},
	{transform: 'translate(-50px, -50px)'},
	{transform: 'translate(-50px, -50px) rotate(100deg) scale(-1, -2)'},
	{transform: 'translate(0, 0) rotate(360deg) scale(1, 1)'},
], {
	duration: 5000,
	iterations: 3,
	easing: 'ease-out'
});