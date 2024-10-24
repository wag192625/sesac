// 배열 생성
// 변수 arr 을 선언하고, 아래 배열을 할당한다.
// [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20]

let arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

console.log('양수 출력');
// - 첫 문제에서 만들어진 변수 `arr` 을 활용한다.
// - 배열 함수 `forEach()` 를 활용하여 배열에서 양수만 출력한다.
// - 실행 결과

answer1 = arr.forEach((num) => {
  if (num > 0) {
    console.log(num);
    // return num;
  }
});

console.log('곱하기 2');
// - 첫 문제에서 만들어진 변수 `arr` 을 활용한다.
// - 배열 함수 `map()` 를 활용하여 각 원소에 곱하기 2를 한 값을 모은 새로운 배열을 만들고 출력한다.
// - 실행 결과
answer2 = arr.map((num) => {
  return num * 2;
});
console.log(answer2);

console.log('양수 홀수 배열');
// - 첫 문제에서 만들어진 변수 `arr` 을 활용한다.
// - 배열 함수 `filter()` 를 활용하여 양수이면서 홀수인 원소만 모은 새로운 배열을 만들고 출력한다.
// - 실행 결과
answer3 = arr.filter((num) => {
  if (num > 0 && !(num % 2)) {
    return num;
  }
});
console.log(answer3);

console.log('첫 번째 5의 위치 찾기');
// - 첫 문제에서 만들어진 변수 `arr` 을 활용한다.
// - 배열 함수 `findIndex()` 를 활용하여 첫 번째로 나오는 5의 위치(index)를 출력한다.

answer4 = arr.findIndex((num) => {
  return num === 5;
});

console.log(answer4);
