//this is javascript code in test file..

/**
 * indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.

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

// Create new Array from original array with only even
// numbers

//find the even numbers and print into new Array..

// TDD Test Driven Development (Test First code later)

test("find Even numbers ", () => {
  expect(evenNumbers([12, 24, 45, 67, 86, 89, 24, 12])).toEqual([
    12,
    24,
    86,
    24,
    12,
  ]);
});

const evenNumbers = (array) => {
  //fill the even number into arr..
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arr.push(array[i]);
    }
  }
  console.log(arr);

  return arr;
};

//indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.

test("Verify the indexOf ", () => {
  expect(aboutIndexOf("JS")).toEqual(3);
});

const aboutIndexOf = (element) => {
  let result = ["C", "C++", "JAVA", "JS", "C++", "JS"];
  let indexNum = result.indexOf(element);
  console.log(indexNum);
  return indexNum;
};

test("Verify the lastIndexOf() ", () => {
  expect(
    aboutLastIndexOf(["C", "C++", "JAVA", "JS", "C++", "JS"], "JS")
  ).toEqual(5);
});

const aboutLastIndexOf = (array, element) => {
  let lastIndex = array.lastIndexOf(element);
  console.log(lastIndex);
  return lastIndex;
};

//find/filter(func) – filter elements through the function, return first/all values that make it return true.

// let points = [50,40,45,38,20] .filter value > 30
// result new Array [50,40,45,38]

//Unit test ??? what is the test??
// Functions call (args if any) result compare

test("Verify Array Filter function ", () => {
  expect(aboutFilter([50, 40, 45, 30, 20])).toEqual([50, 40, 45]);
});

function moreThen30(result) {
  return result > 30;
}

let filterArray = [50, 40, 45, 30, 20];

const aboutFilter = () => {
  let filterResult = filterArray.filter(moreThen30);
  console.log(filterResult);

  return filterResult;
};
