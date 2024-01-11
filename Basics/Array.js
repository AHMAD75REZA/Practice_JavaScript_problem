// var arr = [2,3,4,5,6,7];

// // for(var i=0; i<arr.length; i++){
// //     console.log(arr[i]);
// // }
// function print(element){
//     console.log(arr[i])
// }
// print(arr);

// arr.forEach(element);


// Let's create an object that will serve as our context
const person = {
    name: 'John',
    greet: function (greeting) {
      console.log(greeting + ' ' + this.name);
    }
  };
  
  // We'll also create another object without the 'greet' function
  const anotherPerson = {
    name: 'Alice'
  };
  
  // Now, we'll borrow the 'greet' function from the 'person' object and use it with 'anotherPerson' as the context
  person.greet.call(anotherPerson, 'Hello'); // Output: Hello Alice
  