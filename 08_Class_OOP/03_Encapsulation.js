//REVIEW
/**
 * 1. Private vs Protected Property/variable
 * 2. GET Method
 * 3. SET Method
 */
//Class call Phone..

class Phone {
  appQty = 0;
  constructor(batteryLevel) {
    this.power = batteryLevel;
  }
}
let Iphone = new Phone(80);
console.log("Iphone", Iphone);
Iphone.appQty = 20;
console.log("Iphone", Iphone);

let Samsung = new Phone(88);
Samsung.appQty = 25;
console.log("Samsung", Samsung);

//NOTE Encapsulation Do not allow the class variable to access directly to the instance
// make the variable protected and only allow to access via GET and SET method

class Employee {
  // for private variable use (#) for protected we can use(_)
  _empDept = "";
  constructor(id) {
    this.id = id;
  }

  set empDept(deptName) {
    this._empDept = deptName;
  }
  get empDept() {
    return this._empDept;
  }
}
let empOne = new Employee(101);
empOne.empDept = "IT";
console.log("empOne", empOne);
console.log(empOne.empDept);

let empTwo = new Employee(102);
empTwo.empDept = "Marketing";
console.log("empTwo", empTwo);

class AboutArray {
  numberList = [25, 45];

  //we want to create method what will display last element of an array..
  get lastElement() {
    if (this.numberList.length === 0) {
      return "There are no numbers in Array";
    }
    return this.numberList[this.numberList.length - 1];
  }

  set addElement(element) {
    this.numberList.push(element);
  }
}

let lastNum = new AboutArray();
console.log("lastNum", lastNum.lastElement);
lastNum.addElement = 35;
console.log("lastNum", lastNum)
console.log(lastNum.lastElement);

