'use strict';

const funds = [
	{amount: -1400},
	{amount: 2400},
	{amount: -1000},
	{amount: 500},
	{amount: 10400},
	{amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
	return data.reduce((acc, {amount}) => {
		if (amount > 0) acc += amount; 
		return acc;
	}, 0);
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
	const hasSomeNegativeAmount = data.some(({amount}) => amount < 0);
	if (hasSomeNegativeAmount) {
		return data.reduce((acc, {amount}) => acc + amount, 0);
	} else {
		getPositiveIncomeAmount(data);
	}
};

console.log(getTotalIncomeAmount(funds));