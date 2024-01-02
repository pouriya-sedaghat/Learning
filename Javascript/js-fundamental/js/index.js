// alert('Using External Js');

// js varivale

// in ES5 var
// in ES6 ... var let const

// var number = 10;
// let text = 'hello';
// const boolean = false;

// console.log(number, text, boolean);

// var number;
// let text;

// console.log(number, text);

// number = 20;
// text = 'bye';

// console.log(number, text, boolean);

// const harchi1 = {}
// const harchi2 = []
// const harchi3 = function (a) {
//     console.log(a);
// }

// console.log(harchi1);
// console.log(harchi2);
// console.log(harchi3);

// harchi1.name = 'harchi1';
// harchi2.push('harchi2');

// console.log(harchi1);
// console.log(harchi2);
// console.log(harchi3('harchi3'));

// js data type

// var harchi = 10; // number
// console.log(typeof harchi);
// var harchi = 'hello'; // string
// console.log(typeof harchi);
// var harchi = false; // boolean
// console.log(typeof harchi);
// var harchi = []; // object
// console.log(typeof harchi);
// var harchi = {}; // object
// console.log(typeof harchi);
// var harchi = undefined; // undefined
// console.log(typeof harchi);
// var harchi = null; // object :)
// console.log(typeof harchi);
// var harchi = function () { }; // function :)
// console.log(typeof harchi);
// var harchi = '(◕‿◕)'; // symbol
// console.log(typeof harchi);
// var harchi = 121351451521151; // big int : more than 22bit
// console.log(typeof harchi);

// operators

// arithmetic operator

// let num1 = 2;
// let num2 = 3;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);

// assignment operator

// let harchi = 12;
// console.log(harchi); //assignment
// console.log(++harchi); //increment
// console.log(--harchi); //descrement

// console.log(++harchi); //prefix 13
// console.log(--harchi); //prefix 12
// console.log(harchi++); //postfix 12
// console.log(harchi--); //postfix 13

// console.log(harchi += 5);
// console.log(harchi -= 5);
// console.log(harchi *= 5);
// console.log(harchi /= 5);
// console.log(harchi **= 5);
// console.log(harchi %= 5);

// comparition operatior

// let num1 = 5;
// let num2 = '3';

// output is boolean

// console.log(num1 == num2); //false : lose equivalent
// console.log(num1 == num1); //true : lose equivalent
// console.log(num1 < num2); //false
// console.log(num1 > num2); //true
// console.log(num1 <= num2); //fale
// console.log(num1 >= num2); //true
// console.log(num1 === num2); //false : strict equivalent
// console.log(num1 === num1); //false : strict equivalent
// console.log(num1 != num2); //true : unequivalent
// console.log(num1 != num1); //true : unequivalent

// js string concatenation

// let harchi1 = 10;
// let harchi2 = '10';

// console.log(harchi1 + harchi2);
// console.log('year is' + ' ' + harchi1 + harchi2);
// console.log('year is ' + harchi1 + harchi2);

// js templatelitterals

// let harchi = 'hello';
// console.log(`${harchi} to pouriya sedaghat`);

// js scape code

// console.log('har\'chi'); // har'chi
// console.log('har\tchi'); // har chi : tab
// console.log('har\nchi'); // har chi : new line
// console.log('har\achi'); // har chi : new line

// conditional statement

// let age = 18;

// if (age > 17) {
//     console.log('hello');
// }

// if (age < 17) {
//     console.log('hello');
// } else {
//     console.log('bye');
// }

// if (age < 17) {
//     console.log('hello');
// } else if (age > 17) {
//     console.log('nemidoonm');
// } else {
//     console.log('bye');
// }

// if (age < 17) {
//     console.log('hello');
// } else if (age > 20) {
//     console.log('nemidoonm');
// } else {
//     console.log('bye');
// }

// type conversion

// let num1 = 10;
// let num2 = '10';
// let num3 = '10a';

// console.log(Number(num2)); //Numer()
// console.log(Number(num3)); //NaN
// console.log(typeof Number(num3)); //number
// console.log(String(num1)); //String()
// console.log(Boolean(num1), Boolean(num2), Boolean(num3)); //Boolean()
// console.log(Object(num1)); //Object()
// console.log(Array(num1)); //Array()
// console.log(Function(num1)); //Function()

// type coercion

// let num1 = 20;
// let num2 = '30';

// console.log(num1 + num2);

// js truthy & falsy

// let a;

// a = 0;
// a = undefined;
// a = null;
// a = '';
// a = "";
// a = ``;
// a = NaN;
// a = document.all;

// if (a) {
//     console.log(false);
// }

// js prompt

// prompt('Enter Your Name :');
// prompt('Enter Your Name :', 'pouriya');
// let name = prompt('Enter Your Name :', 'pouriya');

// console.log(name);

// logical operator

// let bool1 = false;
// let bool2 = true;

// console.log(bool1 && bool2); // and
// console.log(bool1 || bool2); // or
// console.log(!bool1, !bool2); // invet not

// ternary operator

// let age = 18;

// age >= 18 ? console.log('hast') : console.log('nist');

// short if

