'use strict';

// const box = document.querySelector('.box');

// let observer = new MutationObserver(mutationRecords => {
// 	console.log(mutationRecords);
// });

// observer.observe(box, {
// 	childList: true
// });

// observer.disconnect();

//========================================================================================================================================================

// const observer = new ResizeObserver(entries => {
// 	console.log(entries);
// });

// observer.observe(box);

//========================================================================================================================================================

// const options = {
// 	threshold: 0.5,
// 	// rootMargin: '100px'
// };

// const observer = new IntersectionObserver(entries => {
// 	console.log(entries);
// }, options);

// observer.observe(box);

//========================================================================================================================================================

// Практика с Intersection

let cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		entry.target.classList.toggle('showed', entry.isIntersecting);
		if (entry.isIntersecting) observer.unobserve(entry.target);

		const lastCard = document.querySelector('.card:last-child');
		if (entry.target === lastCard && entry.isIntersecting) {
			cards = document.querySelectorAll('.card');
			createCards(cards.length);
		}
	});
}, {
	threshold: 0.1,
});

cards.forEach(card => {
	observer.observe(card);
});

function createCards(startIndex) {
	const wrapper = document.querySelector('.wrapper');
	for (let i = startIndex; i < startIndex + 10; i++) {
		const card = document.createElement('div');
		card.classList.add('card');
		card.textContent = `Я карточка ${i + 1}`;
		observer.observe(card);
		wrapper.append(card);
	}
}