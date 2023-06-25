function fib(countNumbers) {
	if (typeof countNumbers !== 'number' || countNumbers === 0 || !Number.isInteger(countNumbers)) {
		return '';
	}
	let str = '';
	let currentNumber = 0,
		prevNumber = 1;
	
	if (countNumbers === 1) {
		return '0';
	}
	for (let i = 0; i < countNumbers; i++) {
		if (i === 0) {
			str += '0 ';
			continue;
		}
		let temp = currentNumber;
		currentNumber += prevNumber;
		prevNumber = temp;
		if (i !== countNumbers - 1) {
			str += `${currentNumber} `;
		} else {
			str += currentNumber;
		}
	}
	return str;
}

const result = fib(10);
console.log(result);