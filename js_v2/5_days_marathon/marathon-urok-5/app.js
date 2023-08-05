const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let endTime = 0;
let timeTemplate = '';
let timerId = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
	event.preventDefault();
	screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
	if (event.target.classList.contains('time-btn')) {
		if (event.target.dataset.time !== 'custom') {
			time = parseInt(event.target.dataset.time);
		} else {
			time = +prompt('Введите количество секунд', '');
		}
		screens[1].classList.add('up');
		startGame();
	}
});

board.addEventListener('click', (event) => {
	if (event.target.classList.contains('circle')) {
		score++;
		event.target.remove();
		createRandomCircle();
	}
});

function startGame() {
	endTime = Date.parse(new Date()) + time * 1000;
	timerId = setInterval(decreaseTime, 1000);
	convertTime();
	setTime();
	createRandomCircle();
}

function decreaseTime() {
	if (time === 0) {
		finishGame();
	} else {
		--time;
		convertTime();
		setTime();
	}
}

function setTime() {
	timeEl.innerHTML = timeTemplate;
}

function finishGame() {
	timeEl.parentElement.classList.add('hide');
	board.innerHTML = `<h1>Ваш счет: <span class='primary'>${score}</span></h1>`;
	clearInterval(timerId);
}

function createRandomCircle() {
	const circle = document.createElement('div');
	const size = getRandomNumber(10, 60);
	const circleColor = getRandomColor();
	const {width, height} = board.getBoundingClientRect();
	const x = getRandomNumber(0, width - size);
	const y = getRandomNumber(0, height - size);

	circle.classList.add('circle');
	circle.style.background = circleColor;
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;

	board.append(circle);
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
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

function convertTime() {
	let minutes = Math.floor(time / 60);
	const formatTime = num => num < 10 ? `0${num}` : num;
	if (minutes > 0) {
		const nowMilliseconds = Date.parse(new Date());
		const deadlineToMilliseconds = endTime - nowMilliseconds;
		let getMinutes = Math.floor(deadlineToMilliseconds / 1000 / 60);
		let getSeconds = Math.floor(deadlineToMilliseconds / 1000 % 60);
		getMinutes = formatTime(getMinutes);
		getSeconds = formatTime(getSeconds);
		timeTemplate = `${getMinutes}:${getSeconds}`;
	} else {
		timeTemplate = `00:${formatTime(time)}`;
	}
}