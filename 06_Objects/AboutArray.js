/**
To add/remove elements:

push(...items) – adds items to the end,

pop() – extracts an item from the end,

shift() – extracts an item from the beginning,

unshift(...items) – adds items to the beginning.

splice(pos, deleteCount, ...items) – at index pos delete deleteCount elements and insert items.

slice(start, end) – creates a new array, copies elements from position start till end (not inclusive) into it.

concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.


To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.

includes(value) – returns true if the array has value, otherwise false.

find/filter(func) – filter elements through the function, return first/all values that make it return true.

findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.

sort(func) – sorts the array in-place, then returns it.

reverse() – reverses the array in-place, then returns it.

split/join – convert a string to array and back.

reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

Additionally:
Array.isArray(arr) checks arr for being an array.

*/

let numbers = [11, 22, 33, 44, 55, 66, 77, 88];
//[0,   1,  2,  3,  4,  5,  6,  7 ]
//delete 11 in numbers
console.log(typeof numbers);
// delete numbers[0];
// console.log(numbers);

//1.  splice(pos, deleteCount, ...items) – at index pos delete deleteCount elements and insert items.
console.log(numbers);
let updatedArray = numbers.splice(0, 3);
//New array
console.log(updatedArray);

//Original array
console.log(numbers);

/**
LI-LO
push(...items) – adds items to the end,
pop() – extracts an item from the end,

Fi-FO
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
 */

let result = (arrOne) => {
  //push
  console.log("Push method");

  arrOne.push("JS");
  console.log(arrOne);

  //pop
  console.log("Pop method");
  arrOne.pop(); //Automatically remove the last element
  console.log(arrOne);

  //unshift
  console.log("Unshift method");
  arrOne.unshift("HTML");
  console.log(arrOne);

  // shift
  console.log("shift method");
  arrOne.shift();
  console.log(arrOne);
};

result(["SomeNames"]);
result(["UserNames"]);

// slice([start], [end]) return new array with star to end (not including)

let arrTwo = ["t", "e", "s", "t"];
console.log(arrTwo);

console.log(arrTwo.slice(1, 3));

//combine two arrays into one...

let arryThree = [33, 23, 56, 78, 89, 89];
let arryFour = [12.99, 34.99];
console.log(arryThree.concat(arryFour));

// filter is function of Array Object..
//filter(functions)...
console.log("=====Demo of Filter function in Array");

let numberListArray = [23, 4, 5, 23, 5, 6, 8, 98, 10];
//remove number which is less then 5 ...

function aboutFilter() {
  let result = [];
  for (let i = 0; i < numberListArray.length; i++) {
    if (numberListArray[i] > 5) {
      result.push(numberListArray[i]);
    }
  }
  return result;
}

console.log(aboutFilter());

//filter(functions)...
function moreThan5(number) {
  return number > 5;
}
console.log(moreThan5(4));

let finalArray = () => {
  return numberListArray.filter(moreThan5);
};
console.log(finalArray());

//Filter the object ...

let UserNamesList = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

console.log(UserNamesList);

let upDatedList = UserNamesList.filter((user) => {
  return user.id < 3;
});

console.log(upDatedList);

// forEach(func) – calls func for every element, does not return anything. To transform the array

const array1 = ["a", "b", "c"];

const aboutForEach = () => {
  console.log("Demo of Foreach function");
  array1.forEach((element) => {
    console.log(element);
  });
};
aboutForEach();

//code Test...for forEach
const items = ["item1", "item2", "item3"];
const copyItems = [];

//Simple for loop /(without forEach function)
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }
// console.log(copyItems);

//with ForEach function
items.forEach(function (index) {
  copyItems.push(index);
});

console.log(copyItems);

//map(func) – creates a new array from results of calling func for every element.

console.log("======map() functions");

const arrayList = [1.99, 3.99, 5.99, 8.99];

// map with function
const newArrayList = arrayList.map(function (index) {
  return index * 2;
});

console.log(newArrayList);

const newArrayListRound = arrayList.map(Math.round);
console.log(newArrayListRound);

// sort(func) – sorts the array in-place, then returns it.
// sort function will return an array with ascending order

let aboutSort = [45, 5, 78, 14, 21, 6];
let nameListSort = ["Jan", "March", "Feb", "April"];
//This will sort based on first number...

aboutSort.sort((a, b) => {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
});
console.log(aboutSort);

nameListSort.sort((a, b) => {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
});
console.log(nameListSort);

//value of aboutSort is = [ 5, 6, 14, 21, 45, 78 ]
// reverse() – reverses the array in-place, then returns it.

aboutSort.reverse();
console.log(aboutSort);

// reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

let aboutReduce = [1, 2, 3, 4, 5];

let sumOfArray = aboutReduce.reduce((total, current) => { 
  return total * current;
});

console.log(sumOfArray);


