/**
Your cell phone rings. Return true if you should answer it.
Normally you answer, except in the morning you only answer if it is your mom calling. 
In all cases, if you are asleep, you do not answer.

answerCell(false, false, false) → true
answerCell(false, false, true) → false
answerCell(true, false, false) → false

*/
console.log("=====Code Test One =====");

function answerCell(isMorning, isMom, isAsleep) {
  if (isAsleep) {
    return false;
  }
  if (isMom) return true;
  return !isMorning;
}

console.log(answerCell(false, false, false));
console.log(answerCell(false, false, true));
console.log(answerCell(true, false, false));

/**
Given three numbers, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if “bOk” is true, b does not need to be greater than a.

inOrder(1, 2, 4, false) → true
inOrder(1, 2, 1, false) → false
inOrder(1, 1, 2, true) → true 
*/

// three numbers   a, b, c  boolean bOk
// 1. a less then b and b is less than c bOk = false = true...
// 2, when bOk = true only b does not need to be greater than a
console.log("=====Code Test Two========");

function inOrder(a, b, c, bOk) {
  // case 2 == bOk  = true
  if (bOk) {
    return c > b;
  } else {
    return b > a && c > b;
  }
}

console.log(inOrder(1, 2, 4, false));
console.log(inOrder(1, 2, 1, false));
console.log(inOrder(1, 1, 2, true));
