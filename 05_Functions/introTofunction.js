/**
//Method or function it's same meaning
// diff between block and function..
// function or arrow function
// name of function 
// args.. (any number of args into function in java script)
// body of function..
// must call the function...

//Types of functions
1. function without args but no return type
2. function with args no return type
3. function without args with return
4. function with args with return..
*/

function withOutArgsNoReturn() {
  //keyword return ...it's void function.
  console.log("Function One");
  console.log("No args and no return function");
}

//function call
withOutArgsNoReturn();
withOutArgsNoReturn();

function withArgsNoReturn(text) {
  console.log("Function Two");
  console.log("function with args but no return" + text);
}
withArgsNoReturn("This text value...");

// keyword return ...(optional)
function withOutArgsWithReturn() {
  return "Method 3, with return type with args.";
}
console.log(withOutArgsWithReturn());

function withArgsWithReturn(name) {
  return "This is given name: " + name;
}

console.log(withArgsWithReturn("JavaScript"));
console.log(withArgsWithReturn("HTML"));
console.log(withArgsWithReturn("CSS"));

/**
Write three new functions
1. should have no args and return some number
2. should have args and also return args(number) + 10; as return
3. should call function one, and two and print the total ...
*/

// calculate price of the product , tex and total...

//Function One.. with args
function getProductPrice() {
  return 12;
}

function getProductTax(price) {
  return (price = price + (price % 10));
}

function finalPrice() {
  console.log(getProductTax(getProductPrice()));
}

finalPrice();

/**
There are two types of function variables 
1. Local variable (variable has been declare in function body)
2. Global variable : scope the variable in not attach to function
    Any function in file can use this variable
*/

function message() {
  //Example of local variable
  let msg = "This is some test message";
  return msg;
}
console.log(message());

//Global variable example..
//Global are allowed to change with or without function
let userName = "Test123";

function getUserName() {
  console.log("This is UserName: " + userName);
}

getUserName();

console.log(userName);
userName = "Test456";

getUserName();

/**
function Arguments 
1. function args are only applicable to function..
2. Can not access the function args with out function call.
3. While calling function you can pass more args than actual function has..
4. We can have default value of args incase we don't pass args while calling function
*/
function sum(numOne, numTwo = 0) {
  return numOne + numTwo;
}
console.log(sum(20, 40));
//  console.log(numOne); this is error args are not allowed call

// example of passing more/less args than actual function has..
console.log(sum(20, 30, 58));
console.log(sum(67));

// default args value
function someInfo(information = "No new Information") {
  console.log(information);
}

someInfo();
someInfo("This is info about new database");

function greet(firstName = "TestUser", lastName = "LastName TestUser") {
  // if ( typeof firstName === "undefined") {
  //   firstName = "SomeName"
  // }
  return "Hello " + firstName + lastName;
}
console.log(greet());

/**
Write the function where you check if args value are not boolean than return
return an error stating it's valid datatype
*/

function verifyTheDataType(bool) {
  if (typeof bool !== "boolean") {
    console.error("It's not valid boolean value");
  } else {
    if (bool) {
      console.log("You passed True!");
    } else {
      console.log("You passed False");
    }
  }
}

verifyTheDataType("str");
