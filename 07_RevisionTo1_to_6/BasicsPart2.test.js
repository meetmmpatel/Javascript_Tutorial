/**
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.


loneSum(1, 2, 3) → 6
loneSum(3, 2, 3) → 2
loneSum(3, 3, 3) → 0
*/

test("Code Test 1 ", () => {
  expect(loneSum(1, 2, 3)).toEqual(6);
  expect(loneSum(2, 3, 2)).toEqual(3);
  expect(loneSum(3, 3, 3)).toEqual(0);
});

const loneSum = (a, b, c) => {
  if (a !== b && b !== c && a !== c) {
    return a + b + c;
  } else if (a === b && b === c && c === a) {
    return 0;
  } else if (a === c) {
    return b;
  } else if (b === c) {
    return a;
  } else {
    return c;
  }
};

/**

Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.

luckySum(1, 2, 3) → 6
luckySum(1, 2, 13) → 3
luckySum(1, 13, 3) → 1
luckySum(1, 13, 13) → 1	
luckySum(6, 5, 2) → 13	
luckySum(13, 2, 3) → 0	
luckySum(13, 2, 13) → 0	
luckySum(13, 13, 2) → 0	
luckySum(9, 4, 13) → 13	
luckySum(8, 13, 2) → 8	
luckySum(7, 2, 1) → 10
luckySum(3, 3, 13) → 6
*/

test("Code Test 2", () => {
  expect(luckySum(1, 2, 3)).toBe(6);
  expect(luckySum(1, 2, 13)).toBe(3);
  expect(luckySum(1, 13, 3)).toBe(1);
});

function luckySum(a, b, c) {
  if (a === 0) {
    return b + c;
  } else if (b === 13) {
    return a;
  } else if (c === 13) {
    return a + b;
  } else {
    return a + b + c;
  }
}
