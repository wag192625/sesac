// function 함수 이름(입력값) {
//   입력값을 사용한 기능

// const { values } = require('lodash');

//   return 출력값
// }

// 숫자를 입력 받아서, 1을 더하는 기능을 만들자.
function plusOne(num) {
  let plusOneNumber = num + 1;

  return plusOneNumber;
}

let x = 10; // y -> 11
let y = plusOne(x);

console.log(`1. 2를 곱하는 함수를 만들어보자.`);

function nx2(num) {
  let numberX2 = num * 2;
  return numberX2;
  // return num*2;
}
x = 4;
y = nx2(x);
console.log(y);

console.log(`2. 소수를 판별하는 함수를 만들어보자.`);
function isPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      return isPrime; // 곧바로 멈춤
    }
  }
  return isPrime;
}

x = 14;
y = isPrime(x);
console.log(y);

console.log(`3. 구구단 중 n 단을 return하는 함수를 만들어보자`);
function nDan(num) {
  let answer = [];
  for (i = 1; i <= 9; i++) {
    // answer.push(`${num} x ${i} = ${num * i}`);
    // answer=`${num} x ${i} = ${num * i}`;
    answer.push(num * i);
  }
  return answer;
}

const gugudan = [];
for (let i = 1; i <= 9; i++) {
  gugudan.push(nDan(i));
}
// x = 6;
// y = nDan(x);
console.log(gugudan);

console.log('---------------------');

// a, b 두 개를 더하는 함수를 만든다.
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));
console.log(add((a = 4), (b = 2)));

// 매개변수에 기본값 설정도 가능
function greet(name = 'Guest') {
  console.log(`안녕하세요, ${name}님!`);
}

greet(); // 안녕하세요, ${Guest}님!
greet('정명훈');

// 나머지 매개변수
function sum(...nums) {
  console.log(nums);
}
sum(1, 2, 3, 4);

// 자바스크립트는 가변 길이를 지원한다.
function greet(name) {
  console.log(`안녕하세요, ${name}님!`);
}

greet('철수', '영희'); // 오류 없이 실행
// = 안녕하세요, 철수님! 만 실행.

// 함수의 종류
// 함수 선언식
// 아래에 있는 함수 위에 함수를 이용하는 식이 있더라도
// 호이스팅이 되어 값이 도출됨.
function add(x, y) {
  return x + y;
}

// 함수 표현식
// const와 같은 효과를 갖게 됨.
// 이건 호이스팅 불가.
const add2 = function (x, y) {
  return x + y;
};

// 화살표 함수
// this에 대한 바인딩이 없음.
const add3 = (x, y) => {
  return x + y;
};

// 메서드
// 객체 내부에 정의된 함수.
const person = {
  name: '철수',
  greet: function () {
    console.log('안녕하세요. 반갑습니다.');
  },
  greet2() {
    console.log('안녕하세요. 반갑습니다.');
    console.log(`${this.name}`);
  },
};

person.greet(); // 안녕하세요. 반갑습니다.
person.greet2(); // 안녕하세요. 반갑습니다.
