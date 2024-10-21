// -------------------

// 1. nums가 다음과 같을 때, 구구단 3단을 출력하시오

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in nums) {
  // in object. in을 통한 반복문은 키와 밸류를 다 확인 가능
  const num = nums[i]; // index를 통해 nums의 키 값을 이용하여 value값을 추출
  console.log(`1번 3 * ${num} = ${3 * num}`);
}

console.log(
  '-------------------------------------------------------------------'
);

//내가 푼 것
// for (let i of nums) {
//   // array, string, set 등을 쓸때는 of
//   //key 값을 활용하는것이 아니라, 바로 value 접근 가능
//   console.log(i * 3);
// }

// 2. 출석번호를 포함하여 '1번 jun', ..., '4번 lynda'의 형태로 출석을 부르시오.
let names = ['jun', 'beemo', 'ken', 'lynda'];

for (let i in names) {
  let name = names[i];
  console.log('2번', ++i, '번', name);
}
// 반복문에서의 const는 반복당 각각의 변수 할당이라
// for (const i in ~~ ) 라고 해도 됨.
// 그러나 i에 추가나 변경이 되지 않아 증감연산자 사용 불가능

// index = index + 1 은 값이 01 11 21 31 이라고 뜨는데
// js는 모든 것이 object이고, object의 키 값은 자동으로 string이 되서
// 문자 + 문자로 계산됨. (+. js는 '1'+1은 지동으로 뒤의 1이 문자로 변경)
// ++, -- 같은 증감 연산자는 암묵적 형변환으로
// 숫자 대 숫자 계산은 숫자로 변환됨.

// 3.
names = ['jun', 'beemo', 'ken'];
ages = [18, 28, 37];
// 일 때,
// 18살 jun, 28살 beemo, 37살 ken
// 을 출력하시오.
for (let i in names) {
  console.log(`3번 ${ages[i]}살', ${names[i]}`);
}

//-----------------------------------

// 4. 주어진 리스트의 길이를 계산하시오
names = ['jun', 'beemo', 'ken', 'lynda'];

// for (let i in names) {
//   let names_len = ++i;
//   console.log(`4번 길이 : ${names_len}`);
// }

let count = 0;
for (_ of names) {
  count++;
}

console.log(count);

//-----------------------------------
// 5. 주어진 리스트의 합계를 계산하시오
const nums_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let nums_sum = 0;
for (let i in nums_1) {
  nums_sum += nums_1[i];
}
console.log('5번', nums_sum);

//-----------------------------------
// 6. 주어진 리스트에서 최소값을 찾으시오
const nums_2 = [10, 6, 8, 5, 4, 2, 3, 11];
// 첫번째 거를 저장한 다음 그 다음 연산에서 비교

let nums_min = nums_2[0]; // 첫번째 값 저장
// let nums_min = Infinity //무한값으로 해도 됨

for (let i of nums_2) {
  if (nums_min >= i) {
    nums_min = i;
  }
}
// 만약 리스트 = []일 때의 결과값도 개발자라면 생각해야함.
console.log('6번', nums_min);

//-----------------------------------
// 7. 주어진 리스트의 순서를 뒤집으시오
const nums_3 = [10, 6, 8, 5, 4];

// 결과
// const reversedNum = [4, 5, 8, 6, 10]
const reversedNum = [];

// 길이 측정
let num_3_length = 0;

for (let i in nums_3) {
  num_3_length = i;
}
console.log(num_3_length);

console.log('-------');
// 측정한 길이 반복마다 입력 후-1
for (let i in nums_3) {
  let input_num = nums_3[num_3_length];
  // console.log(input_num);
  --num_3_length;
  reversedNum.push(input_num);
}
console.log(reversedNum);

// 강사님 풀이.1
for (let i in nums_3) {
  // let newIndex = 4 - i
  let newIndex = nums_3.length - 1 - i;
  let newValue = nums_3[newIndex];
  reversedNum.push(newValue);
}
console.log(reversedNum);

// 강사님 풀이.2 (컴퓨터의 관점)
const reversedNum2 = [];
for (num of nums_3) {
  reversedNum2.unshift(num);
}
console.log(reversedNum2);
// push, pop, shift로도 할 수 있을듯
