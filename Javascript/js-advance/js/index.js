// js document object model(DOM)

// js DOM selector

// id selector

// document.getElementById();

// document.getElementById('head1');
// console.log(document.getElementById('head1')); // DOM node

// class selector

// document.getElementsByClassName();
// console.log(document.getElementsByClassName('clas')); // object of DOM node
// console.log(document.getElementsByClassName('clas')[0]); // DOM node

// tag selector

// document.getElementsByTagName();
// console.log(document.getElementsByTagName('h2')); // object of DOM node
// console.log(document.getElementsByTagName('h2')[0]); // DOM node

// querySelector

// document.querySelector(); // class name or tag name or id name with prefix
// console.log(document.querySelector('#head1')); // DOM node
// console.log(document.querySelector('.clas'));
// console.log(document.querySelector('h2')); // select first h2

// querySelectorAll

// document.querySelectorAll(); // class name or tag name or id name with prefix
// console.log(document.querySelectorAll('#head1')); // array of DOM node
// console.log(document.querySelectorAll('.clas'));
// console.log(document.querySelectorAll('h2'));
// console.log(document.querySelectorAll('#head1')[0]);
// console.log(document.querySelectorAll('.clas')[1]);
// console.log(document.querySelectorAll('h2')[2]);

// js DOM textcontent except inputs

// document.getElementById('head1').textcontent
// document.getElementsByTagName('h2').textcontent
// document.querySelectorAll('.clas').textcontent

// console.log(
//     document.getElementById('head1').textContent,
//     document.getElementsByTagName('h2')[2].textContent,
//     document.querySelectorAll('.clas')[1].textContent
// );

// document.getElementById('head1').textContent = 'hello';
// document.getElementsByTagName('h2')[2].textContent = 'bye';
// document.querySelectorAll('.clas')[1].textContent = 'harchi';

// js DOM value inputs

// document.querySelector('input').value
// console.log(document.querySelector('input').value); // empty string
// document.querySelector('input').value = 'hello'


// js DOM innerText and innerHtml

// document.querySelector('p').innerText;
// console.log(document.querySelector('p').innerText);
// document.querySelector('p').innerText = 'hello'

// document.querySelector('p').innerHTML;
// console.log(document.querySelector('p').innerHTML);
// document.querySelector('p').innerHTML = 'hi <b>hello</b>'


// js DOM event

// inline

// function f1() {
//     console.log('click');
// }

//external

// click contextmenu

// document.querySelector('#head1').addEventListener('click', function () {
//     console.log('click');
// });
// document.querySelector('#head1').addEventListener('contextmenu', function () {
//     console.log('contextmenu');
// });
// document.querySelector('#head1').addEventListener('dblclick', function () {
//     console.log('dblclick');
// });
// document.querySelector('#head1').addEventListener('mousedown', function () {
//     console.log('mousedown');
// });
// document.querySelector('#head1').addEventListener('mouseup', function () {
//     console.log('mouseup');
// });
// document.querySelector('#head1').addEventListener('mouseenter', function () {
//     console.log('mouseenter');
// // });
// document.querySelector('#head1').addEventListener('mouseout', function () {
//     console.log('mouseout');
// });
// document.querySelector('#head1').addEventListener('mouseover', function () {
//     console.log('mouseover');
// });
// document.querySelector('#head1').addEventListener('mouseleave', function () {
//     console.log('mouseleave');
// });
// document.addEventListener('keydown', function () {
//     console.log('keydown');
// });
// document.addEventListener('keyup', function () {
//     console.log('keyup');
// });
// document.addEventListener('keypress', function () {
//     console.log('keypress');
// });

// compare mouseenter mouseout mouseover mouseleave

// document.querySelector('#compare').addEventListener('mouseenter',function(){
//     console.log('mouseenter');
// }); // hover in all area one time trige
// document.querySelector('#compare').addEventListener('mouseover',function(){
//     console.log('mouseover');
// }); hover in all area for any childes one time trige

// function in event

// decleration

// document.querySelector('#head1').addEventListener('click', clickHanlde);

// function clickHanlde() {
//     console.log('click');
// }

// expresion

// document.querySelector('#head1').addEventListener('click', function () {
//     console.log('click');
// });

// arrow

// document.querySelector('#head1').addEventListener('click', () => {
//     console.log('click');
// });

// js DOM style

// document.querySelector('h2').style.color = 'white';
// document.querySelector('h2').style.backgroundColor = 'black';

// js DOM attribute

// document.querySelector('h2').title='harchi';

// Optimization ِDOM

// const headingOne = document.querySelector('h2');
// headingOne.title = 'optimization harchi';

// js DOM class

// document.querySelector('h2').classList;
// console.log(document.querySelector('h2').classList);
// console.log(document.querySelector('.clas').classList);
// document.querySelector('h2').classList.add('harchi');
// document.querySelector('h2').classList.remove('harchi');

// document.querySelector('h2').addEventListener('click',function(){
//     document.querySelector('h2').classList.toggle('harchi');
// });

// setInterval and setTimeOut and clearInterval and clearTimeOut

// setInterval(() => {
//     console.log('hello');
// }, 1000);

// setTimeout(() => {
//     console.log('bye');
// }, 5000);


// const key = setInterval(() => {
//     console.log('hello');
// }, 1000);

// setTimeout(() => {
//     clearInterval(key)
// }, 5000);

// const key = setTimeout(() => {
//     console.log('hello');
// }, 3000);

// setInterval(()=>{
//     clearTimeout(key);
// },2000);

// js time

// const time = new Date();

// console.log(time.toLocaleTimeString());
// console.log(time.getDate());
// console.log(time.getDay());
// console.log(time.getFullYear());
// console.log(time.getHours());
// console.log(time.getMilliseconds());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getTime());
// console.log(time.getTimezoneOffset());
// console.log(time.getUTCDate());
// console.log(time.getUTCDay());
// // ...