num = 20;

if (!(num % 2)) {
  console.log('짝수야');
}

if (num % 2) {
  //나머지가 존재해.
  console.log('홀수야'); // 숫자는 0이 아니면 true
}

// -------------------------

const number = 20;

let status;

if (num % 2) {
  status = '홀수';
} else {
  status = '짝수';
}
// -----------------

//삼항연산자
let status2 = num % 2 ? '홀수' : '짝수';

// -----------------
// -----------------

let money = false;
let car = true;

// money car 조합해서 false가 나오도록

// XOR라는 것은, OR는 OR인데, T - T 쌍인 경우를 제외한 것.
// = ^ 비트 연산자 (&, |. 비트 연산자 때문에 && || 이렇게 두개씩 쓰는 것)
console.log((money || car) && !(money && car));

//내가 푼 것.
if (money === true && car === true) {
  console.log('false;');
} else if (money === true && car === false) {
  console.log('true;');
  true;
} else if (money === false && car === true) {
  console.log('true;');
  true;
} else if (money === false && car === false) {
  console.log('false;');
  false;
}

// ---------------------------
// 다음 점수에 따라 등급을 출력하는 코드를 작성하시오.
// 90 이상: "A" /  80 이상: "B" /  그 외: "C"
// 단, 100점은 A학점과 더불어 교수님의 총애를, 40점 미만은 C학점과 더불어 학사경고를 출력하시오.
const score = 100;
// // 예시 출력

// 내가 푼 것
if (score >= 90) {
  console.log('A');
  if (score == 100) {
    console.log('교수님의 총애');
  }
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
  if (score < 40) {
    console.log('학사 경고');
  }
}
// ------------------------------
// 새싹이는 주말이거나 일과시간 이후면 휴식을 취할 수 있다. 단, 주말의 일과시간 이후에는 자기개발을 할 예정이다.
// 일과시간이 09시 ~ 18시일 때, 변수의 상태에 따라 일 / 휴식/ 자기개발을 출력하시오.
const isWeekend = true;
const nowTime = 18;

// XOR (T - T 쌍은 false로 뱉는 OR)
// 평일이고 09~18시일 때 = 일
// 평일이고 18시 이후일 때 = 휴식
// 주말이고 18시 이전이면 =  휴식
// 주말이고 18시 이후일 때 = 자기개발

// 주말 일과시간
// true  true    휴식
// true  false   자기개발
// false true    일
// false false   휴식

let isWorkingHour; // 추가
// 9 ~ 18시에는 isWorkingHour = true
// 아닐때는 isWorkingHour = false

if (9 <= nowTime && nowTime <= 18) {
  isWorkingHour = true;
} else {
  isWorkingHour = false;
}

let toDo;

if (isWeekend) {
  if (isWorkingHour) {
    toDo = '휴식';
  } else {
    toDo = '자기개발';
  }
} else {
  if (isWorkingHour) {
    toDo = '일';
  } else {
    toDo = '휴식';
  }
}

// XOR가 true일 때 휴식
// XOR가 false일 때 휴식

// xor(isWeekend, isWorkingHour)
// function xor(x, y) {
//   return xor에 대한 코드
// }

//내가 푼 것 1
if (isWeekend != true) {
  if (nowTime >= 9 && nowTime <= 18) {
    console.log('일');
  } else {
    console.log('휴식');
  }
} else {
  if (nowTime >= 9 && nowTime <= 18) {
    console.log('휴식');
  } else {
    console.log('자기개발');
  }
}
