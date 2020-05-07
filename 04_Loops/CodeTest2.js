/**
Given an array of numbers, return the number of 9's in the array.

arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3

*/

console.log("======Code Test One =======");
// Solution without function
let count9 = 0;
//How to many times number 9 is count in an array
let demoArray = [0, 3, 9, 4, 9, 9];
for (let i = 0; i < demoArray.length; i++) {
  if (demoArray[i] === 9) {
    count9++;
  }
}
console.log("Count of 9 is: " + count9);

//With function

function arrayCount9(array) {
  let funcCount9 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 9) {
      funcCount9++;
    }
  }
  console.log("Count of 9 with function: " + funcCount9);
  return funcCount9;
}
arrayCount9([1, 2, 9]); // let funcCount9 =  1
arrayCount9([1, 9, 9]); //  3
arrayCount9([1, 9, 9, 3, 9]); // 6

/**
Given an array of numbers, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false
arrayFront9([1, 9, 9]) → true
arrayFront9([1, 2, 3]) → false
arrayFront9([1, 9]) → true
arrayFront9([5, 5]) → false
arrayFront9([9]) → true
*/

console.log("=======Code Test Two ========");
//Solution without function..
// count the first four number and verify if 9 is there..it's true

// if length of array is less then (up to 4)  <= 4
// if length of array is more then 4
let testArray = [1, 8, 5, 9, 9];
let result = false;

// console.log(testArray.length < 4);
// console.log(testArray.length >= 4);

if (testArray.length < 4) {
  console.log("first if block ...");
  for (let i = 0; i <= testArray.length; i++) {
    if (testArray[i] === 9) {
      result = true;
    }
  }
  console.log(result);
} else if (testArray.length >= 4) {
  // else condition will only execute when array is more than 4
  console.log("This is second if....");
  for (let i = 0; i < 4; i++) {
    if (testArray[i] === 9) {
      result = true;
    }
  }
  console.log(result);
}

// Solution with function..
console.log("======Code test Two with function======");

function arrayFront9(testArray) {
  let result = false;
  if (testArray.length < 4) {
    for (let i = 0; i <= testArray.length; i++) {
      if (testArray[i] === 9) {
        result = true;
      }
    }
    console.log(result);
  } else if (testArray.length >= 4) {
    // else condition will only execute when array is more than 4
    for (let i = 0; i < 4; i++) {
      if (testArray[i] === 9) {
        result = true;
      }
    }
    console.log(result);
  }
}

arrayFront9([1, 2, 9, 3, 4]);
arrayFront9([1, 2, 3, 4, 9]);
arrayFront9([1, 2, 3, 4, 5]);
arrayFront9([1, 9, 9]);
arrayFront9([1, 2, 3]);

/**
Given an array of numbers, we’ll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

noTriples([1, 1, 2, 2, 1]) → true
noTriples([1, 1, 2, 2, 2, 1]) → false
noTriples([1, 1, 1, 2, 2, 2, 1]) → false
*/
console.log("====Code Test Three=====");

function noTriples(array) {
  //Counter... read number and match next number..same + counter
  largest_run = 1; // if 3 return false...
  prev = array[0];

  for (i = 1; i < array.length; i++) {
    if (array[i] == prev) {
      largest_run++;
    } else {
      largest_run = 1;
    }
    prev = array[i];
    if (largest_run == 3) return false;
  }
  return true;
}

console.log(noTriples([1, 1, 2, 2, 1]));
console.log(noTriples([1, 1, 2, 2, 2, 1]));
console.log(noTriples([1, 1, 1, 2, 2, 2, 1]));
console.log(noTriples([1, 1, 1]));
