
// Creating function using parameters:

function Add(element1, element2) {
    console.log(`sum of two number is: ${element1 + element2}`);
}
Add(10, 20);

function greet(message) {
    console.log(`Hello, ${message}!`);
}
greet('Welcom to coding Ninjas');

// Creating functions using default parameters

function greet(name = 'world'){
    console.log(`Hello ${name}`);
}
greet(); //output: Hello, world!

// Invoking a function
function addNumbers(a, b){
    return a+b;
}
const result = addNumbers(5, 10);
console.log(result);