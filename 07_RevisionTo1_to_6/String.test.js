/**
Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"

*/

test("Code Test 1 ", () => {
  expect(firstHalf("WooHoo")).toEqual("Woo");
  expect(firstHalf("HelloThere")).toEqual("Hello");
  expect(firstHalf("abcdef")).toEqual("abc");
});

const firstHalf = (str) => {
  let strLen = str.length / 2;
  let result = "";

  for (let i = 0; i < strLen; i++) {
    result += str[i];
  }
  // console.log(result);

  return result;
};

/**

Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"
 */

test("Code Test 2 ", () => {
  expect(withoutEnd("Hello")).toEqual("ell");
  expect(withoutEnd("java")).toEqual("av");
  expect(withoutEnd("coding")).toEqual("odin");
});

const withoutEnd = (str) => {
  return str.substring(1, str.length - 1);
};

/**
Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

twoChar("java", 0) → "ja"
twoChar("java", 2) → "va"
twoChar("java", 3) → "ja"

*/

test("Code Test 3 ", () => {
  expect(twoChar("java", 0)).toEqual("ja");
  expect(twoChar("java", 2)).toEqual("va");
  expect(twoChar("java", 3)).toEqual("ja");
});

const twoChar = (str, index) => {
  if (index <= str.length - 2 && index >= 0) {
    return str.substring(index, index + 2);
  }
  return str.substring(0, 2);
};

/**

Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

lastTwo("coding") → "codign"
lastTwo("cat") → "cta"
lastTwo("ab") → "ba"
 */

test("Code Test 4 ", () => {
  expect(lastTwo("coding")).toEqual("codign");
  expect(lastTwo("cat")).toEqual("cta");
  expect(lastTwo("ab")).toEqual("ba");
});

const lastTwo = (str) => {
  let len = str.length;
  // if the string is length of 2
  let result = "";
  if (len >= 2) {
    result =
      str.substring(0, len - 2) + str.charAt(len - 1) + str.charAt(len - 2);
  }
  return result;
};
