console.log("====Map and Set Object====");

let Car = {
  model: "Provide Model Name",
  color: "Car Color",
  engineType: "Provide type of engine",
  fun: function () {
    console.log("Some details about car");
  },
};

let carOne = Car;
carOne.model = "Model x";
carOne.color = "Red";
carOne.engineType = "V8";
carOne.fun();
console.log(carOne);

console.log(Object.keys(Car));
console.log(Object.values(Car));
console.log(Car);
console.log(Object.entries(Car));

//log total income of the company??

let Income = {
  John: 100,
  Mary: 200,
  Pete: 300,
};

let sizeOfObject = Object.keys(Income).length;
console.log("sizeOfObject", sizeOfObject);

function sumOfIncome(obj) {
  let total = 0;
  for (const index of Object.values(obj)) {
    total += index;
  }

  // TODO work on the solution
  // NOTE find the answer.
  // FIXME ...
  // REVIEW please review
  // for (let i = 0; i < Object.keys(obj).length; i++) {
  //   total += Object.values(obj).reduce((a, b) => {
  //     return a + b;
  //   });
  // }

  return total;
}

console.log(sumOfIncome(Income));

// we have duplicate keys

let user = {
  id: 101,
  name: "TestUser",
  id: 102,
  name: "TestUser Two",
};

console.log(user);

//Map object
//Map is collection of Object

let demoMap = new Map();
console.log("demoMap", demoMap);

//set and get....
demoMap.set("ID", 101);
console.log("demoMap", demoMap);
demoMap.set("Name", "Map User");
console.log("demoMap", demoMap);
console.log(demoMap.get("ID"));
console.log(demoMap.get("Name"));

console.log(demoMap.size);


/**

//TODO
 new Map object called foodItems...
 set three key and values
 cucumber = 500, tomatoes = 350, onion = 50;
 print only keys 
 print only values 

*/

//REVIEW
const result = (foodItems) => {
  foodItems = new Map();
  foodItems.set("cucumber", 500).set("tomatoes", 350).set("onion", 50);
  console.log("foodItems", foodItems);
  for (const key of foodItems.keys()) {
    console.log(key);
  }
  for (const price of foodItems.values()) {
    console.log(price);
  }
  for (const fullItem of foodItems.entries()) {
    console.log(fullItem);
  }
};
result();

/**
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count. */
