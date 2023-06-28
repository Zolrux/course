'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
	const groups = [];
	let endIndex = 0;
	let countTeams = parseInt(arr.length / 3);
	let studentsWithoutGroup = 'Оставшиеся студенты: ';

	arr.sort();

	// Формируем группу из 3-х человек
	for (let i = 0; i < countTeams; i++) {
		const group = arr.slice(endIndex, endIndex + 3);
		groups.push(group);
		endIndex += 3;
	}

	// Добавляем информацию про оставшихся студентов (если такие имеются)
	if (endIndex < arr.length) {
		const remainingStudents = arr.slice(endIndex).join(', ');
		studentsWithoutGroup += remainingStudents;
		groups.push(studentsWithoutGroup);
	} else {
		studentsWithoutGroup += '-';
		groups.push(studentsWithoutGroup);
	}

	return groups;
}

const result = sortStudentsByGroups(students);
console.log(result);