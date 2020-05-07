/**
 static 
 instance ..

 public and private static fields/variables
 public and private instance variables
 
 public and private instance methods
 public and private static methods

 inheritance of class to class
 
*/

//NOTE 1: Class can only have variables or methods. not block of code.
//NOTE 2: Class can only we called via new Keyword ...
//NOTE 3: Class can have static or instance variables
//NOTE 4: Static variable or function always attach with class and not instance of class
//NOTE 5: Private Variable or functions can not be access outside of the class.

class DemoOne {
  //Static variable
  static valueOne = "Test";

  //Instance variable
  instanceVariable = 10;
  numOne = 30;
  numTwo = 20;

  //block is not allowed inside class without function/method
  constructor() {
    console.log("This is class DemoOne");
  }

  //instance method/functions..
  myFunOne() {
    if (true) {
      console.log(true);
    } else {
    }
  }
}

//let obj = DemoOne(); without keyword new
let obj = new DemoOne(); // new keyword call to constructor function.
console.log(obj);
obj.myFunOne();
//DemoOne.myFunOne(); function without instance ..
console.log(obj.instanceVariable);
console.log(obj.numOne);
console.log(obj.numTwo);

// Call to static variables
console.log(DemoOne.valueOne);

console.log("========Example of Class vs Instance==========");

//CarFactory = int = Car..

class CarFactory {
  // static
  static molding = "Metal Mold";
  static tireInstall = "Install The tire";

  //instance variable
  carKey = "Key";
  EngineCheckLight = "checkLight";

  constructor() {}

  static processToInstallDoors() {
    console.log("This process will install the door in car");
  }

  carStart() {
    console.log("This process will start the car engine");
  }
}

//Instance of the CarFactory
let carOne = new CarFactory();
console.log(carOne);
console.log(carOne.carKey);
console.log(carOne.EngineCheckLight);
carOne.carStart();

// static call to CarFactory Class
console.log(CarFactory.molding);
console.log(CarFactory.tireInstall);
CarFactory.processToInstallDoors();

//Class Animal = inst ..walk. sea . bird ...

//Account

// let Account = function () {
//   console.log("Account created..");

// }

// let debitAccount = new Account();
// console.log(debitAccount);

/**
 1. accept the User and password
 2. store user name as it is in database
 3. password we should + encryption key..
 4. store the password to database
 5. function that will return that User and password stored correctly
 */

class UserAuthorization {
  //Make it private
  #encryptionKey = "256Key";
  constructor(userName, password) {
    this.userName = userName;
    this.password = password + "" + this.#encryptionKey;
  }
  //Create function to store UserName into database
  saveUserName() {
    console.log(this.userName + " Save into Database");
  }
  saveEncryptedPasswordInDB() {
    console.log(this.password + "Save into Database");
  }
  success() {
    console.log(
      this.userName + " " + this.password + "are stored into database"
    );
  }
}

let UserOne = new UserAuthorization("Test123", "somePassword");
console.log(UserOne);
UserOne.saveUserName();
console.log(UserOne.encryptionKey);
UserOne.saveEncryptedPasswordInDB();
UserOne.success();

//TODO About Private functions inside class with static and non-static value.