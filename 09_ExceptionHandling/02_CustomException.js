//REVIEW
//Inbuilt exception class in JavaScript
// 1. Error
// 2. SyntaxError
// 3. RangeError
// 4. TypeError

function exceptionTypes(number) {
  try {
    if (number >= 50 && number <= 100) {
      throw new RangeError(
        "Number must be more than 100 or less less than 50 "
      );
    }
    // throw new SyntaxError("This is syntax error");
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
exceptionTypes(5);

function checkValues(args) {
  let nameArray = ["JS", "JAVA", "HTML", "CSS"];

  let updatedValue = args.toUpperCase();

  try {
    if (nameArray.includes(updatedValue)) {
      console.log(updatedValue);
    } else {
      throw new RangeError("Element Name does not exist in array");
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

// checkValues("css");

/**
  Function call getGrade(score)..

  Task One...
  Constraints; score <= 0 score <= 30;

  0 = 5 = F
  5 = 10 = E
  10 = 15 = D
  15 to 20 = C
  20 to 25 = B
  25 to 30 = A..

  Task Two...
  if score value is not range then throw exception..
  that score is not value value

  Task Three..
  if score is less then C grade then shoe throw exception 
  you must improve the score..

*/

function getGrade(score) {
  try {
    if (score < 0 || score > 30) {
      throw new RangeError("It's not valid range ");
    } else {
      if (score > 0 && score <= 5) {
        console.log("F");
        throw new RangeError("Please Improve the Score");
      } else if (score > 5 && score <= 10) {
        console.log("E");
        throw new RangeError("Please Improve the Score");
      } else if (score > 10 && score <= 15) {
        console.log("D");
        throw new RangeError("Please Improve the Score");
      } else if (score > 15 && score <= 20) {
        console.log("C");
      } else if (score > 20 && score <= 25) {
        console.log("B");
      } else if (score > 25 && score <= 30) {
        console.log("A");
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

// getGrade(28);

//function call reverseString(str)
/**
task 1: if string is number than reverse the number and return back
task 2: if string is not a number than return SyntaxError.

str = "1234";
out = 4321 == it's number

str = SomeString1234;
out = exception SyntaxError..
*/

function reverseString(str) {
  // check if str is number or not .. throw exception
  // if it's number then return reverse order value

  try {
    //this is example of Regular Expression..
    let isNum = /^\d+$/.test(str);
    console.log("reverseString -> isNum", isNum);

    if (isNum) {
      let result = str.split("").reverse().join("");
      console.log(result);
    } else {
      throw new SyntaxError("String is not a number");
    }
  } catch (error) {
    console.log(error.message);
  }
}

reverseString("4566");
reverseString("Some2345");





