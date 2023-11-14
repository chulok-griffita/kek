
// Задание 1 PR 1
// let map = new Map;
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');
// map.set(arr3, 'data3');

// console.log(map.get(arr1));
// console.log(map.get(arr2));
// console.log(map.get(arr3));

// Задание 2

// let map = new Map;
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');
// map.set(arr3, 'data3');

// for (let elem of map) {
// 	console.log(elem);
// }

// for (let [key, elem] of map) {
// 	console.log(key,elem);

// }

// Задание 3

// let elems = document.querySelectorAll('input');
// let map = new Map;
// let i = 1;
// for (let elem of elems) {
// 	map.set(elem, i++);
// }
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {

// 	});
// }
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.value += map.get(this);
// 	});
// }

// 1 задание 2 практическая

// let set = new Set([1, 2, 2,4,4,4,5,]);

// console.log(set);

// 2 задание

// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(2);
// console.log(set);


// 3 задание(1)
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// console.log(set.has(3));
// console.log(set.has(4));

// 3 задание(2)

// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// let s=0;
// for (let elem of set) {
//     s = s+elem;
// }
// console.log(s);

//Задание 4
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// let arr = [...set];
// let arr2 = Array.from(set);
//  console.log(arr);
//  console.log(arr2);

//Задание 5
// let arr = [1, 2, 3];
// let set = new Set(arr);
// console.log(set);

//Задание 6

// let arr = [1, 2, 3, 1, 3, 4];=
// function funk(arr){
// let set = new Set(arr);
// let res = [...new Set(arr)];
// console.log(res);
// }
// funk(arr);


// Задание 7
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let set = new Set;
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		set.add(this);
// 	});
// }
// button.addEventListener('click', function() {
// 	for (let elem of set) {
// 		elem.textContent = elem.textContent + '!';
// 	}
// });



// практическая 3 задание 1

// let elems = document.querySelectorAll('p');
// console.log(elems);
// console.log(elems[0]);
// console.log(elems[1]);
// console.log(elems[2]);
// console.log(elems.length);
// for (let elem of elems) {
// 	console.log(elem);
// }

//  задание 2
// let elems = document.querySelectorAll('p');
// console.log(elems);
// console.log(elems.slice(1, 3));

// задание 3
// let test = [
// 	[1, 2, 3],
// 	{a: 1, b: 2, c: 3},
// 	[3, 4, 5],
// 	{x: 1, y: 2, z: 3},
// ];

//   for (let element of test) {
//     if (Array.isArray(element)) {
//       console.log("Элемент  массив");
//     } else {
//       console.log("Элемент не  массив");
//     }
//   }

// Задание 4
// let elems = document.querySelectorAll('p');
// let arr = [];

// for (let elem of elems) {
// 	arr.push(elem);
// }
// console.log(arr)
// let arr2 = [...elems];
// console.log(arr2)
// let arr3 = Array.from(elems);
// console.log(arr3)

// Задание 5
// let elems = document.getElementsByTagName('p').children;
// console.log(elems);

//задание 5(2)
// let parent = document.querySelector('div');
// let p = document.createElement('p');
// parent.append(p);

// console.log(parent.childNodes);




// задание 1 пр 4
// ответ массивы, коллекции и все что можно перебрать

// задание 2
// let arr = [1, 2, 3];
// let func = arr[Symbol.iterator];
// console.log(func);


// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// let func1 = map[Symbol.iterator];
// console.log(func1);


// let elems = document.querySelectorAll('p');

// let func2 = elems[Symbol.iterator];
// console.log(func2);


// задание 3

// let NodeList = new Map();
// NodeList.set('a', 1);
// NodeList.set('b', 2);
// NodeList.set('c', 3);
// let iter = NodeList[Symbol.iterator]();
// console.log( iter.next() );
// console.log( iter.next() );
// console.log( iter.next() );

// задание 4
// function *func() {
// 	yield 5;
// 	yield 4;
// 	yield 3;
//     yield 2;
//     yield 1;
// }
// let iter = func();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// задание 5

// function* func(a) {
//     for (let i = 1; i <= 3; i++) {
//         yield i;
//         if (a <= 0) {
//             a = a - 1;
//         }
//     }
// }

// let iter = func(5);
// console.log(iter.next());


// задание 6

// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	[Symbol.iterator]: function* () {
// 		for (let key in this) {
// 			yield this[key];
// 		}
// 	}
// };

// for (let elem of obj) {
// 	console.log(elem);
// }


// задание 7

// let set = new Set;

// set.add('a', 1);
// set.add('b', 2);
// set.add('c', 3);
// let iter = set.values();
// for (let elem of iter) {
// 	console.log(elem);
// }

// задание 8

// let map = new Map;
// let arr = ['a', 'b', 'c'];
// let map1 = arr.entries();
// for (let entry of map1) {
// 	console.log(entry);
// };
// for (let [key, value] of map1) {
// 	console.log(key);
// 	console.log(value);
// };

// задание 9
// let num = 1234;
// let sum = 0;
// let arr = [...String(num)].map(Number);
// for(let i =0; i<arr.length;i++)
// {
// 	 sum = sum+ arr[i];
// }
// console.log(sum);


// задание 9
// let elems = document.querySelectorAll('td');

// for (let [num, elem] of elems.entries()) {
// 	elem.textContent += num;
// }

// задание 10
// let elems = document.querySelectorAll('input');
// for (let [value, elem] of elems.entries()) {
// 	console.log(value, elem);
// }
// for (let [value, {id}] of elems.entries()){
// 	console.log( id);
// }




// задания 1 пр 5
// let arr = [1, 2, 3, 'a', 'b', 'c'];
// let json = '[1, 2, 3, "a", "b", "c"]';

// задание 2
// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;
// let obj = JSON.parse(json);
// let sum = Object.values(obj).reduce((acc,curr)=>acc+curr,0);

// console.log(sum);


// задание 2.3
// let json = '["user1","user2","user3","user4","user5"]';
// let arr = JSON.parse(json);
// arr[1] = "kakaska";
// let updatedJson = JSON.stringify(arr);
// console.log(updatedJson);

// задание 1 пр 6

// localStorage.setItem('key1', 1);
// localStorage.setItem('key2', 2);
// localStorage.setItem('key3', 3);
// let str1 = Number(localStorage.getItem('key1'));
// let str2 = Number(localStorage.getItem('key2'));
// let str3 = Number(localStorage.getItem('key3'));
// console.log(str1+str2+str3); 

// задание 2
// localStorage.setItem('последнийЗаход', new Date().getTime());
// let backMoment = localStorage.getItem('последнийЗаход');
// let ThisMoment = new Date().getTime();
// let lastMoment = ThisMoment - backMoment;
// let lastSecond = Math.floor(backMoment / 1000);
// console.log('Предыдущий заход :', lastSecond);

// задание 3

// let shetchik = localStorage.getItem('shetchik');
// if (shetchik === null || isNaN(shetchik)) {
//     shetchik = 0;
// } else {

//     shetchik = parseInt(shetchik) + 1;
// }
// localStorage.setItem('shetchik', shetchik);
// console.log('Счетчик обновлений страницы:', shetchik);

// задание 4

// let shetchik = localStorage.getItem('shetchik');
// if (shetchik === null || isNaN(shetchik)||shetchik >=10) {
//     shetchik = 0;
// }else {
//     shetchik = parseInt(shetchik) + 1;
// }
// localStorage.setItem('shetchik', shetchik);
// console.log('Счетчик обновлений страницы:', shetchik);


// задание 5
// localStorage.clear();


// задание 6
// let num = localStorage.length;
// console.log(num);

// задание 7
// let key = localStorage.key(0);
// let val = localStorage.getItem(key);
// console.log(val);

// задание 8
// let but = document.querySelector('#but');
// but.addEventListener('click', function() {

// for (let i = 0; i < localStorage.length; i++) {
// 	let key = localStorage.key(i);
// 	let val = localStorage.getItem(key);
	
// 	console.log(val);
// }    
// });

// задание 9
// let but = document.querySelector('#but');
// but.addEventListener('click', function() {

// for (let i = 0; i < localStorage.length; i++) {
//     let keys = Object.keys(localStorage);
// 	console.log(keys[i]);
// }    
// });


// задание 10

// function saveInputs() {
//     let input1Value = document.getElementById('input1').value;
//     let input2Value = document.getElementById('input2').value;
//     let input3Value = document.getElementById('input3').value;
//     let inputsArray = [input1Value, input2Value, input3Value];
//     let inputsString = JSON.stringify(inputsArray);
//     localStorage.setItem('inputs', inputsString);
//   }

//   заданеи 10.2
// if (localStorage.getItem('users')) {
//     var users = JSON.parse(localStorage.getItem('users'));
//   } else {
//     var users = [
// 	{
// 		surn: 'surn1',
// 		name: 'name1',
// 		age: 31,
// 	},
// 	{
// 		surn: 'surn2',
// 		name: 'name2',
// 		age: 32,
// 	},
// 	{
// 		surn: 'surn',
// 		name: 'name3',
// 		age: 33,
// 	},
// ];

//   }
//   function addUser() {
//     let surname = document.getElementById('surnameInput').value;
//     let name = document.getElementById('nameInput').value;
//     let age = document.getElementById('ageInput').value;
//     let newUser = {
//       surname: surname,
//       name: name,
//       age: age
//     };
//     users.push(newUser);
//     let usersString = JSON.stringify(users);
//     localStorage.setItem('users', usersString);
//   }





// пр7 задание 1
// let str = 'aba aca aea abba adca abea';
// console.log(str.replace(/a..a/g,'!')); 

// пр7 задание 2
// let str = 'aa aba abba abbba abca abea';
// let res = str.replace(/ab*a/g, '!');
// console.log(res)

// пр7 задание 3
// let str = 'ab abab abab abababab abea';
// let res = str.replace(/(ab)+/g, '!');
// console.log(res);

// пр7 задание 4
// let str = 'a.a aba aea';
// let res = str.replace(/a\.a/g, '!');
// console.log(res)

// пр7 задание 5
// let str = 'aa aba abba abbba abbbba abbbbba';
// let res = str.replace(/ab{0,3}a/g, '!');
// console.log(res);

// пр7 задание 6
// let str = 'aba accca azzza wwwwa';
// let res = str.replace(/a.+?a/g, '!');
// console.log(res);

// пр7 задание 7
// let str = 'a1a a22a a333a a4444a a55555a aba aca';
// let res = str.replace(/a\d+?a/g, '!');
// console.log(res);

// пр7 задание 8
// let str = 'a1a a3a a7a a9a aba';
// let res = str.replace(/a[3-6]?a/g, '!');
// console.log(res);

// пр7 задание 9
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.replace(/a[a-z0-9]+?a/g, '!');
// console.log(res);

// пр7 задание 10
// let str = 'x2z xbz x1z xСz x0z';
// let res = str.replace(/x[^2-7]z/g, '!');
// console.log(res);

// пр7 задание 11
// let str = 'x2z xbz x1z xСz x0z';
// let res = str.replace(/x[^a-z1-5]+z/g, '!');
// console.log(res);

// пр7 задание 12
// let str = 'wйw wяw wёw wqw';
// let res = str.replace(/w[а-яё]+w/g, '!');
// console.log(res);


// пр7 задание 13
// let str = 'xaz x.z x3z x@z x$z xrz';
// let res = str.replace(/x[^@.$]z/g, '!');
// console.log(res);

// пр7 задание 14
// let str = 'xaz x1z xAz x.z x@z';
// let res = str.replace(/x[0-9\.]z/g, '!');
// console.log(res);

// пр7 задание 15
// let str = 'x[]z x[[]]z x()z';
// let res = str.replace(/x\[*\]*z/g, '!');
// console.log(res);

// пр7 задание 16
// let str = '^xx axx ^zz bkk @ss';
// let res = str.replace(/[@^]+[a-z]+[a-z]/g, '!');
// console.log(res);

// пр7 задание 17
// let str = 'xaz xBz xcz x-z x@z';
// let res = str.replace(/x[a-zA-Z-]z/g,'!');
// console.log(res);
 
//задание 18 
// let str = 'abc def xyz'; 
// let res = str.replace(/^abc/g, '!'); 
// console.log(res); 
 
//задание 19 
// let str = `    abc 
//     def 
//     ghi 
//     jkl`; 
// let res = str.replace(/^/gm, '!'); 
// console.log(res); 
 
//задание 20 
// let str = ` 
// abc
// def
// ghi
// jkl`; 
// let res = str.replace(/$/gm, '!'); 
// console.log(res); 
 
//задание 21 
// let str = 'aeeea aeea aea axa axxa axxxa '; 
// let res = str.replace(/a(e*|x*)a/g, '!'); 
// console.log(res); 

// задание 22
// let str = 'a aa aaa aaaa aaaa';
// let reg = /a+/;
// let res = str.replace(reg, '!');
// console.log(res);

// задание 23
// console.log(/https:|http:/.test('https:'));

// задание 24
// console.log(/^\d{1,12}$/.test('131'));


// задание 25
// console.log( /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test('30:23:04'));

// задание 26
// console.log(/^[a-zA-Z0-9]+([-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/.test('dhfi.gui'));

// задание 27
// let str = 'aaa 123 bbb';
// let res = str.search(/123/);
// console.log(res);

// задание 28 
// let str = '31.12.2025'; 
// let res = str.match(/(\d+).(\d+).(\d+)/); 
// console.log(res[0]); 
// console.log(res[1]); 
// console.log(res[2]); 
// console.log(res[3]);

// задание 29//////////////////////////////////////////////
// let str = 'a1b c34d x567z';
// let sum = 0;
// let numbers = str.match(/\d+/g);
// for(let i = 0; i < numbers.length; i++){
//     sum += parseInt(numbers[i]);
// }
// console.log(sum);

// задание 30
// let str = '12:37 15:48 17:59';
// let matches = str.matchAll(/(\d{2}):(\d{2})/g);
// for (let match of matches) {
// 	console.log(match); 
// }

// задание 31////////////////////////////////////////////
let str = '12:37 15:48 17:59';
let reg = /(\d{2}:\d{2})/g;
reg.lastIndex = 5;
let res = reg.exec(str)
console.log(res);


// задание 32
// let str = '12 34 56 78';
// let res = str.replace(/(\d)(\d)/g, '$2$1');
// console.log(res);

// задание 33
// let str = '123 456 789';
// let res = str.replace(/(\d)(\d)(\d)/g, '$3$2$1');
// console.log(res);

// задание 34
// let str = 'sss site.ru zzz site.com kkk';
// let regex = /(\w+\.\w{2,3})/g;
// let replacedStr = str.replace(regex, '<a href="http://$1">$1</a>');
// console.log(replacedStr);

// задание 35
// let str = 'a aa aaa aaaa aaaaa';
// let res = str.replace(/(\w)\1+/g, '!');
// console.log(res);

// задание 36
// let str = '12:59:59';
// let reg = /(?<hour>\d{2}):(?<second>\d{2}):(?<milisecond>\d{2})/;
// let res = str.match(reg);
// console.log(res.groups);

// задание 37
// let str = '<a href="" class="eee" id="zzz">';
// let regex = /\w+(?=\s*=\s*"[^"]*")/g;
// let attributeNames = str.match(regex);
// console.log(attributeNames);

// задание 39
// let str = 'x.y xay xby';
// let reg = /x\.y/;
// let res = str.replace(reg, '!');
// let reg1 = new RegExp('\\w+'); // работает
// let res1 = str.match(reg);




