console.log('배열 내 객체 출력하기 1');
// 아래 객체를 저장한 배열을 생성하고, 변수 todos 에 할당한다.
let todos = [
  {
    todoId: 1,
    content: '예습하기',
    isCompleted: false,
  },
  {
    todoId: 2,
    content: '강의듣기',
    isCompleted: false,
  },
  {
    todoId: 3,
    content: '복습하기',
    isCompleted: false,
  },
];

let answer1 = todos.forEach((arr) => {
  console.log(arr);
});

console.log('------------------------');

console.log('배열 내 객체 출력하기 2');
// - 아래 객체를 저장한 배열을 생성하고, 변수 `todos` 에 할당한다.
todos = [
  {
    todoId: 1,
    content: '예습하기',
    isCompleted: false,
  },
  {
    todoId: 2,
    content: '강의듣기',
    isCompleted: true,
  },
  {
    todoId: 3,
    content: '복습하기',
    isCompleted: true,
  },
];

// 적절한 배열 함수를 선택해서 배열 내 객체 중
// isCompleted 가 true 인 객체만 출력한다.

answer2 = todos.filter((arr) => {
  if (arr.isCompleted === true) {
    return arr;
  }
});

console.log(answer2);

console.log('------------------------');

console.log('이차원 배열 출력');

// - 아래 이차원 배열을 생성하고, 변수 `matrix` 에 할당한다.
matrix = [
  [4, 2],
  [3, 2],
  [5, 7],
  [10, 1],
];

// 적절한 배열 함수를 선택해서 내부 배열의 두 번째 원소만 출력한다.

answer3 = matrix.forEach((arr) => {
  console.log(arr[1]);
});

console.log('------------------------');

console.log('이차원 배열의 합');
// 아래 이차원 배열을 생성하고, 변수 `matrix` 에 할당한다.
matrix = [
  [4, 2],
  [3, 2],
  [5, 7],
  [10, 1],
];
// - 적절한 배열 함수를 선택해서 내부 배열의 원소 합이 짝수인 배열만 모아서
// - 새로운 이차원 배열을 생성한다.
// - 새로운 이차원 배열을 출력한다.
answer4 = matrix.forEach((arr) => {
  arrSum = arr[0] + arr[1];
  if (arrSum % 2 === 0) {
    console.log(arr);
  }
});
