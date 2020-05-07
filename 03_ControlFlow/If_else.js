/**
 * 1. if statement (single condition)
 * 2. if_else statement (true or false conditions)
 * 3. if_else if statement (multiple conditions)
 */

let numOne = 50;
let numTwo = -160;

/**
 * if(expression or condition must be true)
 * { code will execute..}
 * else {
 * }
 */

//  Simple if condition
if (numOne <= 50) {
  console.log("This is true");
}

//If else condition
// never if and else code block will execute at ones
if (numOne > numTwo) {
  console.log("IF Block " + numTwo);
} else {
  console.log("Else Block " + numOne);
}

/**
 * Find these condition
 * 1. if value of numTwo is greater than zero?
 * 2, if value of numTwo is greater then value of numOne?
 * 3, if value of numTwo is greater then 100?
 */

if (numTwo > 0) {
  console.log("Value of numTwo is greater then zero");
} else if (numTwo > numOne) {
  console.log("Value of numTwo is greater then value of numOne");
} else if (numTwo > 100) {
  console.log("Value of numTwo is greater then 100");
} else {
  console.log("Value of numTwo does not stratify the requirements");
}

let evenOrOdd = 2341;
//if else and tell me number is even or odd?
if (evenOrOdd % 2 === 0) {
  console.log("it's an even number");
} else {
  console.log("It's an odd number");
}

/**
 * Given three number find the largest and smallest number
 * let a  = 29;
 * let b = 56;
 * let c = 87;
 * find the largest and smallest number
 */
let a = 290;
let b = 56;
let c = 87;

//Largest value
let temp = a > b ? a : b;
let result = temp > c ? temp : c;
console.log(result);

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
}

//Smallest value if any three numbers
let tempOne = a < b ? a : b;
let resultOne = tempOne < c ? tempOne : c;
console.log("Small value " + resultOne);

if (a < b && a < c) {
  console.log(a);
} else if (b < a && b < c) {
  console.log(b);
} else if (c < a && c < b) {
  console.log(c);
}

/**
 * Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator
  let num = 3 true, 5 true, or 8 false
 */

let num = 8;
if (num % 3 === 0 || num % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}

/**

Given 2 int values, return true if either of them is in the range 10..20 inclusive.

in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false
*/

console.log("====Code Test One====");

//Solution One....
a = 8;
b = 99;

if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
  console.log(true);
} else {
  console.log(false);
}

//Solution Two...Using the function
function in1020(a, b) {
  return (a >= 10 && a <= 20) || (b >= 10 && b <= 20);
}
console.log(in1020(12, 99));
console.log(in1020(21, 12));
console.log(in1020(8, 99));

/** 
Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
*/

console.log("======Code Test Two");

a = 40;
b = 50;

//Solution One... without function
if (a >= 30 && a <= 40 && b >= 30 && b <= 40) {
  console.log(true);
} else if (a >= 40 && a <= 50 && b >= 40 && b <= 50) {
  console.log(true);
} else {
  console.log(false);
}

//Solution in function ....
function in3050(a, b) {
  if (a >= 30 && a <= 40 && b >= 30 && b <= 40) {
    return true;
  } else if (a >= 40 && a <= 50 && b >= 40 && b <= 50) {
    return true;
  } else {
    return false;
  }
}
console.log(in3050(30, 31));
console.log(in3050(30, 41));
console.log(in3050(40, 50));

/**
Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % “mod” operator computes remainders, so 17 % 10 is 7.

lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true
*/

//Solution Three ... using if else

console.log("=====Code Test Three=======");

a = 3;
b = 113;

if (a % 10 === b % 10) {
  console.log(a % 10);
  console.log(b % 10);
  console.log(true);
} else {
  console.log(false);
}

//Solution three.. Using function

function lastDigit(a, b) {
  return a % 10 === b % 10;
}
console.log(lastDigit(7, 17));
console.log(lastDigit(6, 17));
console.log(lastDigit(3, 113));
