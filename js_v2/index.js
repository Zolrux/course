const lines = 6;
let result = '';
let counter = 1;

for (let i = 0; i < lines; i++) {
	for (let j = 0; j < lines - i - 1; j++) {
		result += ' ';
	}
	if (counter < lines * 2) {
		for (let k = 0; k < counter; k++) {
			result += '*';
		}
		if (!(counter === lines * 2 - 1)) {
			result += '\n';
		}
		counter += 2;
	}
}

//      *
//     ***
// 	*****
//   *******
//  *********
// ***********

console.log(result);