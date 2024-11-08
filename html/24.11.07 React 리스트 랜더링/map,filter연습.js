const arr1 = [1, 2, 3, 4, 5];
// 를 활용하여
const newArr1 = [1, 4, 9, 16, 25];
// 를 만들어보자.
// map
arr1List = [];
// arr1.forEach((el) => {
//   num = el * el;
//   arr1List.push(num);
// });
// console.log(arr1List);

arr1.map((el) => {
  num = el * el;
  arr1List.push(num);
  return arr1List;
});
console.log(arr1List);

// filter
// [x, y, z] => f(x), f(y), f(z) => [x,z]
///////////////////////////////////////////////////////////////////////////////////////

const arr2 = ['1', '2', '3', '4', '5'];
// 를 활용하여
// const newArr2 = [1, 2, 3, 4, 5];
// 를 만들어보자.
const newArr2 = arr2.map((el) => Number(el));
console.log(newArr2);
///////////////////////////////////////////////////////////////////////////////////////

const arr3 = [
  {
    name: 'jun',
    age: 18,
  },
  {
    name: 'alex',
    age: 28,
  },
  {
    name: 'ken',
    age: 38,
  },
];
// 를 활용하여
// const newArr3 = [18, 28, 38];
// 를 만들어보자.
const newArr3 = arr3.map((el) => {
  // age = el.age;
  return el.age;
});
console.log(newArr3);
///////////////////////////////////////////////////////////////////////////////////////

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 를 활용하여
// 짝수만 들어있는 array를 만들어보자.

// 짝수이면서 5이상인 숫자만 들어있는 array를 만들어보자.
// const arr4List1 = [];
const arr4List1 = arr4.filter((el) => {
  return el % 2 === 0;
});
console.log(arr4List1);
const arr4List2 = arr4.filter((el) => {
  return el % 2 === 0 && el >= 5;
});
console.log(arr4List2);
///////////////////////////////////////////////////////////////////////////////////////

const arr5 = [
  {
    name: 'jun',
    age: 18,
  },
  {
    name: 'alex',
    age: 28,
  },
  {
    name: 'ken',
    age: 38,
  },
  {
    name: 'beemo',
    age: 48,
  },
  {
    name: 'lynda',
    age: 8,
  },
];
const arr5List1 = arr5.filter((el) => {
  return el.age <= 30;
});
console.log(arr5List1);
// 를 활용하여
// age가 30 이하인 사람들의 정보가 담긴 array를 만들어보자.

// 를 활용하여
// age가 30 이하인 사람들의 이름이 담긴 array를 만들어보자.
