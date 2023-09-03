'use strict';

// function User(name, age) {
// 	this.name = name;
// 	let userAge = age;
	
// 	this.say = function() {
// 		console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
// 	};

// 	this.getAge = function() {
// 		return userAge;
// 	};

// 	this.setAge = function(age) {
// 		if (typeof age === 'number' && age > 0 && age < 110) {
// 			userAge = age;
// 		} else {
// 			console.log('Недопустимое значение!');
// 		}
// 	};
// }

class User {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}

	#surname = 'Kirov';

	say = () => {
		console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
	};
	
	get age() {
		return this._age;
	}

	set age(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			this._age = age;
		} else {
			console.log('Недопустимое значение!');
		}
	}
	
	get surname() {
		return `Текущая фамилия: ${this.#surname}`;
	}

	set surname(str) {
		if (str.length > 5) {
			this.#surname = str;
		} else {
			console.log('Недопустимое значение фамилии!');
		}
	}
}

const ivan = new User('Kostya', 20);
// console.log(ivan._age);
// ivan._age = 99;
// console.log(ivan._age);
console.log(ivan.surname);
// ivan.surname = 'Lukianjanenko';
// console.log(ivan.surname);
// ivan.surname = 'Lol';
// console.log(ivan.surname);
ivan.say();