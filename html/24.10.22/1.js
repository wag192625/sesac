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

for (let i in people) {
  people2[people[i].name] = people[i];
  // console.log(people[i].name);
}
for (let i of people) {
  // console.log(i)
}

console.log(people2);
