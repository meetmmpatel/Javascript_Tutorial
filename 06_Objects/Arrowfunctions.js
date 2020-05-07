/**
  About Arrow Function 

  //Arrow function template
  let/const name = () => {}

  1. Do not have "this" 
  2. can not call arrow function with "new" word
  3. JavaScript ES6 version

*/

//ES5 Version
let multiply = function (numOne, numTwo) {
  return numOne * numTwo;
};
console.log(multiply(20, 20));

//ES6 Arrow Function
let mul = (numOne, numTwo) => numOne * numTwo;
console.log(mul(20, 20));

//ES5 Version
let printName = function (name) {
  console.log(name);
};
printName("MyName");

//ES6 Arrow Function
let getName = (name) => console.log(name);
getName("Arrow function");

let evenNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
};
evenNumber([11, 22, 33, 44, 55, 66]);

let evens = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
};
evens([11, 22, 33, 44, 55, 66]);


