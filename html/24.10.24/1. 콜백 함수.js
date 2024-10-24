// const people = {
//   a: {
//     b: c,
//   },
// };
const strNumbers = ['1', '2', '3', '4'];

console.log('-----forEach');
strNumbers.forEach((str) => {
  console.log(str);
});

numNumbers = strNumbers; // 함수의 재할당
console.log(numNumbers);

console.log('-----map');
let parseNum1 = numNumbers.map((num) => {
  // numNumbers라는 함수 배열의 각각의 값을
  return parseInt(num); // 문자에서 숫자로 형변환
});
console.log(parseNum1);

parseNum2 = numNumbers.map((num) => parseInt(num)); // 이렇게 간단하게도 가능
console.log(parseNum2);

console.log('-----reduce----------------------------');
// reduce
nums = [1, 2, 3, 4, 5, 6, 7];
nums.reduce((acc, cur) => {}, 0);
// acc = 누적되는 값
// cur = 배열의 원소값.
// 마지막 0은 초기값. 둘이 합친 값을 다시 acc로 넘어감.

// minValue 를 reduc를 통해 계산해보기

nums = [5, 3, 6, 2, 6, 7, 3, 1, 4, 6, 7];
const minValue = nums.reduce((acc, cur) => {
  if (acc > cur) {
    acc = cur;
  }
  return acc;
}, Infinity);

//삼항연산자.
const minValue2 = nums.reduce((acc, cur) => (acc > cur ? cur : acc), Infinity);
// acc > cur ? cur : acc

console.log(minValue);
console.log(minValue2);

console.log('-----filter----------------------------');
// filter (boolean 판독하는 고차함수)
// 소수같은거 판독할때 좋음
nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const filterIsPrime = nums.filter((num) => {
  // let isPrime = true;
  // for (let i = 2; i < num; i++) {
  //   if (num % i === 0) {
  //     isPrime = false;
  //     // return isPrime
  //   }
  //   return isPrime
  // }
  return isPrime(num);
});

function isPrime(isNum) {
  let isPrime = true;
  for (let i = 2; i < isNum; i++) {
    if (isNum % i === 0) {
      isPrime = false;
      return isPrime;
    }
  }
  return isPrime;
}

console.log(filterIsPrime);

console.log('-----forEach문 설명-------------------');

const arr = ['a', 'b', 'c', 'd'];
arr.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

//////////////////////////////////

const applyOperation = (func, number) => {
  //  applyOperation = (double,  5  ) => {
  //    const double = (x) => x * 2;
  return func(number);
  // return x*2(5)
};

const double = (x) => x * 2;

console.log(applyOperation(double, 5));
