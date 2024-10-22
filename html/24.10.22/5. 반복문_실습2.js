const { set, find, values } = require('lodash');

console.log('40 이하의 3의 배수 출력');
// 1. 40 이하의 3의 배수를 출력하시오(3단의 확장).
for (let i = 0; i <= 40; i += 3) {
  console.log(i);
}

console.log('--------------');

console.log('1~100 중 7의 배수의 갯수');

// 2. 1 ~ 100 중에 7의 배수의 개수를 출력하세요.
console.log('for');
cnt = 0;
for (let i = 0; i <= 100; i += 7) {
  cnt += 1;
}
console.log(cnt);
console.log('while');
// for if문 써도 될 듯
i = 0;
cnt = 0;
while (i <= 100) {
  i += 7;
  cnt += 1;
}
console.log(cnt);

// count = 0
// for(let num =1; num <=100; num++) {
//   if (num % 7) continue;
//   count++
// }
// console.log(count)

console.log('--------------');

console.log('원소가 1, 4, 5, 7인 경우를 제외하고 출력');

// 3. `const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7]` 일 때,
// 원소가  1, 4, 5, 7인 경우를 제외하고 출력하세요
let arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7];

console.log('for');
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    continue;
  } else if (arr[i] === 4) {
    continue;
  } else if (arr[i] === 5) {
    continue;
  } else if (arr[i] === 7) {
    continue;
  }
  console.log(arr[i]);
}

//강사님 풀이 1
for (let num of arr) {
  if (num === 1 || num === 4 || num === 5 || num === 7) {
    continue;
  }
  console.log(num);
}

//강사님 풀이 2
const notLogSet = new Set([1, 4, 5, 7]);

for (let num of arr) {
  if (notLogSet.has(num)) continue;
  console.log(num);
}

// 강사님 풀이 3
const notLog = [1, 4, 5, 7];
num = 1;
//들어있지 않은 것을 체크하기 위해서는 모든 리스트를 뒤져봐야 함.
// 들어있는 경우를 체크하기 위해서는 (우연이든 어쨌든) 한번이면 충분함.
// 모든 경우를 돌면서 한 번이라도 만나면 걔는 들어있는 것.

for (let num of arr) {
  //  전체 값을 돌면서
  let isInNotLog = false;
  //  찾고자 하는 값을 false로 설정한 뒤

  for (let notLogNum of notLog) {
    //  지울 값을 순회하면서
    if (num === notLogNum) {
      isInNotLog = true;
      break;
      //만약 기존 값에 지울 값이 있다면
      //  로그값을 true로 바꾸고 break
    }
  }
  if (isInNotLog) continue;
  console.log(num);
  // 뺄 값에 없다가 true면 출력

  // if (!isInNotLog) {
  //   console.log(num)
  // }
}

console.log('while');
i = 0;
while (i < arr.length) {
  if (arr[i] === 1) {
    i++;
    continue;
  } else if (arr[i] === 4) {
    i++;
    continue;
  } else if (arr[i] === 5) {
    i++;
    continue;
  } else if (arr[i] === 7) {
    i++;
    continue;
  }
  console.log(arr[i]);
  i++;
}

console.log('-------------');

console.log('1~9까지의 자연수');
// 4. 1 ~ 9 까지의 자연수 중 제곱한 수가 10 이상 50 이하인 자연수의 리스트를 출력해보세요.
console.log('for');
let answer = [];
for (let i = 1; i <= 9; i++) {
  if (i * i >= 10 && i * i <= 50) {
    console.log(i);
    // answer.push(i);
  }
}

console.log('while');
i = 0;
while (i <= 9) {
  if (i * i >= 10 && i * i <= 50) {
    console.log(i);
  }
  i++;
}

// 강사님 풀이
for (let num = 1; num < 10; num++) {
  let square = num ** 2;
  if (square >= 10 && square <= 50) {
    answer.push(num);
  }
}
console.log(answer);

console.log('--------------');

console.log('두 수 사이에 속한 모든 정수의 합');
// 5. 두개의 숫자에 대해. 두 수 사이에 속한 모든 정수의 합을 구하시오. (ex. 2와 5를 입력받는다면 2 + 3 + 4 + 5 = 14)
num1 = 2;
num2 = 5;
sum1 = 0;

// 만일 num1이 더 크면 우선 num1,2 중 큰 수를 비교해서 식 하나 짜서 입력해야 함.

for (let i = 0; i < Infinity; i++) {
  if (num1 !== num2) {
    sum1 += num1;
    num1 += 1;
    console.log(sum1);
  } else {
    sum1 += num1;
    console.log(sum1);
    break;
  }
}
console.log(`합 : ${sum1}`);

console.log(`while`);
num1 = 2;
num2 = 5;
sum1 = 0;
while (true) {
  if (num1 !== num2) {
    sum1 += num1;
    num1 += 1;
    console.log(sum1);
  } else if (num1 === num2) {
    sum1 += num1;
    console.log(sum1);
    break;
  }
}

// 강사님 풀이
num1 = 2;
num2 = 5;
total = 0;

if (num1 > num2) {
  let tmp = num1;
  num1 = num2;
  num2 = tmp;
  // num1의 값을 임시로 지정해서 값이 중복되지 않게
}

for (let num = num1; num <= num2; num++) {
  total += num;
}
console.log(total);

console.log('--------------');

console.log('2,3의 배수를 제외하고 1~30까지 출력');
// 6. 2의 배수 혹은 3의 배수를 제외하고 1~30까지 숫자를 출력하시오.
//  `1 5 7 11 13 17 19 23 25 29`
console.log('for');
for (let i = 1; i < 30; i++) {
  if (i % 2 && i % 3) {
    // 2, 3으로 나누어 떨어지면
    console.log(i);
  }
}

