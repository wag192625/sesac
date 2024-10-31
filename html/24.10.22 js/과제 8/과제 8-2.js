// # 과제-2

const { constant, values, times } = require('lodash');

// ### 객체와 배열 1

// - 변수 `todos` 를 선언하고, 빈 배열을 할당한다.
// - 아래 객체 정보를 기반으로 생성한 객체 3개를 변수 `todos` 에 추가한다.
// - 객체 정보
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

// - 변수 `todos` 를 출력한다.
// - 실행 결과
//     [
//       { todoId: 1, content: '예습하기', isCompleted: false },
//       { todoId: 2, content: '강의듣기', isCompleted: false },
//       { todoId: 3, content: '복습하기', isCompleted: false }
//     ]
console.log(todos);

console.log('---------------------------------');

// ### 객체와 배열 2

// - 위 문제에서 만들어진 변수 `todos` 를 활용한다.
// - 배열에 저장된 객체의 키 `content` 와 `isCompleted` 의 값을 출력하는 반복문을 작성한다.
// - 실행 결과

//     content: 예습하기, isCompleted: false
//     content: 강의듣기, isCompleted: false
//     content: 복습하기, isCompleted: false

title = [];
console.log(`2번문제`);
for (key in todos) {
  // cnt = 0;
  console.log(
    'content: ',
    todos[key].content,
    'isCompleted: ',
    todos[key].isCompleted
  );

  
  // console.log(key);
  // console.log(todos[key].content, todos[key].isCompleted);
  // console.log(key);
  // for (value in todos[key]) {
  //   if (cnt === 0) {
  //     cnt++;
  //     continue;
  //   }
  //   console.log(todos[key].content);
  //   cnt++;
  //   // title = value
  //   // console.log(title);

  // }
}

console.log('---------------------------------');
console.log('3번 문제');

// ### 객체와 배열 3

// - 위 문제에서 만들어진 변수 `todos` 를 활용한다.
// - 배열에 저장된 객체를 순회하는 반복문을 작성한다.
//     - 키 `todoId` 의 값이 `2` 인 객체를 찾아서 출력하는 조건문을 작성한다.
// - 실행 결과

//     { todoId: 2, content: '강의듣기', isCompleted: false }
for (key in todos) {
  if (todos[key].todoId == 2) {
    console.log(todos[key]);
  }
}

console.log('---------------------------------');
// ### 객체와 배열 4

// - 위 문제에서 만들어진 변수 `todos` 를 활용한다.
// - 배열에 저장된 객체를 순회하는 반복문을 작성한다.
//     - 키 `todoId` 의 값이 `2` 인 객체의 키 `isCompleted` 의 값을 `true` 로 수정하는 조건문을 작성한다.
// - 변수 `todos` 를 출력한다.
// - 실행 결과

//     [
//       { todoId: 1, content: '예습하기', isCompleted: false },
//       { todoId: 2, content: '강의듣기', isCompleted: true },
//       { todoId: 3, content: '복습하기', isCompleted: false }
//     ]

for (key in todos) {
  if (todos[key].todoId == 2) {
    // console.log(todos[key].todoId)
    todos[key].isCompleted = true;
  }
}
console.log(todos);
