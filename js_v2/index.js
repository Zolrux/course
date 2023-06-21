let str = '';
let length = 5;

for (let i = 0; i < length; i++) {
	for (let j = 0; j < i; j++) {
		str += '*';
	}
	if (i < length - 1) {
		str += '\n';
	}
}

for (let k = length - 1; k > 0; k--) {
	str += '\n';
	for (let c = 0; c < k - 1; c++) {
		str += '*';
	}
}

console.log(str);

// *
// **
// ***
// ****
// *****
// ******
// *****
// ****
// ***
// **
// *


first: for (let i = 0; i < 3; i++) {
	console.log(`First level ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) break first;
			console.log(`Third level ${k}`);
		}
	}
}