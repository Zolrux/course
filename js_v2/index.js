'use strict';

// new RegExp('pattern', flags);
// /pattern/f

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

// \d - ищем все цифры
// \w - ищем все буквы
// \s - ищем пробелы
// \D - не числа
// \W - не буквы
// . - любой символ кроме \n

// ФЛАГИ
// i - игнорирует регистр
// g - глобальный поиск
// m - мультистрочный поиск

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const path = prompt('Password');

// console.log(path.replace(/\|/g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));

// const string = 'my name is R2D2';

// console.log(string.match(/\D/ig));

// console.log('gd26dg'.match(/\d/g));

// Practice

// let str = '+7(903)-123-45-67';
// let regexp1 = /\d/g;
// let regexp2 = /\D/g;

// console.log(str.match(regexp1));
// console.log(str.replace(regexp2, ''));

// const regExp = /love/gmi;
// const regExp2 = new RegExp('love', 'igm');

// function checkSubStr(str, subStr) {
// 	const regExp = new RegExp(subStr);
// 	return regExp.test(str);
// }

// console.log(checkSubStr('i love you', 'love'));

// const str = `1 котенок
// 2 котенок
// 3 котенок`;

// console.log(str.match(/\d/gm));

// console.log('I love love you'.match(/love/));
// console.log('I love love you'.replace(/love/g, 'like'));
// console.log(/love/.test('I like you'));

// console.log(
// 	/./.test('\t')
// );

// Якоря
// ^ - начало строки
// $ - конец строки

// console.log(
// 	/\bJava\b/.test('Java!')
// );

// console.log(
// 	/\^\$\./.test('^$.')
// );

// const myReg = new RegExp('\\^\\$\\.', 'i');

// console.log(
// 	myReg.test('^$.')
// );

// console.log(
// 	/[а-яё0-9]/.test('hello20world')
// );

// console.log(
// 	/\d+/.test('ghdgjdjsjfj')
// );

// console.log(
// 	'I "love" or "like" you'.match(/".+?"/g)
// );

// console.log(
// 	/(go){3,}/.test('gogo')
// );

// console.log(
// 	'I love you'.match(/(lo)(ve)/g)
// );

// console.log(
// 	'Elena Litvinova'.replace(/(?:\w+) (\w+)/, '$1')
// );

// console.log(
// 	/html|js|css/.test('I love js')
// );

// const input1 = '     ';
// console.log(
// 	/\S/.test(input1)
// );

// const input2 = '  I love you!      ';
// console.log(
// 	input2.replace(/^\s+|\s+$/g, '')
// );

// const input3 = 'I   love   you!';
// console.log(
// 	input3.replace(/\s+/g, ' ')
// );

// const input4 = 'https://sfgs.wjghg.com';
// console.log(
// 	/^http(s)?:\/\/(\w+\.)+\w+$/g.test(input4)
// );

// 1)

// const str1 = 'hello world!';
// const regexp1 = /^[A-ZА-Я]/;
// console.log(regexp1.test(str1));

// 2) 

// const str2 = '4446 2562 1626 0296';
// const regexp2 = /^\d{4}(-|\s)?\d{4}(-|\s)?\d{4}(-|\s)?\d{4}$/g;
// console.log(regexp2.test(str2));

// 3)

// const str3 = 'kirov1607@gmail.com';
// const regexp3 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,6})+$/gi;
// console.log(regexp3.test(str3));

// 4)

// const str4 = '01 01 2015';
// const regexp4 = /^(0[1-9]|[1-2]\d?|3[0-1]?)(\s|\.|\/)(0[1-9]|[1-9][0-2]?)(\s|\.|\/)\d{4}/g;
// console.log(str4.match(regexp4));

// 5)

// const str5 = '     HEy!   HOw are you?  ';
// const regexp5 = /^\s+|\s$/ig;
// console.log(str5.replace(regexp5, ''));

// 6)

// const str6 = 'Hello world  How are you';

// function wordCount(str) {
// 	let counter = 0;
// 	str = str.replace(/\s{2,}/g, ' ');
// 	str.replace(/\w+/g, function (a) {
// 		counter++;
// 	});
// 	return counter;
// }

