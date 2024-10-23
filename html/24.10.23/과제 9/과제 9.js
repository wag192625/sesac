console.log('더하기 함수');
// - 아래와 같은 기능을 수행하는 함수 `add` 를 정의한다.
//     - 2개의 매개변수 `x1` `x2` 를 입력 받는다.
//     - `x1` 과 `x2` 를 더한 값을 반환한다.
// - 임의의 변수 2개를 선언하고, 숫자형 값을 할당한다.
// - 2개의 변수를 출력한다.
// - 함수 `add` 를 호출해서 두 변수를 더한 값을 구하고, 출력한다.

function add(x1, x2) {
  return x1 + x2;
}
(x = 1), (y = 2);
console.log(x, y);
console.log(add(x, y));

console.log('크기 비교 함수');
// 아래와 같은 기능을 수행하는 함수 `compare` 를 정의한다.
//     2개의 매개변수 `x1` `x2` 를 입력 받는다.
//     `x1` 과 `x2` 의 크기를 비교하는 조건문을 작성한다.
//         두 변수 중 더 큰 변수를 반환한다.
//         더 변수가 같다면 `null` 을 반환하다.
// 임의의 변수 2개를 선언하고, 숫자형 값을 할당한다.
// 2개의 변수를 출력한다.
// 함수 `compare` 를 호출해서 두 변수 중 더 큰 값을 구하고, 출력한다.

function compare(x1, x2) {
  if (x1 > x2) {
    return console.log(`${x1} > ${x2}`);
  } else if (x1 < x2) {
    return console.log(`${x1} < ${x2}`);
  } else {
    return console.log(null);
  }
}
(x = 2), (y = 2);
console.log(x, y);
compare(x, y);

console.log('양수, 음수, 0');
// 아래와 같은 기능을 수행하는 함수 `determine` 를 정의한다.
//     1개의 매개변수 `x` 를 입력 받는다.
//     `x` 가 어떤 수 인지 판별하는 조건문을 작성한다.
//         양수라면 `1` 을 반환한다.
//         음수라면 `-1` 을 반환한다.
//         0이라면 `0` 을 반환한다.
// 임의의 변수를 선언하고, 숫자형 값을 할당한다.
// 변수를 출력한다.
// 함수 `determine` 를 호출해서 변수가 어떤 수 인지 구하고, 출력한다.

function determine(x) {
  if (x > 0) {
    return console.log(1);
  } else if (x < 0) {
    return console.log(-1);
  } else {
    return console.log(0);
  }
}
x = -1;
console.log(x);
determine(x);

console.log('가장 큰 값');
// 배열에서 가장 큰 값을 찾는 함수 `maxNumber` 를 정의한다.
//     1개의 매개변수 `arr` 를 입력 받는다.
//     가장 큰 값을 저장할 변수 `max` 를 선언하고, `-Infinity` 를 할당한다.
//     변수 `arr` 를 순회하는 반복문을 작성한다.
//         원소가 `max` 보다 크면 `max` 를 갱신한다.
//     변수 `max` 를 반환한다.
// 임의의 변수를 선언하고 숫자형 값 5개를 저장한 배열을 생성해서 할당한다.
// 변수를 출력한다.
// 함수 `maxNumber` 를 호출해서 배열에서 가장 큰 수를 구하고, 출력한다.
function maxNumber(arr) {
  max = -Infinity;
  for (i of arr) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}

beyol = [1, 5, 2, 6, 9, 7, 4, 8];
console.log(maxNumber(beyol));

console.log('가장 작은 값');
// 배열에서 가장 작은 값을 찾는 함수 `minNumber` 를 정의한다.
// 임의의 변수를 선언하고, 숫자형 값을 저장한 배열을 생성하고 할당한다
// 변수를 출력한다.함수 `minNumber` 를 호출해서 배열에서 가장 작은 수를 구하고, 출력한다.
function minNumber(arr) {
  min = Infinity;
  for (i of arr) {
    if (i < min) {
      min = i;
    }
  }
  return min;
}
console.log(minNumber(beyol));

console.log('짝수');
// 배열에서 짝수인 값을 찾는 함수 `evenNumber` 를 정의한다.
//     1개의 매개변수 `arr` 를 입력 받는다.
//     변수 `new_arr` 를 선언하고, 빈 배열을 할당한다.
//     변수 `arr` 를 순회하는 반복문을 작성한다.
//         원소가 짝수면 변수 `new_arr` 에 추가한다.
//     변수 `new_arr` 를 반환한다.
// 임의의 변수를 선언하고 숫자형 값 5개를 저장한 배열을 생성해서 할당한다.
// 변수를 출력한다.
// 함수 `evenNumber` 를 호출해서 짝수만 저장된 배열을 구하고, 출력한다.
// 실행 결과
function evenNumber(arr) {
  new_arr = [];
  for (i of arr) {
    if (i % 2 == 0) {
      new_arr.push(i);
    }
  }
  return new_arr;
}
arr1 = [10, 25, 36, 99, 58];
console.log(evenNumber(arr1));
