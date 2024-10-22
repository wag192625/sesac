// 1. 1부터 N까지 출력 1

// - 변수 `N` 을 선언하고, 임의의 숫자형 값을 할당한다.
// - 변수 `N` 의 값을 출력한다.
// - 1부터 `N` 까지 출력하는 `for` 반복문을 작성한다.
// - 실행 결과
// 5
// 1
// 2
// 3
// 4
// 5
let N = 5;
for (i = 1; i <= 5; i++) {
  if (i === 1) {
    console.log(N);
  }
  console.log(i);
}

console.log('--------------------------');

// ### 1부터 N까지 출력 2

// - 변수 `N` 을 선언하고, 임의의 숫자형 값을 할당한다.
// - 변수 `N` 의 값을 출력한다.
// - 1부터 `N` 까지 출력하는 `while` 반복문을 작성한다.
// - 실행 결과
// 5
// 1
// 2
// 3
// 4
// 5
N = 5;
cnt = 1;
while (cnt <= N) {
  if (cnt === 1) {
    console.log(N);
  }
  console.log(cnt);
  cnt++;
}

console.log('--------------------------');

// ### 1부터 N까지의 합

// - 변수 `N` 을 선언하고, 임의의 숫자형 값을 할당한다.
// - 변수 `total` 을 선언하고, `0` 을 할당한다.
// - 변수 `N` 의 값을 출력한다.
// - 1부터 `N` 까지의 숫자를 변수 `total` 에 더하는 반복문을 작성한다.
// - 변수 `total` 의 값을 출력한다.
// - 실행 결과

//     5
//     15
N = 5;
total = 0;

for (let i = 1; i <= 5; i++) {
  if (i === 1) {
    console.log(N);
  }
  total += i;
  if (i === 5) {
    console.log(total);
  }
}

console.log('--------------------------');

// ### 짝수의 합

// - 변수 `N` 을 선언하고, 임의의 숫자형 값을 할당한다.
// - 변수 `total` 을 선언하고, `0` 을 할당한다.
// - 변수 `N` 의 값을 출력한다.
// - 1부터 `N` 까지의 숫자 중 짝수만 변수 `total` 에 더하는 반복문을 작성한다.
// - 변수 `total` 의 값을 출력한다.
// - 실행 결과

//     ```bash
//     5
//     6
//     ```

N = 5;
total = 0;
for (let i = 0; i <= N; i++) {
  if (i == 0) {
    console.log(N);
  }
  if (i % 2 == 0) {
    total += i;
  }
}
console.log(total);

console.log('--------------------------');

// ### 짝수의 개수

// - 변수 `N` 을 선언하고, 임의의 숫자형 값을 할당한다.
// - 1부터 `N` 까지의 숫자 중 짝수의 개수를 구하는 반복문을 작성한다.
// - 짝수의 개수를 출력한다.
// - 실행 결과

//     5
//     2
N = 5;
cnt = 0;

for (let i = 1; i <= N; i++) {
  if (i === 1) {
    console.log(N);
  }
  if (i % 2 == 0) {
    cnt += 1;
  }
}
console.log(cnt);

console.log('--------------------------')

// ### 반복문 제어

// - 아래와 같은 배열이 있을 때 배열의 원소를 출력하는 반복문을 작성한다.
//     - 원소가 짝수라면 원소를 출력하지 않고, 반복문을 즉시 종료한다.
let arr = [1, 9, 3, 11, 4, 5, 2, 7]

// - 실행 결과

//     1
//     9
//     3
//     11
for (i of arr) {
    if (!(i % 2)) {
        break
    }
    console.log(i)
}
console.log('--------------------------')


// # 과제-2

// ### 객체와 배열 1

// - 변수 `todos` 를 선언하고, 빈 배열을 할당한다.
// - 아래 객체 정보를 기반으로 생성한 객체 3개를 변수 `todos` 에 추가한다.
// - 객체 정보

//     ```json
//     {
//       "todoId": 1,
//       "content": "예습하기",
//       "isCompleted": false
//     },
//     {
//       "todoId": 2,
//       "content": "강의듣기",
//       "isCompleted": false
//     },
//     {
//       "todoId": 3,
//       "content": "복습하기",
//       "isCompleted": false
//     }
//     ```

// - 변수 `todos` 를 출력한다.
// - 실행 결과

//     ```bash
//     [
//       { todoId: 1, content: '예습하기', isCompleted: false },
//       { todoId: 2, content: '강의듣기', isCompleted: false },
//       { todoId: 3, content: '복습하기', isCompleted: false }
//     ]
//     ```

// ### 객체와 배열 2

// - 위 문제에서 만들어진 변수 `todos` 를 활용한다.
// - 배열에 저장된 객체의 키 `content` 와 `isCompleted` 의 값을 출력하는 반복문을 작성한다.
// - 실행 결과

//     ```bash
//     content: 예습하기, isCompleted: false
//     content: 강의듣기, isCompleted: false
//     content: 복습하기, isCompleted: false
//     ```

// ### 객체와 배열 3

// - 위 문제에서 만들어진 변수 `todos` 를 활용한다.
// - 배열에 저장된 객체를 순회하는 반복문을 작성한다.
//     - 키 `todoId` 의 값이 `2` 인 객체를 찾아서 출력하는 조건문을 작성한다.
// - 실행 결과

//     ```bash
//     { todoId: 2, content: '강의듣기', isCompleted: false }
//     ```

// ### 객체와 배열 4

// - 위 문제에서 만들어진 변수 `todos` 를 활용한다.
// - 배열에 저장된 객체를 순회하는 반복문을 작성한다.
//     - 키 `todoId` 의 값이 `2` 인 객체의 키 `isCompleted` 의 값을 `true` 로 수정하는 조건문을 작성한다.
// - 변수 `todos` 를 출력한다.
// - 실행 결과

//     ```bash
//     [
//       { todoId: 1, content: '예습하기', isCompleted: false },
//       { todoId: 2, content: '강의듣기', isCompleted: true },
//       { todoId: 3, content: '복습하기', isCompleted: false }
//     ]
//     ```
