//REVIEW
/**
 * Inheritance only applies to Super class to child class.
 * One super class can have multiple child class
 * Child can can have it's own variable and method which is not in super class
 * Child can only Inherit from one Super class
 */

class Animal {
  constructor(name) {
    this.name = name;
  }
  moveAnimal(moveType) {
    this.move = moveType;
    console.log(`This animal can move like: ${this.move}`);
  }

  eatAnimal(foodType) {
    this.eat = foodType;
    console.log(`This animal can eat : ${this.eat}`);
  }
}

// keyword extends..
// is -a relation or has -a relation
class Dog extends Animal {
  run(speed) {
    this.speed = speed;
    console.log("This dog can run: " + speed);
  }
}

let dogOne = new Dog("Dog");
console.log("dogOne", dogOne);
dogOne.moveAnimal("land Animal");
dogOne.eatAnimal("Dog Food");
dogOne.run(5);
console.log("dogOne", dogOne);

class Fish extends Animal {
  swim(swimSpeed) {
    this.swimSpeed = swimSpeed;
    console.log("This fish can swim: " + swimSpeed);
  }
}

let tuna = new Fish("Tuna fish");
tuna.eatAnimal("Sea food");
tuna.moveAnimal("Swim in Water");
tuna.swim(10);
console.log("tuna", tuna);

let goldFish = new Fish("Gold Fish");
goldFish.eatAnimal("Sea food");
goldFish.moveAnimal("Swim in Water");
goldFish.swim(2);
console.log("goldFish", goldFish);

//NOTE
/**
 * Client abcBank.com...
 * 1. Super Class (Account)
 * 1.1 Create Credit, Debit and Credit-Card account class
 * 1.2 User Methods from super class
 * 1.3 use keyword "super" in child class
 * 1.4 use methodOverRidding..
 */

class Account {
  constructor(accountName) {
    this.name = accountName;
  }

  withDraw(amount) {
    console.log("Request to withdraw amount: " + amount);
  }
  deposit(amount) {
    console.log("Request to deposit amount: " + amount);
  }

  onlineAccess(accessLevel) {
    console.log("Online Access level for this account is : " + accessLevel);
  }
}

class CreditAccount extends Account {
  constructor(name, accountType) {
    super(name);
    this.accountType = accountType;
  }

  payOffLoan(amount) {
    this.payOffAmount = amount;
    super.deposit(amount);
  }
}

let LoanOne = new CreditAccount("Car Loan Account", "Loan Account");
console.log("LoanOne", LoanOne);
LoanOne.payOffLoan(2000);
console.log("LoanOne", LoanOne);

//TODO
class DebitAccount extends Account {
  constructor(name, typeOfAccount) {
    super(name);
    this.typeOfAccount = typeOfAccount;
  }

  //Method OverRiding
  //Change in Method that which in super class
  deposit() {
    super.deposit(100);
    console.log("Money Has been deposit");
  }
}

let UserOneDebitAccount = new DebitAccount("UserOne", "Debit Account");
console.log("UserOneDebitAccount", UserOneDebitAccount);
console.log(UserOneDebitAccount.deposit());


class CreditCard extends Account {}
