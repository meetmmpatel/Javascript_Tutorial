console.log("=======This is Object functions file =========");

/**
  Object Functions
  1. assign()
  2. create()
  3. entries();
  4. freeze();
  5. is();
  6. keys();
  7. values();
*/

// 1. assign() functions will create key as args to other objects
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

console.log(target);
console.log(source);

// Return object
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);

//two const empPersonalInfo and empWorkInfo... new object empFullDetails

const empPersonalInfo = {
  name: "Employee One",
  Address: "100 Main St",
};

const empWorkInfo = {
  id: 101,
  dept: "IT-Support",
};

const empFullDetails = Object.assign(empPersonalInfo, empWorkInfo);
console.log(empFullDetails);
console.log(empPersonalInfo);

//2. create()  == Will create new object from existing object

const user = {
  isAdmin: false,
  printAdminAccess: function () {
    console.log(`${this.name} User is Admin Role: ${this.isAdmin}`);
  },
};

const empOne = Object.create(user);
console.log(empOne);
empOne.isAdmin = true;
empOne.name = "Mark Miller";
empOne.printAdminAccess();

//3. entries();  to get an access to object keys as an array value

const priority = { 1: "High", 2: "Medium", 3: "Low" };
console.log(Object.entries(priority)[1]);

//4. freeze() // function will make object not mutable/ change

const obj = { id: 101 };
Object.freeze(obj);
obj.id = 105;
console.log(obj.id);

//is()... will compare two object is provide the answer in true/ false
// === OR is(); for object

console.log(Object.is(45, 45)); //true
console.log(Object.is(12, "12"));

// This will not compare two objects only the values can be compare
const a = { a: true };
const b = { a: true };
// console.log(Object.is(Object.values(a), Object.values(b)));

// keys() // print the key names
// values // print the values

const nameList = {
  userOne: "Mike",
  userTwo: "James",
  userThree: "Josh",
};

console.log(Object.keys(nameList));
console.log(Object.values(nameList));

const numbers = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

// For in loop (Works with array as well);

for (const [i, val] of Object.entries(numbers)) {
  console.log(`Key ${i} and value ${val}`);
}

// forEach method
Object.entries(numbers).forEach(function (index) {
  console.log(index);
});

let firstName = "Josh";
let lastName = "Smith";
console.log("This is fullName: " + firstName + lastName);
firstName = "Mike";
console.log("This is fullName: " + firstName + lastName);


fName = "James";
lName = "Wick";
let fullName = `This is my Full Name using args ${fName} ${lName}`;
// function fullName(fName,lName) { 
//   return fName + lName
// }
// console.log(fullName(fName, lName));
console.log(fullName);


