/**
1. Switch is it's case by case bases function
2. Switch case must be absolute value.. //not reference value
3. Switch must have break or default keyword ..
4. Like else condition in if-else switch will have 
default ...if no case will apply it will default to 
given condition in default

Code structure for switch statement

switch (x){
   case 'Value of x': // return or code statement
   break;
   case 'Value of x': // return or code statement
   break;
   default: // return 
   break;
}
*/

a = 2 + 2;

switch (a) {
  case 3:
    console.log("it's less then given value");
    break;
  case 4:
    console.log("it's exactly given value");
    break;
  case 5:
    console.log("it's more then given value");
    break;
  default:
    console.log("it's default value");
    break;
}

// how the switch statement works in real life application

let browser = "FireFox";

switch (browser) {
  case "Edge":
    console.log("It's not supported");
    // alert("Browser is not supported..");
    break;
  // You can have multiple cases as single implementation.
  case "Chrome":
  case "FireFox":
  case "Safari":
    console.log("It's supported in ES6");
    // alert("These browser are supported in ES6");
    break;
  default:
    console.log("it's not valid value..");
}

//Same solution in if-else condition ...
if (browser === "Chrome" || browser === "FireFox" || browser === "Safari") {
  console.log("Browser is supported in If-else ");
} else if (browser === "Edge") {
  console.log("It's not supported in If-else");
} else {
  console.log("It's not valid value..");
}
