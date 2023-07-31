const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const gradientsColor = [
	'linear-gradient(90deg, #ff85e4 0%, #229efd 179.25%)',
	'linear-gradient(90deg, #209cff 0%, #68e0cf 100%)',
	'linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)'
];

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);


placeholders.forEach((placeholder, index) => {
	placeholder.addEventListener('dragover', dragover);
	placeholder.addEventListener('dragenter', dragenter);
	placeholder.addEventListener('dragleave', (event) => dragleave(event, index));
	placeholder.addEventListener('drop', (event) => dragdrop(event, index));
});


function dragstart(event) {
	event.target.classList.add('hold');
	item.style = '';
	setTimeout(() => {
		event.target.classList.add('hide');
	}, 0);
}

function dragend(event, index) {
	item.style.background = gradientsColor[index];
	event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
	event.preventDefault();
}

function dragenter(event) {
	event.target.classList.add('hovered');
}

function dragleave(event, index) {
	event.target.classList.remove('hovered');
	item.style.background = gradientsColor[index];
}

function dragdrop(event, index) {
	event.target.classList.remove('hovered');
	event.target.append(item);
	item.style.background = gradientsColor[index];
}