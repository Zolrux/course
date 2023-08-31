'use strict';

// const person = {
// 	name: 'Alex',
// 	age: 25,

// 	get userAge() {
// 		return this.age;
// 	},

// 	set userAge(num) {
// 		this.age = num;
// 	}
// };

// console.log(person.userAge = 30);

let user = {
	get name() {
		return this._name;
	},

	set name(value) {
		if (value.length < 4) {
			console.log('Имя слишком короткое, должно быть более 4 символов');
			return;
		}
		this._name = value;
	},
};

console.log(user.name); // Pete
user.name = 'Pete';

user.name = ''; // Имя слишком короткое...