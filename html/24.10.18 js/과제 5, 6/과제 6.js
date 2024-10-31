// 숫자 크기 비교 1
// 변수 number_1 을 선언하고, 임의의 숫자형 값을 할당한다.
// 변수 number_1 의 값을 출력한다.
// 변수 number_1 가 숫자 10보다 작은지 확인하는 조건문을 작성한다.
// 숫자 10보다 작으면 “number_1은 10보다 작다.”를 출력한다.
// 실행 결과
// 9
// number_1은 10보다 작다.
// ​
// 10

// let number_1 = 4;
// console.log(number_1);
// if (number_1 < 10) {
//   console.log('number_1은 10보다 작다.')
// }

// --------------------------------------

// 짝수
// 변수 number_2 을 선언하고, 임의의 숫자형 값을 할당한다.
// 변수 number_2 의 값을 출력한다.
// 변수 number_2 를 2로 나눈 나머지가 0 인지 확인하는 조건문을 작성한다.
// 2로 나눈 나머지가 0 이면 “짝수”를 출력한다.
// 실행 결과
// 2
// 짝수
// ​
// 1

// let number_2 = 8;
// console.log(number_2);
// if (number_2 % 2 == 0) {
//   console.log('짝수');
// } else {
//   console.log('홀수');
// }

// --------------------------------------

// 자료형 확인
// 변수 variable 을 선언하고, 임의의 값을 할당한다.
// 변수 variable 의 값을 출력한다.
// 변수의 자료형이 number 인지 확인하는 조건문을 작성한다.
// 변수의 자료형이 number 라면 “숫자형”을 출력한다.
// 실행 결과
// 2
// 숫자형
// ​
// Hello World

// ★
let variable = 14;
console.log(variable);
// console.log(typeof variable);

if (typeof variable === 'number') {
  console.log('숫자형');
}

// --------------------------------------
// 숫자 크기 비교 2
// 변수 number_3 을 선언하고, 임의의 숫자형 값을 할당한다.
// 변수 number_3 의 값을 출력한다.
// 변수 number_3 가 숫자 10과 비교하는 조건문을 작성한다.
// 숫자 10보다 작으면 “number_3은 10보다 작다.”를 출력한다.
// 숫자 10보다 크면 “number_3은 10보다 크다.”를 출력한다.
// 실행 결과
// 9
// number_3은 10보다 작다.
// ​
// 11
// number_3은 10보다 크다.
// ​
// 10

// let number_3 = 34;
// console.log(number_3);

// if (number_3 < 10) {
//   console.log('number_3은 10보다 작다.');
// } else {
//   console.log('number_3은 10보다 크다.');
// }

// --------------------------------------

// 합격 / 불합격
// 변수 score 를 선언하고, 임의의 숫자형 값을 할당한다.
// 변수 score 의 값을 출력한다.
// 변수 score 가 60과 비교하는 조건문을 작성한다.
// 60 이상이면  “합격”을 출력한다.
// 60 미만이면 “불합격”을 출력한다.
// 실행 결과
// 60
// 합격
// ​
// 59
// 불합격

let score = 21;
console.log(score);

if (score >= 60) {
  console.log('합격');
} else if (score < 60) {
  console.log('불합격');
}

// --------------------------------------

// 숫자 크기 비교 3

// - 변수 `number_4` 을 선언하고, 임의의 숫자형 값을 할당한다.
// - 변수 `number_4` 의 값을 출력한다.
// - 변수 `number_4` 가 숫자 10과 비교하는 조건문을 작성한다.
//     - 숫자 10보다 작으면 “number_1은 10보다 작다.”를 출력한다.
//     - 숫자 10보다 크면 “number_1은 10보다 크다.”를 출력한다.
//     - 숫자 10과 같으면 “number_1은 10이다” 를 출력한다.
// - 실행 결과

//     9
//     number_1은 10보다 작다.

//     11
//     number_1은 10보다 크다.

//     10
//     number_1은 10이다

// let number_4 = 9;
// console.log(number_4);

// if (number_4 < 10) {
//   console.log('number_1은 10보다 작다.');
// } else if (number_4 > 10) {
//   console.log('number_1은 10보다 크다.');
// } else if (number_4 === 10) {
//   console.log('number_1은 10이다.');
// }

// --------------------------------------

//  숫자 크기 비교 4

// - 변수 `number_5` 을 선언하고, 임의의 숫자형 값을 할당한다.
// - 변수 `number_5` 의 값을 출력한다.
// - 변수의 자료형이 `number` 인지 확인하는 조건문을 작성한다.
//     - 자료형이 `number` 라면 숫자 10과 크기 비교를 하는 조건문을 작성한다.
//         - 숫자 10보다 작으면 “number_5은 10보다 작다.”를 출력한다.
//         - 숫자 10보다 크면 “number_5은 10보다 크다.”를 출력한다.
//         - 숫자 10과 같으면 “number_5은 10이다” 를 출력한다.
//     - 자료형이 `number` 가 아니면 “숫자가 아니다.”를 출력한다.

