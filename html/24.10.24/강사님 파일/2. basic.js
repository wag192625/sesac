const numbers = [1, 2, 3, 4];

console.log('일반적인 사용법');

numbers.forEach((num) => {
  // .forEach가 numbers의 배열 값을 받고 num이라는 화살표함수 /// (객체 안에 있어서 메서드는 아님)
  console.log(num); // 1, 2, 3, 4   // 에 .forEach가 받은 값을 하나하나 넘겨서 숫자를 출력
});

console.log('위의 코드를 분해한 코드');

const console_log = (num) => {
  // 입력받은 값을 출력
  console.log(num);
};

numbers.forEach(console_log);

////////////////////////////

console.log('아래 코드와 같은 의미.');

console.log(
  'array에서 직접 실행 가능한 메서드 => array를 입력 받는 함수로 변경된 코드'
);

function myForEach(arr, func) {
  // arr은 아래 코드의 배열값을 받고, func는 출력하는 함수
  for (let value of arr) {
    // 1, 2, 3, 4를 차례대로 입력 받고
    func(value); // 출력하는 함수에 값을 넣어서 출력
  }
}

myForEach([1, 2, 3, 4], console_log);

console.log('콜백함수의 function자리 input값으로 call이 들어가면 안됨');
// numbers
//   .forEach
//   // console_log() // 괄호가 있으면 함수의 결과값을 넘기는 것
//   ();
