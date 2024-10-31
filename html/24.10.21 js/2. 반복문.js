// 반복문;
const names = ['jun', 'beemo', 'lynda'];

// let name = 'jun';
// console.log(`안녕 ${name}`);
//// console.log(`안녕 ${names[0]}`);

// name = 'beemo';
// console.log(`안녕 ${name}`);
//// console.log(`안녕 ${names[1]}`);

// name = 'lynda';
// console.log(`안녕 ${name}`);
//// console.log(`안녕 ${names[2]}`);

// for (let key in object) {
//   key를 변수로 활용
// }

const person = {
  name: 'jun',
  age: 18,
  gender: 'M',
};

for (let i in person){
  console.log(i)
}

// for (let key in person) {
//   console.log(key);
//   let value = person[key];
//   console.log(value);
// }

// for (let index in names) {
//   let name = names[index];
//   console.log(`안녕 ${name}`);
// }

// 1. 하고 싶은 동작을 나열
// 2. 규칙성을 찾는다.
// 3. 변화하는 규칙성을 container에 담는다.
// 4. container에서 하나씩 꺼내다가 하고싶은 동작을 실행

// // key : Object의 키값
// for (let key in Object) {
//   // 여기에 있는 코드를 반복적으로 실행시킵니다.
//   // 단, key가 계속 변화합니다.
//   // 여기서 하고 싶은 것은 key를 반복적으로 할당하고,
//   // 그 key를 사용해서 어떤 코드를 실행하는 겁니다.
// }
