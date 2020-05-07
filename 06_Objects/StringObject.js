console.log("===String Object functions===");

let str = "SomeString";
// let str = new String("SomeString");

//charAt() function will allow us to check each char..

console.log(str.charAt(5));
const aboutChar = () => {
  for (let index in str) {
    if (str[index] === "t") {
      console.log("Found t in str");
    }
  }
};
aboutChar();

//concat the string..(two string merge into one string..)
console.log(str.concat(" Hello World!"));
console.log("User " + " Details");

//indexOf() and lastIndexOf()....
console.log(str.indexOf("m"));
console.log(str.lastIndexOf("S"));

//search();;
//Will return index number of char
console.log("====This is search function====");

str = "M J  Javascript i IS a scripting language, JavaScript is fun!!";
console.log(str.search("IS"));
console.log(str.search(/JavaScript/));

//match (regex)
str = "JavaScript";
console.log(str.match("Script"));

//replace (original String, new String)
str = "JavaScript ES5";
console.log(str.replace("ES5", "ES6"));

//toLowerCase, toUpperCase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

str = "someString";
//Code Test:
console.log("====Code Test ===");
console.log(str);
//print some in Uppercase and String in lowercase..??
let text = str.split("String");
console.log(text);
let a, b;
a = text[0];
console.log(a);
b = "String";
console.log(a.toUpperCase() + b.toLowerCase()); // 10 ms
// solve when callback console.log(b);// 5ms

console.log("=====End of code test======");

// convert any datatype into string
//toString()... number boolean object into string

str = 5;
console.log(typeof str);
console.log(typeof str.toString());
str = true;
console.log(typeof str);
console.log(typeof str.toString());

//trim()... will remove space from string..
//trimLeft()... trimRight()...
str = "  String with Space";
console.log(str);
console.log(str.trim());
