const arr = [1, 2, 3];

const newArr1 = [arr];
const newArr2 = [...arr];

// console.log(newArr1);
// console.log(newArr2);

const obj = {
  x: 1,
  y: 2,
  z: 3,
};

const newObj = { ...obj };
console.log(newObj);

const newObj2 = { ...obj, a: 4 };
console.log(newObj2);

const newObj3 = { ...obj, x: 100 };
newObj.x = 100;
console.log(newObj3);
