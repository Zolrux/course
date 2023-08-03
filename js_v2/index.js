'use strict';

const person = {
	name: 'Alex',
	phone: '+380111111',
	parents: {
		mom: 'Olga',
		dad: 'Mike',
	},
	// fn: function() {
	// 	console.log('hello');
	// }
};

// console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Tanya';

console.log(person);
console.log(clone);