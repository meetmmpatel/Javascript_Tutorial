console.log("This is intro to Class");

//How to write the class syntax and how to use it.
// Class is a function ..

/**
class MyClass {
  //constructor is function/method inside the class
  //local variables are defined inside the class
  //other methods/functions inside the class
}
*/

class User {
  //when call class with new keyword it's constructor call
  constructor(userName) {
    this.name = userName;
  }
  // can not write keyword function inside the class
  sayHi() {
    console.log(this.name);
  }
  sayBye() {
    console.log("Good bye from user..");
  }
}

// function User(userName) {

//   //Can not have  function declaration within function..
//   //  let demo() {
//   // }
//   Math.abs();

//   return this.name = userName;
// }
//User("");
//Class is also considered as function
console.log(typeof User);
let userOne = new User("John");
console.log(userOne);
let userTwo = new User("Mike");
console.log(userTwo);

userOne.sayHi();
userOne.sayBye();

userTwo.sayHi();
userTwo.sayBye();

//Counter Class that start the counter at given number..
//write the functions to up or down the counter
//Class will never have () within the signature of class

class Counter {
  constructor(givenNumber) {
    this.point = givenNumber;
  }
  // constructor() {}
  up() {
    return ++this.point;
  }
  down() {
    return --this.point;
  }
}

let startFrom5 = new Counter(5);
console.log(startFrom5);
console.log(startFrom5.up());
console.log(startFrom5.up());
console.log(startFrom5.up());
console.log(startFrom5.down());
console.log(startFrom5.down());

let startFrom15 = new Counter(15);
console.log(startFrom15);
console.log(startFrom15.up());
console.log(startFrom15.up());
console.log(startFrom15.down());
// Car? Wheels , EngineType, Color
class Car {
  constructor(wheels, engineType, color) {
    this.wheels = wheels;
    this.engineType = engineType;
    this.color = color;
  }
  start() {
    console.log("Car started..");
  }
  stop() {
    console.log("Car stopped");
  }
}

let carOne = new Car(4, "V8", "Blue");
console.log("carOne", carOne);
console.log(typeof carOne.wheels);
console.log(typeof carOne.engineType);
carOne.start();
carOne.stop();

/**
Create Printers ....scan, fax, print, copy, wireless
three order.
1. order = scan, fax, print,
2. order = scan, fax, print, copy,
3. order = all

*/
class Printer {
  constructor() {}

  scan() {
    console.log("Scan");
  }
  fax() {
    console.log("Fax");
  }
  print() {
    console.log("Print");
  }
  copy() {
    console.log("Copy");
  }
}

function wireless() {
  console.log("Wireless");
}

class dbConnection {
  constructor() {
    console.log("DB connected...");
  }

}

let orderOne = new Printer();
console.log("OrderOne");
orderOne.scan() + " " + orderOne.fax() + " " + orderOne.print();
wireless();
//orderOne.wireless(); will throw an error
