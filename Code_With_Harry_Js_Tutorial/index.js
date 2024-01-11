// 1. ways to print in javaScript
// console.log("Hello world");
// // alert("me");
// document.write("this is document write");

// const { type } = require("os");

// 2 . JavaScript console API
// console.log("Hello world", 5+8, "Another log");
// document.write("this is document write");
// console.warn("This is warning");
// console.error("this is error for u");

// 3. JavaScript variables
// what are variables?- containers to store data values

// Number
var num1 = 34;
var num2 = 56;
console.log(num1 + num2);

// 4. Data Type in javaScript
// String
var str1 = "This is a string";
var str2 = "this is second string";

// Objects

var marks = {
    ravi: 43,
    shubham: 78,
    Ahmad: 90.5
}
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// Undefine
// var und = undefined;
var und;
console.log(und);

// Null
var n = null;
console.log(n);
/*
 There are two types of data type
 1> primetive data type: Number, Null, String, Symbole,boolean, undefine
 2> Referrence data type: Array, objects
*/

var arr1 = ["Ahmad", 25, "Zakir", 24, "Asif", 26];

var arr = [5, 4, 1, 7, 8, 3];
console.log(arr);
console.log(arr1);


// Operators in JavaScript
// 1 Arithmetic operator
var a = 50;
var b = 40;
console.log("the value of a + b =", a + b);
console.log("the value of a - b =", a - b);
console.log("the value of a * b =", a * b);
console.log("the value of a / b =", a / b);
console.log("the value of a % b =", a % b);

// 2 Assignment Operator
var c = b;
c +=2;
c -=2;
c *=2; //c*2;
console.log(c);

// comparison operator
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x < y);

// logical operator
console.log("Logical  AND operator");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// OR operator
console.log(" LOGICAL OR OPERATOR");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
 
// LOGICAL NOT
console.log(" LOGICAL NOT OPERATOR");
console.log(! true);
console.log(!false);

// Functions in JavaScript

function avg(a,b){
    
    c = (a+b)/2;
    return c;
}
c1 = avg(4,6);
c2 = avg(14, 16);
console.log(c1,c2);

// Conditionals in javaScript
// if condition
var age =40;
if(age>26){
    console.log("You have crossed ur adulthood");
}

// if else statement
 var age = 34;
 if(age > 8){
    console.log('You r not a kid');

 }else{
    console.log('You r  a kid');
 }

//  if else ladder
var age = 50;
if(age>50){
    console.log("You are in old age");
        
}else if(age>25){
        console.log("You are eligible for marriage");
    }else if(age>18 ){
        console.log("You are not a child");

    }else if(age>12){
        console.log("You are in teenager");
    }else{
        console.log("your age is not applicable");
    }
        console.log("sab khattam");

//  LOOPS are in javascript
// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(element){
//     console.log(element);
// });

// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

//  Break and Continue
// break means it will exit from the loop and will stop the iteration while continue means it will exit from the loop only for that particular value after that it will continuously print the value.
// var arr3 = [1,2,3,4,5,6,7];
// for(var i=0; i<arr.length; i++){
//     if(i==3){
//         break;
//         // continue;
//     }
//     // console.log("print")
//     console.log(arr3[i]);
// }

// Array method
/*
Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
*/
let myArr = ['Ahmad','Laptop',6800, true, null];
console.log(myArr.length);
// myArr.pop();
// myArr.push("Coding Ninjas");
// myArr.shift();
// myArr.unshift("raaj");
 console.log(myArr);
// myArr.sort();
 myArr.toString();
// document.getElementById("demo").innerHTML = myArr.toString;
const newLen = myArr.unshift("Harry");
console.log(newLen);
myArr.flat();
myArr.join();

// String Methods in javaScript
/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/
let myLovelyString = "Ahmad is a good good boy";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("good"));
console.log(myLovelyString.lastIndexOf("boy"));
console.log(myLovelyString.slice(1,4));

d = myLovelyString.replace("Ahmad", "ZAKIR");
d =d.replace("good","bad");
console.log(d, myLovelyString);

// Date methods
/* 
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
*/
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());

// DOM MANIPULATION => document object model
// Document is usedfor accessing of html element

let elem = document.getElementById('click');
console.log(elem);
let elemClass  = document.getElementsByClassName('container');
console.log(elemClass);
elemClass[0].style.backgroundColor= "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "this is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "this is a created para";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element);--->removes an element

// selecting using QuerySelector
sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);
function clicked(){
    console.log('the button was clicked')
}
window.onload = function(){
    console.log('the document was loaded');
}

// Event in javaScript
firstcontainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
    console.log('clicked on container hua');
});
// firstcontainer.addEventListener('mouseover', function(){
//     console.log('mouse on container click hua');
// });
// firstcontainer.addEventListener('mouseout', function(){
//     console.log('mouse out of container click hua');
// });
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log('mouse up container click hua');
// });
// firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//     console.log('mouse down container click hua');
// });

// Arrow function
var a=15, b=20;
// function sum(a,b){
//     return a+b;

// }
sum = (a,b)=>{
    return a+b;
}
logkro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
    console.log('I am your log');
};
// setTimeout and setInterval
// setTimeout(logkro, 2000);
clr = setTimeout(logkro, 2000);
// use clearInterval/clearTimeout to cancel setInterval/setTimeout


// local Storage
// Syntax
// window.localStorage
// localStorage.setItem(key, value);
/*localStorage.setItem(Ahmad,25);

localStorage
Storage {Ahmad: '25', length: 1}
localstorage.getItem('name');
localstorage.removeItem('name);
localstorage.clear();
*/

// JSON is used for exchange data

obj = {
    name:"Ahmad", length:1, a:{this:'tha"t"'}
};
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(`{ "Ahamd", "length":1, "a":{"this":"that"} }`);
console.log(parsed);

// Backticts is also called templet literals
a = 34;
console.log(`this is my ${a}`);

// EchmaScript => It is for maintaining javascript