// console.log(wordCount(str6));

// 7)

// function checkIP(ip) {
// 	// return ip.match(/^(0|[1-9]\d?|1\d{2}|2[0-5]{2})\.(0|[1-9]\d?|1\d{2}|2[0-5]{2})\.(0|[1-9]\d?|1\d{2}|2[0-5]{2})\.(0|[1-9]\d?|1\d{2}|2[0-5]{2})$/g);
// 	return /^(0|[1-9]\d?|1\d{2}|2[0-5]{2})\.(0|[1-9]\d?|1\d{2}|2[0-5]{2})\.(0|[1-9]\d?|1\d{2}|2[0-5]{2})\.(0|[1-9]\d?|1\d{2}|2[0-5]{2})$/g.test(ip);
// }

// console.log(checkIP('198.156.23.5'));
// console.log(checkIP('172.16.279.1'));

// 8)

// const str8 = 'JavaScript validation with regular expression!';

// function countGlasnieLetters(str) {
// 	// str = str.replace(/[аоуэыяёеюи]/gi, function (a) {
// 	// 	counter++;
// 	// });
// 	return str.match(/[аоуэыяёеюиaeiou]/gi).length;
// }

// console.log(countGlasnieLetters(str8));

// const str = 'Завтрак в 99:99 в комнате 123:456';
// console.log(
// 	str.match(/\b\d\d:\d\d\b/g)
// );

// console.log( 'Завтрак в 09:00. Ужин в 21-30'.match(/\d\d[-:]\d\d/g) ); // 09:00, 21-30

// console.log( 'Привет!... Как. дела?.....'.match(/\.{3,}/g) ); // ..., .....

// let s = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678';

// console.log( s.match(/#[a-f\d]{6}\b/ig) );  // #121212,#AA00ef

// let regexp = /<!--.*?-->/gs;

// let str = `... <!-- My -- comment
//  test --> ..  <!----> ..
// `;

// console.log( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'

// let regexp = /<[^>]+?>/g;

// let str = '<> <a href="/"> <input type="radio" checked> <b>';

// console.log( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'

// let str = '<span class="my">';

// let regexp = /<(([a-z]+)\s*([^>]*))>/g;
// console.log(str.match(regexp));
// console.log(/(go)+ (\w+)/g.test('Gogogo John!'));
// console.log('Gogogo John!'.match(/(?:go)+ (?:\w+)/i));

// Возможность назначение названия группы ?<имя>
// console.log('Hello, world!'.match(/(?<test1>\w+\b),\s(?<test2>\w+\b)/).groups);

// let regexp = /(?<start>\[\w+])(\[\w+])*(?<inner>[^[]+)(\[\/\w+])*(?<end>\[\/\w+])/gs;
// let regexp = /\[(b|url|quote|)].*?\[\/\1]/gs;

// let str1 = '..[url][b]http://ya.ru[/b][/url]..';
// let str2 = '..[url]http://ya.ru[/url]..';
// let str3 = `
// [b]привет![/b]
// [quote]
//   [url]http://ya.ru[/url]
// [/quote]`;
// console.log( str1.match(regexp) ); // [url][b]http://ya.ru[/b][/url]
// console.log( str2.match(regexp) ); // [url]http://ya.ru[/url]
// console.log( str3.match(regexp) ); // [url]http://ya.ru[/url]

// let regexp4 = /\[(b|url|quote)].*?\[\/\1]/gs;

// let str4 = `
// [b]привет![/b]
// [quote]
//   [url]http://ya.ru[/url]
// [/quote]
// `;

// console.log( str4.match(regexp4) ); // [b]привет![/b],[quote][url]http://ya.ru[/url][/quote]

let str = 'He said: "She\'ss the one!" and maybe "He\'s the second!".';
// console.log( str.match(/['"](.*?)['"]/g) ); // Не верно


console.log( str.match(/(?<quote>['"])(.*?)\k<quote>/g) ); // Верно

// ИЛИ
console.log( str.match(/(['"])(.*?)\1/ig) ); // Верно
// ?: делает группу (...) "приватной"