console.log('while');
i = 0;
while (i < 30) {
  if (i % 2 && i % 3) {
    console.log(i);
  }
  i++;
}

// 강사님 풀이
for (let num = 1; num <= 30; num++) {
  if (num % 2 == 0) continue;
  if (num % 3 == 0) continue;
  console.log(num);
}
for (let num = 1; num <= 30; num++) {
  if (num % 2 === 0 || num % 3 === 0) continue;
  console.log(num);
}
for (let num = 1; num <= 30; num++) {
  // if (2의 배수가 아니고 / 3의 배수가 아냐)
  if (num % 2 && num % 3) {
    console.log(num);
  } // 내가 푼거랑 같음.
}

console.log('--------------');

console.log('소수 판별');
// 7. 자연수 n이 주어졌을 때, n이 소수인지 판단하시오.
// 소수 : 1과 자기 자신으로만 나뉘어지는 수
num = 23;
cnt = 0;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    cnt += 1;
  }
}
if (cnt > 1) {
  console.log('소수가 아님');
} else {
  console.log('소수임');
}

// 강사님 풀이
// 소수가 아닌 수? = 1과 자기 자신 이외에 어떠한 수로 나누어 떨어지는 수
// 어떠한 수들로 나눠보고, 나머지가 존재하지 않으면 넌 소수가 아니야

// 어떤 수가 존재할 때, 넌 소수가 맞아.
// 2~ n-1로 나누어 볼게. 혹시 나누어 떨어지면 넌 소수가 아냐

num = 17;
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
  }
}
console.log(isPrime);

console.log('--------------');

console.log('다음 문제를 푸시오');
// 8. 다음 문제를 푸시오
//     A   |   B   |   C
// 1  이름 |  나이 | 성별
// 2  jun  |  15   |  M
// 3  ken  |  26   |  F
// 4  alex |  37   |  -

// - 주어진 테이블의 데이터를 "people" 변수에 저장하시오.
let person = {
  name: [`jun`, 'ken', 'alex'],
  age: [15, 26, 37],
  gender: ['M', 'F', NaN],
};
// - 사람에 대한 정보를 각각 출력하시오(형식은 자유롭게)
console.log(person.name);

// - 이름이 alex인 사람에 대한 정보를 출력하시오
cnt = 0;
for (i of person.name) {
  if (i === 'alex') {
    console.log(i, person.age[cnt], person.gender[cnt]);
  }
  cnt += 1;
}

// - 이름이 alex인 사람의 나이를 출력하시오
cnt = 0;
for (i of person.name) {
  if (i === 'alex') {
    console.log(i, person.age[cnt]);
  }
  cnt += 1;
}

// - 이름을 활용하여 각 사람의 데이터에 쉽게 접근할 수 있도록 people 변수를 수정하시오.
person = {
  jun: [15, 'M'],
  ken: [26, 'F'],
  alex: [37, NaN],
};
console.log(person.jun);

// 강사님 풀이
console.log('다음 문제를 푸시오');
// 8. 다음 문제를 푸시오
//     A   |   B   |   C
// 1  이름 |  나이 | 성별
// 2  jun  |  15   |  M
// 3  ken  |  26   |  F
// 4  alex |  37   |  -

// - 주어진 테이블의 데이터를 "people" 변수에 저장하시오.
people = [
  {
    name: 'jun',
    age: 15,
    gender: 'M',
  },
  {
    name: 'ken',
    age: 26,
    gender: 'F',
  },
  {
    name: 'alex',
    age: 37,
    gender: null,
  },
];

// - 사람에 대한 정보를 각각 출력하시오(형식은 자유롭게)

for (let person of people) {
  for (let key in person) {
    let value = person[key];
    console.log(key, value);
  }
  console.log();
}

// - 이름이 alex인 사람에 대한 정보를 출력하시오
// 전체 사람에 대해 한사람씩 확인을 합니다.
for (let person of people) {
  // 그 사람의 이름이 alex인지 확인
  const name = person.name;
  if (name === 'alex') {
    console.log(person);
  }
}
// - 이름이 alex인 사람의 나이를 출력하시오
for (let person of people) {
  const name = person.name;
  if (name === 'alex') {
    const age = person.age;
    console.log(age);
  }
}

// - 이름을 활용하여 각 사람의 데이터에 쉽게 접근할 수 있도록 people 변수를 수정하시오.
// people = {
//   jun: {
//     name: 'jun',
//     age: 15,
//     gender: 'M',
//   },
//   ken: {
//     name: 'ken',
//     age: 26,
//     gender: 'F',
//   },
//   alex: {
//     name: 'alex',
//     age: 37,
//     gender: null,
//   },
// };

people = [
  {
    name: 'jun',
    age: 15,
    gender: 'M',
  },
  {
    name: 'ken',
    age: 26,
    gender: 'F',
  },
  {
    name: 'alex',
    age: 37,
    gender: null,
  },
];
console.log('마지막 문제');
people2 = {};

// for (key of people) {
//   // console.log(key);
//   // people2.push(key.name);
//   for (value in key) {
//     // console.log(key[value]);
//     // people2.push(key.name + key[value]);
//     // people2[0] = key.name = new Set([key[value]]);
//     // people2[key.name] = new Set([key[value]]);
//     people2[key.name] = key[value];
//   }
//   // people2.push((key.name = new Set([key])));
// }

for (let i in people) {
  people2[people[i].name] = people[i];
}

console.log(people2);
