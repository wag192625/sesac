// 스코프
let status = 10;
if (status > 5) {
  let isHungry = true;
} else {
  let isHungry = true;
}
// 오류나는 이유 = isHungry가 if문에서만 입력되서

// let, const = block {}
if (true) {
  let value = 123;
  console.log(value);
}
// console.log(value)
for (let i = 0; i < 3; i++) {
  let value2 = 123;
}
// console.log(value2)
{
  let value3 = 123;
}
// console.log(value3)

const outerValue = '밖에 있는 것';
if (true) {
  console.log(outerValue);
  // const outerValue // 이미 밖에서 선언되어 있어서 불가능
  const innerValue = '안에 있는 것';
}
const innerValue = '밖에 있는 값';

console.log(innerValue);

// 안쪽에서는 바깥쪽에 접근 가능 (안쪽 2층 바깥 1층)
// 바깥에서는 안쪽에 접근 불가능
let value;
if (true) {
  value = 123;
  // let value = 123; 나만의 환경이 있어서 불가능 ????
} else {
  value = 456;
}
console.log(value); // 123 출력

let outerValue2 = '밖';

function func() {
  console.log(outerValue2);
}
func(); // 밖 출력
//
//
//
//
//
//
//
//
//
//
//
//
//
// global 환경에 변수 선언 -> 블럭 안에서 사용
const const_1 = 'globalConst';
let let_1 = 'globalLet';
{
  console.log(const_1);
  console.log(let_1);
}
// block에서 변수 선언 -> 글로벌
{
  const const_2 = 'globalConst';
  let let_2 = 'globalLet';
}
// console.log(const_2);
// console.log(let_2); //안됨.

// global 환경에 변수 선언 -> 블럭 안에서 변경

// global 환경에 변수 선언 -> 블럭 안에서 변경-> 사용

const const_3 = 'globalConst_outer';
let let_3 = 'globalLet_outer';
{
  const_3 = 'globalConst_inner';
  let_3 = 'globalLet_inner';
}
console.log(const_3);
console.log(let_3);

// 글로벌 환경에서 변수 선언 -> 블럭에서 할당
let let_4 = 'let_4_outer';
{
  let let_4 = 'let_4_inner';
  // let let_4 = 'let_4_inner' // let으로 선언을 하면 여기서만 사용
  console.log(let_4);
}
console.log(let_4);

for (let i = 0; i < 3; i++) {
  // i += 10; //
  // let i += 10; // 가능/불가능 여부를 차치하고, 쓰면 안 됨.
  const value = i;
  console.log(value); // 반복마다 각자의 공간에 할당되서
} // 포문이라는 공간이 존재하고 블락이라는 공간이


// // global 환경에 변수 선언 -> 블럭 안에서 사용
// const const_1 = 'globalConst';
// let let_1 = 'globalLet';
// {
//   console.log(const_1);
//   console.log(let_1);
// }