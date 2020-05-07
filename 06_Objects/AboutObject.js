console.log("=====Server is running AboutObject.js file======");

/**
1. javaScript object ?
2. Object functions
3. how to assign function as object
4. this keyword
5. Constructor = new keyword
*/

// let user = new Object(); // Object with constructor call
// let userOne = {};

// let name = "someName";
// console.log(typeof name);

let user = {
  // we have create an object call user
  name: "John", // we have created key = name and value = John
  age: 33, // we have created key = age and value = 33
  isAdmin: true, // this is isAdmin key
};

console.log(user); // full object will print
console.log(user.name); // this will only print the name value
console.log(user.age); // this will only print the age value
console.log(user.isAdmin); // will print boolean value

// verify the key inside the object
console.log("age" in user);
console.log("Date" in user);

// how to change/update value of object key??
console.log(user);
user.isAdmin = false;
console.log(user);

//how to delete the key...
delete user.isAdmin;
console.log(user);

let id = Symbol("&");
console.log(id);
console.log(id.toString());

// we can object that has function inside the object.
// keyword function is not allowed inside object
// this means object it's self
let studentInfo = {
  // this keyword only act as local variable and can not referenced from outside of object scope
  id: 101,
  name: "Student FullName",
  address: "100 Main St",
  department: "Software Developer",

  getStudentInfo() {
    console.log((this.id = 102)); // studentInfo.id
    console.log(this.name);
    console.log(this.address);
    console.log(this.department);
  },
};

console.log(studentInfo);
console.log(studentInfo.name);
studentInfo.getStudentInfo();

//wih object we create all the data...

//create employee recorded in database

let employee = function (empId, empName, empAddress, empDepartment) {
  this.id = empId; // framework number
  this.name = empName;
  this.address = empAddress;
  this.department = empDepartment;
};

let employeeOne = new employee(101, "Mark Miller", "100 Main st", "IT");
let employeeTwo = new employee(102, "John Wick", "200 main st", "Marketing");

console.log(employeeOne);
console.log(employeeTwo);

// UUID === generates new unique every time.. data

/**
1. Create object called CarFactory = ( model, color, engineType, )
3. Car object by calling CarFactory object and all three cars must have different attributes 
...
*/

/** 
Code Test
Create an object calculator with three functions:
1. read() prompts for two values and saves them as object properties.
2. sum() returns the sum of saved values.
3. mul() multiplies saved values and returns the result.
*/

// just by creating object

let calculator = {
  sum(a, b) {
    (this.a = a), (this.b = b);
    return a + b;
  },
  mul(a, b) {
    this.a = a;
    this.b = b;
    return a * b;
  },
};

console.log(calculator.sum(20, 20));
console.log(calculator.mul(5, 5));

//Write the function and inside object

/**
 Create the object called "Counter"
 call Counter.up() it should increases counter value,
 call Counter.down() it should decreases counter value,
 show the final counter value..
*/

let Counter = {
  point: 0,
  up: function () {
    this.point++;
    return this;
  },
  down: function () {
    this.point--;
    return this;
  },
  showPoints: function () {
    console.log(this.point);
    return this;
  },
};

// Counter.up();  //1
// Counter.up();  //2
// Counter.down(); // -1
// Counter.showPoints(); //1
// Counter.down();
// Counter.down();
// Counter.down();
// Counter.showPoints(); // -2


//Method/function chaining 
Counter.up().down().up().showPoints();
Counter.down().up().down().up().up().up().showPoints().up().showPoints();
