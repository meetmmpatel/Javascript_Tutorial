//Code Test One:
/**
Given 2 numbers, a and b, return true if one if them is 10 or if their sum is 10.
makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true
*/

// expect function call with args
// to: result the functions return type

test("Code Test 1 ", () => {
  expect(make10(9, 10)).toBe(true);
  expect(make10(9, 9)).toBe(false);
  expect(make10(1, 9)).toBe(true);
});

const make10 = (a, b) => {
  //if-else
  if (a == 10 || b == 10 || a + b == 10) {
    return true;
  } else {
    return false;
  }
};

/**
Given three int values, a b c, return the largest.
intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3
 */

test("Code Test 2 ", () => {
  expect(intMax(1, 2, 3)).toEqual(3);
  expect(intMax(1, 3, 2)).toEqual(3);
  expect(intMax(3, 2, 1)).toEqual(3);
});

const intMax = (a, b, c) => {
  // a , b , c // find largest number?
  let temp = a > b ? a : b;
  let result = temp > c ? temp : c;
  return result;
};

/**

Given an array of numbers, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.


array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true

*/

test("Code Test 3", () => {
  expect(array123([1, 1, 2, 3, 1])).toBe(true);
  expect(array123([1, 1, 2, 4, 1])).toBe(false);
  expect(array123([1, 1, 2, 1, 2, 3])).toBe(true);
});

const array123 = (array) => {
  // loop to read each number of array..
  // check the number and verify it's 1,
  // check next two verify it's 2, 3,?
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] === 1 && array[i + 1] === 2 && array[i + 2] == 3) {
      return true;
    }
  }
  return false;
};

/**
We’ll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special.
specialEleven(22) → true
specialEleven(23) → true
specialEleven(24) → false
 */

test("Code Test 4", () => {
  expect(specialEleven(44)).toBe(true);
  expect(specialEleven(45)).toBe(true);
  expect(specialEleven(24)).toBe(false);
});

const specialEleven = (a) => {
  if (a % 11 == 0 || a % 11 == 1) {
    return true;
  } else {
    return false;
  }
};

/**
CodeTest 5
Given 3 numbers values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.
loneSum(1, 2, 3) → 6
loneSum(3, 2, 3) → 2
loneSum(3, 3, 3) → 0
*/

test("Code Test 5 ", () => {
  expect(loneSum(1, 2, 3)).toEqual(6);
  expect(loneSum(3, 2, 3)).toEqual(2);
  expect(loneSum(3, 3, 3)).toEqual(0);
});

const loneSum = (a, b, c) => {
  if (a == c && a != b) {
    return b;
  }
  if (a != b && b != c && a != c) {
    return a + b + c;
  }
  if (a == b && b == c && a == c) {
    return 0;
  }
};

/**
Given 2 numbers values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

blackjack(19, 21) → 21
blackjack(21, 19) → 21
blackjack(19, 22) → 19
 */

test("Code Test 6", () => {
  expect(blackjack(19, 21)).toEqual(21);
  expect(blackjack(21, 19)).toEqual(21);
  expect(blackjack(19, 22)).toEqual(19);
});

const blackjack = (a, b) => {
  // 1. if a and b are greater than 21 return 0;
  // 2. if a greater than 21 and b is less then 21 return b
  // 3. if b greater than 21 and a is less then 21 return a
  // 4. a and b are less then or equal to 21 ?
  // 4.1. b is greater then a and less or equal to 21 return b
  // 4.2  a is greater then b and less or equal to 21 return a

  if (a > 21) {
    if (b > 21) {
      return 0;
    }
    return b;
  } else if (a < b && b <= 21) {
    return b;
  }
  return a;
};

/**
Given three numbers, a b c, one of them is small, one is medium and one is large. 
//NOTE Return true if the three values are evenly spaced, 
//NOTE so the difference between small and medium is the same as the difference between medium and large.

evenlySpaced(2, 4, 6) → true
evenlySpaced(4, 6, 2) → true
evenlySpaced(4, 6, 3) → false
 */

test("Code Test 7", () => {
  expect(evenlySpaced(2, 4, 6)).toBe(true);
  expect(evenlySpaced(4, 6, 2)).toBe(true);
  expect(evenlySpaced(4, 6, 3)).toBe(false);
  expect(evenlySpaced(6, 2, 8)).toBe(false);
  expect(evenlySpaced(2, 2, 2)).toBe(true);
});

const evenlySpaced = (a, b, c) => {
  let temp;

  // (b > a = temp = a, a = b, b = temp)
  if (b > a) {
    temp = a;
    a = b;
    b = temp;
  }
  if (c > b) {
    temp = b;
    b = c;
    c = temp;
  }
  if (b > a) {
    temp = a;
    a = b;
    b = temp;
  }

  return a - b == b - c;
};
