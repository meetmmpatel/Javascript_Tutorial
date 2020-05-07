/**
1. Simple For loop
2. While loop
3. do while loop
4. for -in loop (only works with array.)

More repetition task will works well with loop..
*/

/**
 for (begin, condition, step){
    code goes hear...
 }
*/
//Demo of simple for loop
for (let i = 2; i <= 9; i++) {
  console.log(i);
}

//Can also works with array
let numbersList = [11, 22, 33, 44, 55];
for (let i = 0; i < numbersList.length; i++) {
  console.log(numbersList[i]);
}

//Loop can work with string object as well
let name = "SomeTestUser";
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

//find the even number and odd number from the loop;
// print the even and odd number with range of 0 to 20..

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("It's an even number: " + i);
  } else {
    console.log("It's an odd number: " + i);
  }
}

//With any loop we can use keyword like continue and break

for (let i = 0; i < 10; i++) {
  if (i === 4) {
    console.log("It's a number four");
    continue;
  }
  if (i === 7) {
    break;
  }
  console.log(i);
}

/**
let textLine = "this is some text line with javascript code"
use for loop and only print vowel (a, e , i ,o ,u)
*/
let textLine = "this is some text line with javascript code";
for (let i = 0; i < textLine.length; i++) {
  if (
    textLine[i] === "a" ||
    textLine[i] === "e" ||
    textLine[i] === "i" ||
    textLine[i] === "o" ||
    textLine[i] === "u"
  ) {
    console.log(textLine[i]);
  }
}

//  For In loop (only for array object)

let nameList = ["HTML", "JS", "CSS", "JAVA", "NODE"];
for (let i in nameList) {
  console.log(nameList[i]);
}

//while loop... condition
let n = 0;
while (n < 5) {
  console.log("Count of N: " + n);
  ++n;
}

// Do _while loop
// Do _while loop will run at least one time...
let v = 5;
do {
  console.log(v);
  v++;
} while (v <= 15);

/**
Given a string and a non-negative int n, return a larger string that is n copies of the original string.
stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*/

console.log("=====Without function======");

let str = "Hi";
let count = 15;
let result = "";

for (let i = 0; i < count; i++) {
  result += str;
}
console.log(result);

//Using function...

console.log("=====Using Function=====");

function stringTimes(string, times) {
  let answer = "";
  for (let i = 0; i < times; i++) {
    answer += string;
  }
  console.log(answer);
  return answer;
}
stringTimes("Hello!", 5);
stringTimes("Hi", 3);
stringTimes("Hi", 1);
