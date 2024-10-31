console.log('---- 펼침 연산자- ------------');
// let arr = [1, 2, 3]

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arr1 = arr; // arr과 같은 주소값을 가짐
let arr2 = [...arr]; // arr의 각각의 요소의 주소값을 복사해감

console.log('----- ------------');
console.log(arr);
console.log(arr1); // arr과 같은 주소값을 가짐
console.log(arr2); // arr의 각각의 요소의 주소값을 가져감

console.log('----- ------------');
arr[1] = 100;

console.log(arr);
console.log(arr1);
console.log(arr2); //펼침

console.log('----- ------------');
arr[1][1] = 100;

console.log(arr);
console.log(arr1); // arr과 같은 주소값을 가지기에 2차원 배열에서도 주소를 타고 같은 값을 가지게 됨
console.log(arr2); // 각 요소의 주소값을 가져갔기에

// arr과 arr1은 똑같다고 생각
// arr에서 펼침 연산자[...]로 가져간
// arr2는 별개의 값을 가지게 됨

// arr2 = []
// for (let el of arr) {
//   arr2.push(el)
// } //와 같다고 생각하면 됨

console.log('----------------------');
console.log('-----구조분해할당-----');
console.log('----------------------');

const person = {
  name: '홍길동',
  age: 30,
  job: '개발자',
};

let { name, job, age } = person;

console.log(name); // '홍길동'
console.log(age); // 30
console.log(job); // '개발자'

console.log('----------------------');
console.log('-----단축프로퍼티-----');
console.log('----------------------');
name = 'jun';
age = 25;

const person1 = {
  name: name,
  age: age,
};

const person2 = {
  name, // name: name과 동일
  age, // age: age와 동일
};

console.log('-----------------------');
console.log('-----옵셔널 체이닝-----');
console.log('-----------------------');
let user = {
  name: '홍길동',
  address: {
    city: '서울',
  },
};

console.log(user?.name); // 홍길동
console.log(user?.address?.city); // 서울
console.log(user?.phone?.number); // undefined (속석이 없지만 오류 발생 X)
