

console.log("====Number Object and Functions=====");


let value = 50;
console.log(typeof value);

//isFinite().. can be count as number 
console.log(Number.isFinite(value));

value = Infinity;
console.log(Number.isFinite(value));

value = 12.99;
console.log(value);

//integer means it's full number 
//float means it's number with decimal value..

console.log(Number.isInteger(value));

//toFix().. manage the decimal points
console.log(value.toFixed(1));
console.log(value.toFixed(4));


//parseInt()... parseFloat()...

value = "50";
console.log(typeof value);

//convert string into number..
console.log(Number.parseInt(value));

value = "50.99";
console.log(Number.parseFloat(value));

// Math Object....
console.log("=====Math Object Functions=======");

console.log(Math.sqrt(5));
console.log(Math.random());

//floor and ceil 
//floor will provide us lower value 
// ceil will provide highest value

let numOne = 4.66;
console.log(Math.floor(numOne));
console.log(Math.ceil(numOne));

//0.50  if less then lower if value more upper 
numOne = 4.49;
console.log(Math.round(numOne));
numOne = 4.55;
console.log(Math.round(numOne));

//abs()  //absolute
numOne = -33.99;
console.log(Math.abs(numOne));

