// 실행 결과
// 2
// number_5은 10보다 작다.
// ​
// Hello World
// 숫자가 아니다.

// ★

let number_5 = 10;
console.log(number_5);

if (typeof number_5 === 'number') {
  if (number_5 < 10) {
    console.log('number_5은 10보다 작다.');
  } else if (number_5 > 10) {
    console.log('number_5은 10보다 크다.');
  } else if (number_5 === 10) {
    console.log('number_5은 10이다.');
  }
} else {
  console.log('숫자가 아니다.');
}

// --------------------------------------
// 짝수 / 홀수
// 변수 number_6 을 선언하고, 임의의 숫자형 값을 할당한다.
// 변수 number_6 의 값을 출력한다.
// 변수 number_6 가 0 인지 확인하는 조건문을 작성한다.
// 값이 0 이면 “영”을 출력한다.
// 값이 0 이 아니면  변수 number_6 를 2로 나눈 나머지가 0 인지 확인하는 조건문을 작성한다.
// 2로 나눈 나머지가 0 이면 “짝수” 를 출력한다.
// 2로 나눈 나머지가 1 이면 “홀수” 를 출력한다.
// 실행 결과
// 2
// 짝수
// ​
// 1
// 홀수
// ​
// 0
// 영

let number_6 = 27;
console.log(number_6);

if (number_6 === 0) {
  console.log('영');
} else {
  if (number_6 % 2 == 0) {
    console.log('짝수');
  } else {
    console.log('홀수');
  }
}

// --------------------------------------

// 아이디 / 비밀번호 확인
// 변수 username 을 선언하고, 임의의 값을 할당한다.
// 변수 password 를 선언하고, 임의의 값을 할당한다.
// 두 변수의 값을 한 줄 씩 출력한다.
// 두 변수가 아래 정보와 일치하는지 확인하는 조건문을 작성한다.
// username : sesac
// password : sesac1234
// 정보가 일치하면 “로그인 성공” 을 출력한다.
// 정보가 다르면 “로그인 실패” 를 출력한다.
// 실행 결과
// beemo
// 1234
// 로그인 실패
// ​
// sesac
// sesac1234
// 로그인 성공
// ​
// sesac
// sesac0000
// 로그인 실패

let username = 'sesac';
let password = 'sesac1234';
console.log(username);
console.log(password);

if (username === 'sesac' && password === 'sesac1234') {
  console.log('로그인 성공');
} else {
  console.log('로그인 실패');
}

// --------------------------------------

// 두 수 비교
// 변수 number_7 을 선언하고, 임의의 숫자형 값을 할당한다.
// 변수 number_8 을 선언하고, 임의의 숫자형 값을 할당한다.
// 두 변수의 값을 한 줄 씩 출력한다.
// 두 변수의 크기를 비교하는 조건문을 작성한다.
// 더 큰 값을 출력한다.
// 두 같으면 “같다”를 출력한다.
// 실행 결과
// 1
// 2
// 2
// ​
// 1
// 1
// 같다

let number_7 = 123;
let number_8 = 456;

console.log(number_7);
console.log(number_8);

if (number_7 > number_8) {
  console.log(number_7);
} else if (number_7 > number_8) {
  console.log(number_8);
} else if (number_7 === number_8) {
  console.log('같다.');
}

// --------------------------------------

// 2와 3의 배수
// 변수 number_9 을 선언하고, 임의의 숫자형 값을 할당한다.
// 변수 number_9 의 값을 출력한다.
// 변수의 값이 2와 3의 배수인지 확인하는 조건문을 작성한다.
// 2의 배수이면서 3의 배수이면 “6의 배수”를 출력한다.
// 2의 배수이면서 3의 배수가 아니면 “2의 배수”를 출력한다.
// 3의 배수이면서 2의 배수가 아니면 “3의 배수”를 출력한다.
// 둘 다 해당하지 않으면 “2의 배수도 아니고, 3의 배수도 아니다.”를 출력한다.
// 실행 결과
// 6
// 6의 배수
// ​
// 2
// 2의 배수
// ​
// 3
// 3의 배수
// ​
// 1
// 2의 배수도 아니고, 3의 배수도 아니다.

let number_9 = 12;
console.log(number_9);

if (number_9 % 2 == 0 && number_9 % 3 == 0) {
  console.log('6의 배수');
} else if (number_9 % 2 == 0 && number_9 % 3 != 0) {
  console.log('2의 배수');
} else if (number_9 % 2 != 0 && number_9 % 3 == 0) {
  console.log('3의 배수');
}
