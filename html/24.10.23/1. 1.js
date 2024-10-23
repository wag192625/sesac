people = [
  {
    name: 'jun',
    age: 15,
    gender: 'M',
  },
  {
    name: 'ken',
    age: 26,
    gender: 'F',
  },
  {
    name: 'alex',
    age: 37,
    gender: null,
  },
];
people2 = {};

// const person.name;
const objectPeople = {};

// objectPeople[name] = person
for (const person of people) {
  const name = person.name;
  objectPeople[name] = person;
}

console.log('---------------------');

const names = ['j', 'k', 'a'];
const ages = [10, 20, 30];
const genders = ['m', 'f', null];

const arrayPeople = [
  ['j', 'k', 'a'],
  [10, 20, 30],
  ['m', 'f', null],
];

names < -arrayPeople[0];
'k' < -names[1] < -arrayPeople[0][1];
