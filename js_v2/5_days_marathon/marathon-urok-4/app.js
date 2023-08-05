const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseleave', () => removeColor(square));

	board.append(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0px 0px 2px ${color}, 0px 0px 30px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = '0px 0px 2px #000';
}

function getRandomColor() {
	const RGB_LENGTH = 3; // rgb([0-255], [0-255], [0-255])
	let color = 'rgb($, $, $)';

	for (let i = 0; i < RGB_LENGTH; i++) {
		const getRandomRGBColorNumber = Math.floor(Math.random() * 255);
		color = color.replace('$', getRandomRGBColorNumber);
	}
	return color;
}