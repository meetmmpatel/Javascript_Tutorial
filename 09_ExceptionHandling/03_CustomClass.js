// REVIEW How to create a custom exception class and what is the use of if..

// class Error {
//   constructor(message) {
//     this.message = message;
//     this.name = "Error";
//   }
// }

// try {

// } catch (error) {
//   console.log(error.message());

// }

let user = {
  name: "SomeUser",
  // age: 35,
};

// Write the logic that will check if user has some property value or not ...
// like if user object does not have name or age ...
// we should throw exception

class ValidateUser extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidateUser Exception Class";
  }
}

function validUser(user) {
  if (!user.name) {
    throw new ValidateUser("No name key inside Object");
  }
  if (!user.age) {
    throw new ValidateUser("No age key or value in object");
  }
  return user;
}

// let userTwo = {
//   age: 34,
//   name: "Mike",
// };
// console.log(validUser(userTwo));

try {
  console.log(validUser(user));
} catch (error) {
  console.log(error instanceof ValidateUser);
  console.log(error.name);
  console.log(error.message);
}

/**

shipping the product ..
if weight of product is less than 100? it's good to ship
if it's more 100 then you throw custom exception class called
InvalidProductException....

Task - 1 create custom exception class
Task - 2 create function that check the product weight and 
return error or success based of product weight.
*/

class ProductException extends Error {
  constructor(message) {
    super(message);
    this.name = "Product Exception Class";
  }
}

class ProductShipment {
  constructor() {}
  shippingProcess(weight) {
    try {
      if (weight < 100) {
        console.log("Ship it!!");
      } else {
        throw new ProductException("Product weight is more then require");
      }
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
}

let productOne = new ProductShipment();
productOne.shippingProcess(600);
console.log(typeof ProductShipment);

/**
Student Enrollment process..

if student age is less then 18 and grade is less then 3.4 -> is not eligible 

if student age is more then 18 and grade is less then 3.4 -> is elidible with condition

if student age <= 18 and grade more then 3.4 GPA then student is eligible..for enrollment

Task: 1 Class with Enrollment Exception class
Task: 2 throw exception with explanation (With Detail)


*/
