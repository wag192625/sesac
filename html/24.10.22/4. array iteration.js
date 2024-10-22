const names = ['jun', 'beemo', 'lynda'];

// for of
for (let name of names) {
  console.log(name);
}

console.log('-----------');

// for in
for (let index in names) {
  let name = names[index];
  console.log(name, index);
}

console.log('-----------');

// for
for (let i = 0; i < names.length; i++) {
  let name = names[i];
  console.log(name, i);
}

console.log('-----------');

// while
i = 0;
while (i < names.length) {
  let name = names[i];
  console.log(name, i);
  i++;
}

console.log('-----------');

// while + break
i = 0;
while (true) {
  let name = names[i];
  console.log(name, i);
  i++;
  if (i === names.length) break;
}
