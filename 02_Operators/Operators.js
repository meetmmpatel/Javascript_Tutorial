// This page is about javaScript Operators

/**
 * Arithmetic Operators
 * +, -, * , /, % , ++, --
 */

console.log("====Arithmetic Operators====");
let numOne = 20;
let numTwo = 30;

console.log(numOne + numTwo);
console.log(numOne - numTwo);
console.log(numOne * numTwo);

let total = numOne / numTwo;
//  toFixed funtion will provide the rounding feature
console.log(total.toFixed(1));

//  Remainder
console.log(100 % 20);

// Incement and Decrement // Pre or Post
console.log("Post Incerement ++ " + numOne++); // 20
console.log(numOne); // 21
console.log("Pre Increment  " + ++numOne); // 22

//Decrement
console.log(numTwo--); // 29
console.log(--numTwo); // 29 - 1 = 28

//  Comparison Operators

console.log("======Comparison Operators=======");

// ==, ===, != , !==, >, >=, <, <=

// We must compare with another variable to find the result.
// Comparison Operators will always return true or false

console.log("Is Equal to: " + 10 == 20);
console.log("Identical Strong equality: " + (10 === 10));
console.log(typeof 20 === typeof "30");

console.log("not equal to: " + (22 != 21));
console.log("not Identical: " + (14 !== "14"));

console.log("Greater than: " + (22 > 20));
console.log("Greather then or equal to: " + (20 >= 15));

// for loop to show example of > and >=
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("Second Loop");

for (let i = 10; i > 1; i--) {
  console.log(i);
}
console.log("Less than: " + (25 < 28));
console.log("Less then or equal to: " + (45 <= 44));

// Logical Operators

console.log("======== Logical Operators ==========");
// && (and) , ||(or), !(not)
console.log(10 == 20 && 20 != 10); //false
console.log(10 == 20 || 20 != 10); // true
console.log(!(20 == 20));

// Assignment Operators
console.log("======Assignment Operators=========");

// =, += , -=, *=, /= , %=

let a = 10;
let b;
console.log((b = a)); // let b = a(10), b = 10
console.log(b); // b is now 10
console.log((b += a)); // b = b(10) + a(10) = 20
console.log((a += 5)); // a = a(10) + 5 = 15

console.log((a -= 5)); // a = 15 - 5 = 10
console.log((b *= 2)); // b = 20 * 2 = 40
console.log((b /= 2)); // b = 40 / 2 = 20
console.log((a %= 5)); // a = 10 % 5 = 0

// Example of odd and even numbers
let price = 1401;
console.log((price %= 2)); // value of price is even number

if ((price %= 2) == 0) {
  console.log("it's an even number");
} else {
  console.error("Is't not an even number");
}

// Bitwise Operators

console.log("========Bitwise Operators========");

/*
01010 = 5
01248 // bitwise calculation 
01011 = 13
*/
// & (AND), |(or), ^(XOR = Opposite of or), ~(NOT)
console.log((10 != 20) & (20 != 33)); // true = 1, false = 0
console.log((10 == 20) | (20 == 33)); // both side is false and false = 0
console.log((10 != 20) ^ (20 == 33)); // Simple Or function (Left of right must be true)
console.log(~-10);
console.log(~-10); // to find an opposite value -10, -9 ...0 1,2,3
console.log();

// Special Operators
console.log("======Special Operators========");

/**
 * 1. (?:) = used to short cut of if-else condition
 * 2, (,) = apply for multiple arguments
 * 3, delete = delet the object key and value
 * 4, in  = check if the object is in given property
 * 5, instanceof = check if the instance is given object or not
 * 6, new = create the instance from the class
 * 7, typeof = check the type of object
 * 8, void = return no value..
 */

//  * 1. (?:) = used to short cut of if-else condition
//simple if-else condition

if (20 == 20) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}
let bool = 20 == 21 ? console.log("it's true") : console.log("it's false");

//  * 2, (,) = apply for multiple arguments
let m,
  n = 10;
console.log(m);
console.log(n);

function demo(argsOne, argsTwo) {
  argsOne = 15;
  argsTwo = 20;
  console.log(argsOne + argsTwo);
}
demo();

//* 3, delete = delet the object key and value
let user = {
  id: 10,
  name: "Mark Miller",
};

console.log(user);
delete user.id;
console.log(user);
// remove entier object
// user = null;
// console.log(user);

// in  = check if the object is in given property
console.log("name" in user);
console.log("id" in user);

//5, instanceof = check if the instance is given object or not
//* 6, new = create the instance from the class
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
//Exampel of keyword new ...
let Auto = new Car("Honda", "CRV");
console.log(Auto);

console.log(Auto instanceof Car);

//  * 7, typeof = check the type of object

console.log(typeof Auto);
let someNumber = 20;
console.log(typeof someNumber);
let boolValue = false;
console.log(typeof boolValue);

//  * 8, void = return no value..
// void will return undefined object 
void function noValue() {
  console.log("No Return");
};

noValue();
