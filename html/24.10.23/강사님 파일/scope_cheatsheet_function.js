console.log('● 글로벌 환경에 변수 선언 => 함수에서 사용');
const const_1 = 'const_1';
let let_1 = 'let_1';

function func() {
  console.log(const_1);
  console.log(let_1);
}
func();

console.log('● 함수에서 변수 선언 => 글로벌');

function func2() {
  const const_2 = 'const_2';
  let let_2 = 'let_2';
}
func2();
// console.log(const_2); // 불가능
// console.log(let_2); // 불가능

console.log('● 글로벌 환경에 변수 선언 => 함수에서 선언');

const const_3 = 'const_3_outer';
let let_3 = 'let_3_outer';

function func3() {
  const const_3 = 'const_3_inner';
  let let_3 = 'let_3_inner';
}
func3();
console.log(const_3);
console.log(let_3);

console.log('● 글로벌 환경에 변수 선언 => 함수에서 할당');
// 가능은 하나, 쓰면 안됩니다.
// function은 return값을 만드는 역할을 해야할 뿐,
// 외부에 영향을 미치면 예키치 못한 상황을 마주할 수 있음
let let_4 = 'let_4_outer';

function func4() {
  let_4 = 'let_4_inner';
  console.log(let_4);
}
func4();
console.log(let_4);
