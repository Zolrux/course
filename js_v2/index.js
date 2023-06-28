'use strict';

const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5,
		},
		{
			width: 15,
			length: 7,
		},
		{
			width: 20,
			length: 5,
		},
		{
			width: 8,
			length: 10,
		},
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000,
};

function isBudgetEnough(data) {
	const { shops, height, moneyPer1m3, budget } = data;
	let totalSquare = 0;
	shops.forEach((obj) => {
		const { width, length } = obj;
		totalSquare += length * width;
	});
	const totalVolume = totalSquare * height;
	if (budget - totalVolume * moneyPer1m3 >= 0) {
		return 'Бюджета достаточно';
	} else {
		return 'Бюджета недостаточно';
	}
}

const result = isBudgetEnough(shoppingMallData);
console.log(result);