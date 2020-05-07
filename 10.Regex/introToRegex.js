//REVIEW
/**
 * Regex class with constructor
 * // ("pattern","flags")
 * // Regex will always return Array..
 */

// let name = "SomeName";
let name = new String("SomeName");
console.log("name", typeof name);

// let reg = new RegExp("pattern", "flag");
let reg = /pattern/;
console.log(typeof reg);

let str = "We have Some task to finish, we will do it later";
// find the We in line?
console.log(str.match(/have/));
console.log(str.match(/wei/i)); //null
console.log(str.match(/we/gi));

// NOTE
/**
 * i = ignore the case from char...
 * g = global search
 * m = Multiline search
 * s = new Line with . value
 * u = unicode UTF-8 ..
 */

/**
 * Function that is part of Regex
 * 1. match() == match the string and will return array if not than null
 * 2. test() == search the string and will return boolean
 * 3. replace () == find the string and will replace with given string
 * 4. search () == return index value of String if not found then it will return -1;
 * 5. split () = split the string in to char..
 */

/**
 * Character Classes
 * in built class that will provide built in search
 *
 * \d == only search digit (0-9)
 * \s == only search space
 * \w == only search word (ignore digit and symbol)
 * \D == only search non-digit value..
 * \S == only search non-space value..
 * \W == only search non-world or space.
 *
 * //Range with []
 * [abc] == Match will  find one or any char from search..
 * [^abc] == ignore the given chars..
 * [a-z] == Match a to z chars..
 * [A-Z] == Match A t0 Z chars..
 * [a-Z] == Match a to z and A to Z chars...
 * [0-9] == Match all numbers
 * [a-z0-9] == Match a to z and all numbers..
 */

str = "We will , we will";
// find the we and replace with I..
console.log(str.replace(/we/gi, "I"));

str = "I like JavaScript";
reg = /LIKE/i;
console.log(reg.test(reg));

let phoneNumber = "+1 787-898-8989";
reg = /\d/g;
console.log(phoneNumber.match(reg));
console.log(phoneNumber.match(reg).join(""));

// console.log(Number.parseInt(phoneNumber));

str = "Is there CSS4?";
reg = /\D/gi;
console.log(str.match(reg));

reg = /CSS\d/;
console.log(str.match(reg));

str = "Web page are mostly in HTML5! format";
reg = /\s\w\w\w\w\d/;
console.log(str.match(reg));

str = "He wa eating cake in the cafe.";
reg = /ca[kf]e/g;
console.log(str.match(reg));

//test()...
function findCakeOrCafe() {
  return reg.test(str);
}
console.log(findCakeOrCafe());

let nameList = ["James Smith", "Clark Kent", "John Wick"];
reg = /^J/;
for (let name of nameList) {
  if (reg.test(name)) {
    console.log(name);
  }
}

/**
 * Write a JavaScript program to test the first character of a string is uppercase or not.  // true or false..
 *
 * // someSTR = false;
 * // Html = true.. first char is uppercase.
 *
 */

/**
 * ^ == always search from the start of line..
 * $ == always search from the end of line..
 * m == search from the multi line.
 */

function firstUpperChar(str) {
  let regex = /^[A-Z]/;
  if (regex.test(str)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
firstUpperChar("AbcD");

str = `1st line: First 19 \n
2nd line: second 28 \n
3rd line: three 36`;
console.log(str);
console.log(str.match(/^\d/gm)); //??
console.log(str.match(/\d$/gm));

// How to group the code into single string..
// (pattern)

str = "Googlego now!";
//group "go" all into single string
console.log(str.match(/(go)+/i));

//How to validate email format?
//my@gmail.com  test1234@gmail.com test_23@gmail.com

regex = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
str = "test_23@gmail.com";

if (regex.test(str)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email");
}
