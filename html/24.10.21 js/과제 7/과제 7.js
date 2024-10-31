// 배열의 반복문 1
// 아래와 같은 배열이 있을 때 배열의 원소를 출력하는 반복문을 작성한다.
arr = [1, 2, 3, 4, 5];

// 결과
// 1
// 2
// 3
// 4
// 5

for (let i of arr) {
  console.log(i);
}

console.log('------------------');
// 배열의 반복문 2
// 아래와 같은 배열이 있을 때 각 원소의 제곱을 출력하는 반복문을 작성한다.
arr = [1, 2, 3, 4, 5];

// 결과
// 1
// 4
// 9
// 16
// 25

for (let i of arr) {
  console.log(i * i);
}

console.log('------------------');
// 배열의 반복문 3
// 아래와 같은 배열이 있을 때 원소가 짝수면 출력하는 조건문과 반복문을 작성한다.
arr = [0, 1, 2, 3, 4, 5];

// 결과
// 2
// 4

for (let i of arr) {
  if (i % 2 == 0 && i != 0) {
    console.log(i);
  }
}

console.log('------------------');
// 객체의 반복문 1
// 아래와 같은 객체가 있을 때 객체의 키와 값을 출력하는 반복문을 작성한다.
let person = {
  name: '홍길동',
  age: 30,
  job: '개발자',
};
// 결과
// name, 홍길동
// age, 30
// job, 개발자

for (let i in person) {
  let value = person[i];
  console.log(`${i}, ${value}`);
}
