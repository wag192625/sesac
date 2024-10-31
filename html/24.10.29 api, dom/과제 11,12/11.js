console.log('배열 원소 출력');

// - 변수 `arr` 을 선언하고, 아래 배열을 할당한다.
let arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// - 3가지 방법으로 배열의 원소를 출력한다.
// - 실행 결과
// for (let i of arr) {
//   console.log(i);
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let i in arr) {
//   console.log(arr[i]);
// }

console.log('배열 원소 거꾸로 출력');

// - 배열의 원소를 거꾸로 출력한다.
// - 실행 결과

// for (let i = arr.length; i > 0; i--) {
//   const popList = arr.pop();
//   console.log(popList);
// }
// for (let i = arr.length; i >= 0; i--) {
//   console.log(arr[i]);
// }

// cnt = arr.length;
// while (cnt > 0) {
//   cnt--;
//   console.log(arr[cnt]);
// }

// console.log('양수 출력');

// - 변수 `arr` 을 선언하고, 아래 배열을 할당한다.

arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// - 배열의 원소 중 양수만 출력한다.
for (let i of arr) {
  if (i > 0) {
    console.log(i);
  }
}

console.log('새로운 배열');
// - 배열의 원소 중 양수이면서 짝수인 원소만 모아서 **`새로운 배열`**을 만들어서 출력한다.
// - 실행 결과
//     [ 10, 44, 22, 20 ]
for (let i of arr) {
  if (i > 0 && i % 2 == 0) {
    console.log(i);
  }
}

console.log('배열 원소의 곱');

// - 배열의 모든 원소를 곱한 값을 출력한다.
// - 실행 결과
//     -541015200000
let num = 1;
for (let i of arr) {
  num *= i;
}
console.log(num);

console.log('마지막 홀수');
// - 배열의 원소 중 마지막으로 나온 홀수의 값을 출력한다.
// - 실행 결과
//     5
num = 0;
for (let i of arr) {
  if (i % 2) {
    num = i;
  }
}
console.log(num);

console.log('x 보다 큰 값');
// - 변수 `x` 를 선언하고, 임의의 숫자값을 할당한다.
// - 변수 `x` 를 출력한다.
let x = 7;
console.log(x);
// - 배열의 원소 중 변수 `x` 보다 큰 원소만 모아서 **`새로운 배열`** 을 만들어서 출력한다.
// - 실행 결과
numList = [];
//     5
for (i of arr) {
  if (x < i) {
    numList.push(i);
  }
}
console.log(numList);
//     [ 9, 10, 23, 44, 22, 20 ]
