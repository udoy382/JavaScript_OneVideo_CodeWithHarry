console.log("hello world");

// Single Line Comment

/*
Multine
Line
Comment
*/

// JavaScript Variables ~

var numer1 = 34;
var number2 = 56;

// console.log(numer1 + number2);

// Data Types in JavaScript ~

var num1 = 455;
var num2 = 56.76;

var str1 = "This is a string";
var str2 = "This is also a string";

var marks = {
  ravi: 34,
  udoy: 55,
  harry: 99.97,
};

var a = true;
var b = false;

// var und = undefined;
var und;

var n = null;

// console.log(marks)
// console.log(a)
// console.log(undefined)
// console.log(und)
// console.log(n)

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data type: Arrays and Objects
*/

// var arr = [1,2,3, "string", 4,5]

// console.log(arr[3])
// console.log(arr)

// Operators in JavaScript ~
// Arithmetic Operators ~

var a = 100;
var b = 10;

// console.log("The value of a + b is", a+b)
// console.log("The value of a + b is", a-b)
// console.log("The value of a + b is", a*b)
// console.log("The value of a + b is", a/b)

// Assigment Operators ~

var c = b;
c += 2;
c -= 2;
c *= 2;
c /= 2;

// console.log(c)

// Comparison Operators ~

var x = 34;
var y = 56;

// console.log(x == y)
// console.log(x >= y)
// console.log(x <= y)
// console.log(x < y)
// console.log(x > y)

// Logical Operators ~

// logical and ~
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)

// logical or ~
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// logical not ~
// console.log(!false)
// console.log(!true)

// Function in JavaScript ~
// DRY = Do not repeat yourself

function avg(a, b) {
  c = (a + b) / 2;
  return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);

// console.log(c1, c2)

// Conditionals in JavaScript ~

var age = 31;

// Single if statement ~

// if (age > 8){
//     console.log('You are not a kid');
// }

// if - else statement ~

// if (age > 8){
//     console.log('You are not a kid');
// }
// else{
//     console.log('You are a kid');

// }

// if-else Ladder ~

/*
if(age > 32){
    console.log('You are not a kid')
}
else if(age >26){
    console.log('Bachhe nahi rahe')
}
else if(age >22){
    console.log('Yes bachhe nahi rahe')
}
else if(age >18){
    console.log('18 bachhe nahi rahe')
}
else{
    console.log('Bachhe rahe')
}
*/

/*
function drink(age){
    if(age > 18){
        console.log("You can drink.");
    }
    else{
        console.log("You are a kid, you cannot dirnk");
    }
}

output = drink(105)
console.log(output)
*/

// Loops in JavaScript ~

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
/*
console.log(arr)

for (var i = 0; i<arr.length;i++){
    console.log(arr[i])
}

arr.forEach(function(element){
    console.log(element)
})
*/

let j = 0;
// const ac = 0;

// ac = ac + 1;

// while(j<arr.length){
//     console.log(arr[j])
//     j++;
// }

// do {
//   console.log(arr[j]);
// } while (j < arr.length);

// Array Methods ~

let myArr = ["Fan", "Camera", 34, null, true];

// console.log(myArr.length);
// myArr.pop()
// myArr.push("Udoy")
// myArr.shift()
// myArr.unshift("Udoy")
// myArr.toString()
// console.log(myArr)

// let d = [1,5,3,6,8,3]
// d.sort()
// console.log(d)

// String Methods in JavaScript~

let myLovelyString = "Udoy is a good boy good";

// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(0,4))
// console.log(myLovelyString.replace("Udoy", "Harry"))

// Dates and dates methods in JavaScript ~

/*
let myDate = new Date();
console.log(myDate)
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
*/

// JavaScript DOM (Document Object Model) Manipulation ~

/*
let elem = document.getElementById('click');
console.log(elem)

let elemclass = document.getElementsByClassName('container')
console.log(elem)

// elemclass[0].style.background = 'yellow'
elemclass[0].classList.add('bg-primary')
elemclass[0].classList.add('text-success')
// elemclass[0].classList.remove('text-success')

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

tn = document.getElementsByTagName('div')
console.log(tn)

createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement)
// removeChild(element); ----------> removes an element 

// Selecting using Query ~

sel = document.querySelector('.container')
console.log(sel)

sel = document.querySelectorAll('.container')
console.log(sel)
*/


// Events in JavaScript ~


// function clicked(){
//     console.log("The button was clicked")
// }

// window.onload = function(){
//     console.log("The window was loaded")
// }

// container.addEventListener('click', function(){
//     console.log('Clickd on container')
// })

// container.addEventListener('click', function(){
//     document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked </b>"
//     console.log('Clickd on container')
// })

// container.addEventListener('mouseover', function(){
//     console.log('mouse on container')
// })

// container.addEventListener('mouseover', function(){
//     console.log('mouse on container')
// })

// container.addEventListener('mouseout', function(){
//     console.log('mouse out of container')
// })

// let prevHTML = document.querySelectorAll('.container')[0].innerHTML;

// container.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[0].innerHTML = prevHTML
//     console.log('mouse up when clicked on container')
// })

// container.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked </b>"
//     console.log('mouse down when clicked on container')
// })



// Arrow Function ~

// function summm(a, b){
//     return a + b;
// }

// summm = (a, b)=>{
//     return a + b
// }


// SetTimeout and setinterval ~

// logKaro = ()=>{
//     console.log('I am your log')
// }

// setTimeout(logKaro, 2000);
// setInterval(logKaro, 2000)


// clearINterval/clearTimeout to cancel setInterval/setTimeout ~
// clr = setInterval(logKaro, 2000)


// Local Storage in JavaScript ~

// localStorage.setItem("name", "Udoy")
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()

// JSON ~

// obj = {name: "Udoy", length: 1, a: {this: 'tha\\"t'}}
// jso = JSON.stringify(obj)
// console.log(typeof jso);
// console.log(jso)
// console.log(jso)


// Template literals - Backticks ~

a = 34;
console.log(`this is my ${a}`)