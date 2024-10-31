//하고 싶은 거
//1 ~ 9 까지의 숫자를 사용하려고 한다.

// 필요한 것.
// let num = 1 // 초기값
// num을 하나씩 증가시킬 것.
// num이 9가 되면 멈출 예정
// 9가 되기 전에는 계속 실행

// for (초기값; 조건식; 증감식) {}

// for (let num = 1; num <= 9; num++) {
//   console.log(num);
// }

const arr = [2, 3, 5, 1, 3];

// arr가 텅 빌 때까지 el을 출력하고 싶어요
// 1. 리스트의 길이 확인.
// 2. 길이까지 pop, shift 후 출력
leng = arr.length;
for (let i = 1; i <= leng; i++) {
  pop_el = arr.pop();
  console.log(`팝 : ${pop_el}`);
}

console.log('-----------');

while (arr.length) {
  pop_el = arr.pop();
  console.log(pop_el);
}
