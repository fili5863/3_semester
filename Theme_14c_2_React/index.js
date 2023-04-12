const ages = [1, 3, 4, 6, 7];

// ages.forEach.call(items => {}); //we do stuff

// ages.filter(item => item(23));

// const allAbove = ages.every(item => item > 23);

// iterate
// arrays[0];

// objects for in;

const name = "Jonas";

name[0];

const els = document.querySelectorAll("p");

// splitting strings/arrays

const ar1 = [1, 2, 3];
const myCopy = [...ar1]; // [1,2,3]

// Concatenating arrays

const ar11 = [1, 2];
const ar12 = [3, 4];
const ar2 = [...ar11, ...ar12];

// spreading objects

const car = { name: "peugeot", model: "5008" };
const car2 = { ...car, wheels: 4, model: 308 };

console.log(car2);
