/* const ages = [1, 3, 4, 6, 7]; */

// ages.forEach.call(items => {}); //we do stuff

// ages.filter(item => item(23));

// const allAbove = ages.every(item => item > 23);

// iterate
// arrays[0];

// objects for in;

/* const name = "Jonas";

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

console.log(car2); */

////////////////////////////////////////////////////////////////////////

/* OPGAVE 1 */

const age = 42;
const email = "jofh@kea.dk";

/* if (age % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
} */

/* let isEven = age % 2 === 0 ? true : false; */

/* let role = "visitor";
if (email === "jofh@kea.dk") {
  if (age > 40) {
    role = "admin";
  }
} */

/* let role = email === "jofh@kea.dk" && age > 40 ? "admin" : "visitor"; */

////////////////////////////////////////////////////////////////////////

/* OPGAVE 2 */

const setTitle = title => (document.title = title);

const isEven = number => (number % 2 === 0 ? true : false);

const getRandBetween1and10 = () => Math.floor(Math.random() * 10) + 1;

////////////////////////////////////////////////////////////////////////

/* OPGAVE 3 */

const movies = [
  {
    name: "Hard Boiled",
    genre: "Hong Kong Action",
  },
  {
    name: "LOTR",
    genre: "Fantasy",
  },
];

movies.forEach(movie => console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`));

////////////////////////////////////////////////////////////////////////

/* OPGAVE 4 */

const searchengines = [
  { target: "https://google.com", name: "Google" },
  { target: "https://bing.com", name: "Bing" },
];
let links = searchengines.map(link => `<a href="${link.target}">${link.name}</a>`);

////////////////////////////////////////////////////////////////////////

/* OPGAVE 5 */

const names = ["Jonas", "Dannie", "Peter", "Klaus"];

const myBadCopy = names;

myBadCopy[1] = "Jachob";

console.log(names);
console.log(myBadCopy);

const myGoodCopy = [...names];

names[1] = "Jachob";

console.log(names);
console.log(myGoodCopy);

////////////////////////////////////////////////////////////////////////

/* OPGAVE 6 */

const me = {
  name: "Jonas",
  age: 43,
  kids: 3,
};

const meCopy = me;

const meCopy2 = { ...me, kids: 2 };

////////////////////////////////////////////////////////////////////////

/* OPGAVE 8 */

const personCard = ({ name, phone, eMail }) => `<div class="person">
<h2>${name}</h2>
<ul>
    <li><a href="tel:+${phone}">Call</a></li>
    <li><a href="mailto:${eMail}">E-mail</a></li>
</ul>
</div>`;

const myPerson = {
  name: "Clark Kent",
  marriage: null,
  glasses: true,
  phone: 911,
  street: "secret",
  eMail: "clark@dailyplanet.com",
};

const { name, marriage, glasses, phone, street, eMail } = myPerson;

console.log(personCard(myPerson));

////////////////////////////////////////////////////////////////////////

/* OPGAVE 9 */

const getNums = () => [Math.random(), Math.random(), Math.random(), Math.random()];

let randomNums = getNums();

const [first, second, ...rest] = randomNums;

console.log(randomNums);

console.log("First number:", first, "Second number:", second);
