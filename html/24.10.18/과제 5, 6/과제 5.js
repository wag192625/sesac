// 변수와 상수
// let let_variable = 'Hello world';
// const const_variable = 'Hello world';

// console.log(let_variable, const_variable);

// -----------------------------------

// 숫자형 변수와 문자열 변수
// let number_variable = 1;
// let string_variable = '1';

// console.log(typeof number_variable, typeof string_variable);

// -----------------------------------

// 상수형 변수
// 아래 코드는 오류가 있다. 오류의 원인을 찾고 오류를 해결하자.
// const variable = '상수형 변수에는 재할당 할 수 없다.';
// variable = '재할당';

// let variable = '상수형 변수에는 재할당 할 수 없다.';
// variable = '재할당';

// console.log(variable);

// -----------------------------------

// 템플릿 리터럴
// 값 정우영 을 저장한 변수 name 을 생성한다.
// 값 안녕하세요. OOO 입니다. 를 저장한 변수 hello 를 생성한다.
// 이때, OOO 에는 변수 name 를 삽입힌다.
// 실행 결과
// 안녕하세요. 정우영 입니다.

// let name = '정우영';
// let hello = `안녕하세요. ${name} 입니다.`

// console.log(hello);

// -----------------------------------

// 사칙연산
// 값 100 을 저장한 변수 number1 을 생성한다.
// 값 200 을 저장한 변수 number2 를 생성한다.
// 두 변수에 대한 사칙연산 연산자 결과를 출력한다.
// 실행 결과
// 덧셈: 300
// 뺄셈: -100
// 곱셈: 20000
// 나눗셈: 0.5

// let number1 = 100;
// let number2 = 200;

// console.log('덧셈: ',number1+number2);
// console.log('뺄셈: ',number2+number1);
// console.log('곱셈: ',number1*number2);
// console.log('나눗셈: ',number1/number2);

// -----------------------------------

// 나머지
// 짝수를 저장한 변수 number1 을 생성한다.
// 홀수를 저장한 변수 number2 를 생성한다.
// 두 변수를 숫자 2 로 나눈 나머지 결과를 출력한다.
// 실행 결과
// number1을 2로 나눈 나머지: 0
// number2을 2로 나눈 나머지: 1

// let number1 = 10;
// let number2 = 11;
// console.log('number1을 2로 나눈 나머지 : ', number1 % 2);
// console.log('number2을 2로 나눈 나머지 : ', number2 % 2);

// -----------------------------------

// 배열 생성과 인덱싱
// 숫자 1 부터 10 까지 저장한 배열 number_arr 을 생성한다.
// 해당 배열을 인덱싱해서 1, 3 , 9, 10 을 출력한다.
// 실행 결과
// 1
// 3
// 9
// 10

// let number_arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(number_arr[0]);
// console.log(number_arr[2]);
// console.log(number_arr[8]);
// console.log(number_arr[9]);

// -----------------------------------

//빈 배열과 원소 추가
// 빈 배열 변수 arr 을 생성한다.
// 5개의 임의의 원소를 추가하고, 변수 arr 을 출력한다.
// 실행 결과
// [10, 20, 30, 40, 50]

let arr = [];
arr.push(10, 20, 30, 40, 50);
console.log(arr);

// -----------------------------------

// 객체 값 접근
// 아래 객체의 속성의 값에 접근하고 출력한다.
// 객체
// let todo = {
//   userId: 1,
//   id: 1,
//   title: 'delectus aut autem',
//   completed: false,
// };
// 실행 결과
// 1
// 1
// delectus aut autem
// false

let todo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};
console.log(todo.userId);
console.log(todo.id);
console.log(todo.title);
console.log(todo.completed);

// -----------------------------------

// 객체 생성
// - 아래 정보를 기반으로 객체를 생성하고 변수 `person` 에 할당한다.
//     - name - 정우영
//     - age - 20
//     - city - 서울
//     - location - 성동
//     - language - HTML, CSS, JavaScript
// - 변수 `person`을 출력한다.

let person = {
  name: `정우영`,
  age: 20,
  city: `서울`,
  location: `성동`,
  language: 'HTML, CSS, JavaScript',
};
console.log(person);
