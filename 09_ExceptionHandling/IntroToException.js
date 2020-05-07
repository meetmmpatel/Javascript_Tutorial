//REVIEW
/**
 * Exception Handling In JavaScript
 * 1. try_catch block
 * 2. try_catch...finally block
 * 3. "throw" keyWord
 *
 */

// Diff between Error and Exception..
// Error which application can recover and fail to start..
// Exception is can be handled by code..

let a = 55;
let b = "0";

console.log(a / b);

/**
 * always try block will run first then if any error then catch block will run..
 */

//if or else will run...
//try will run first if only there is an exception then catch block will run..
try {
  console.log("Try block is running..");
  console.log(numOne);
} catch (error) {
  console.log(error.message);
}

// console.log(numOne);

console.log("Print outside of try_catch block");

//NOTE try catch block will not run incase compiler or syntax error
// try {
//   console.log(Start the Try block);
// } catch (error) {
//   console.log("Error has occur");
// }

// let error = {
//   name: " ",
//   message: " ",
//   stack: "",
// };

//Error class..
try {
  //some code..
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

// let name = ' "someName" "someNumber" ';
// console.log("name", name)
// let obj = 'someName'
// obj = "SomeName";

let person = '{"name"; "mike", "age"; 34}';
// let person1 = {
//   name: "Mike",
//   age: 34,
// };

try {
  console.log(person);
  console.log(typeof person);

  // will convert String into object..
  let employee = JSON.parse(person);
  console.log(employee);
  console.log(typeof employee);
  console.log(employee.name);
  console.log(employee.age);
} catch (error) {
  console.error("Can not parse String into Object");
}

//Verify that User name password are correct if not throw an exception
//verify that UserName length is more then 8 chars and password length is more then 7 chars

function userAuthentication(userName, password) {
  try {
    if (userName.length >= 8 && password.length >= 7) {
      if (userName === "AdminUserName" && password === "admin123") {
        console.log("Correct Login information");
      }
      else { 
        throw new Error("Incorrect Username or password");
      }
    } else {
      throw new Error(" Username or password length should be more then 8 chars");
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
  }
}
userAuthentication("User", "admin123");