// let hast = age >= 18;
// console.log(hast);

// js switch

// let day = 'شنبه';

// switch (day) {
//     case 'شنبه': {
//         console.log('شنبه');
//         break;
//     }
//     case 'یکشنبه': {
//         console.log('یکشنبه');
//         break;
//     }
//     case 'دوشنبه': {
//         console.log('دوشنبه');
//         break;
//     }
//     case 'سه شنبه': {
//         console.log('سه شنبه');
//         break;
//     }
//     case 'چهارشنبه': {
//         console.log('چهارشنبه');
//         break;
//     }
//     case 'پنجشنبه': {
//         console.log('پنجشنبه');
//         break;
//     }
//     case 'جمعه': {
//         console.log('جمعه');
//         break;
//     }
//     default: {
//         console.log('invalid');
//     }
// }

// js usestrict

// 'usestrict';

// function

// declaration function

// function sayHi() {
//     console.log('hello');
// }

// sayHi();

// function sayHi(say) {
//     console.log(say);
// }

// sayHi('hello');

// function sayHi(say, name) {
//     console.log(say + name);
// }

// sayHi('hello, ', 'pouriya');

// console.log(sayHi); // function
// console.log(sayHi('hello, ', 'pouriya')); // undefined

// function sayHi(say, name) {
//     return say + name;
// }

// console.log(sayHi('hello, ', 'pouriya')); // hello, pouriya

// console.log(sayHi()); // undefined

// expresion function or anonymous function or regular function

// const sayHi = function () {
//     console.log('hello');
// }

// sayHi();

// const sayHi = function (first, last, age) {
//     console.log(`iam ${first} ${last} my age is ${age}`);
// }

// sayHi('pouriya', 'sedaghat', 23);

// const sayHi = function (first, last, age) {
//     const personal = `iam ${first} ${last} my age is ${age}`
//     console.log(personal);
//     return personal;
// }

// console.log(sayHi);
// console.log(sayHi('pouriya', 'sedaghat', 23));

// arrow function

// const sayHi = () => {
//     console.log('hello');
// }

// sayHi();

// const sayHi = (say) => {
//     console.log('hello ' + say);
// }

// sayHi('to js');

// const sayHi = (say) => {

//     const title = 'hello ' + say;
//     console.log(title);
//     return title
// }

// console.log(sayHi);
// console.log(sayHi('to js'));

// const sayHi = say => say;
// const sayHi = say => console.log(say);
// const sayHi = say => { return say};

// console.log(sayHi('hi'));

// js array

// const arr = [];

// console.log(arr);

// const fruitArr = ['apple', 'banana', 'peach', 'kiwi'];
// const users = [{ name: 'ali', id: 1 }, { name: 'pouriya', id: 2 }];

// console.log(fruitArr);
// console.log(fruitArr[0]);
// console.log(users);

// const fruitArr = ['apple', 'banana', 'peach', 'kiwi'];

// fruitArr.unshift('honey');
// fruitArr.shift();
// fruitArr.push('honey');
// fruitArr.pop('honey');
// fruitArr.splice(1, 1);
// fruitArr.splice(1, 1, 'khiyar');


// console.log(fruitArr);


// console.log(fruitArr.shift());
// console.log(fruitArr.pop());
// console.log(fruitArr.splice(1, 2));

// js object

// const obj = {};

// console.log(obj);

// const user = { first: 'pouriya', last: 'sedaghat', id: 1 }; // object property

// console.log(user);
// console.log(user.first);
// console.log(user['first']);

// const user = { first: 'pouriya', last: 'sedaghat', say() { console.log('hello'); }, id: 1 }; // object method
// const user = { first: 'pouriya', last: 'sedaghat', say: function () { console.log('hello'); }, id: 1 };
// const user = { first: 'pouriya', last: 'sedaghat', say: () => { console.log('hello'); }, id: 1 };

// console.log(user);
// console.log(user.say());

// const user = { first: 'pouriya', last: 'sedaghat', say() { console.log(`hello, iam ${this.first} ${this.last}`); }, id: 1 };
// const user = { first: 'pouriya', last: 'sedaghat', say: function () { console.log(`hello, iam ${this.first} ${this.last}`); }, id: 1 };
// const user = { first: 'pouriya', last: 'sedaghat', say: () => { console.log(`hello, iam ${this.first} ${this.last}`); }, id: 1 };

// console.log(user);
// console.log(user.say());

// js loop

// for loop

// for (let i = 0; i < 5; i++) {
//     console.log('hello');
// }

// const arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i <= arr.length - 1; i++) {
//     console.log('data: ' + arr[i] + ' index : ', i);
// }

// while(1){
//     console.log('hello');
// }

// let sum = 0;

// while (1) {
//     let input = Number(prompt('Enter Yor Number ( zero is end) :', 0));
//     if (input === 0) {
//         console.log(sum);
//         break;
//     }
//     sum += input;
// }

// while (1) {
//     let input = Number(prompt('Enter Yor Number ( zero is end) :', 0));
//     if (input === 0) continue;
//     console.log(input);
// }

// do {
// console.log('hello');
// } while (0)

// js debuging

// debugger tab