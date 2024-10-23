console.log('다음 문제를 푸시오');
const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log('0. 1~9 순서대로 출력해보자');
for (i in nums) {
  // console.log(nums[i])
  for (j in nums[i]) {
    console.log(nums[i][j]);
  }
}

//강사님 풀이
// [1, 2, 3] <- nums[0]
// [4, 5, 6] <- nums[1]

for (let arr of nums) {
  for (let num of arr) {
    // console.log(num);
  }
}

for (let i in nums) {
  let arr = nums[i];
  for (let j in arr) {
    let num = arr[j];
    // console.log(num);
    // console.log(arr[j]);
    // console.log(nums[i][j]);
  }
}

let n = nums.length;
let m = nums[0].length;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // console.log(nums[i][j]);
  }
}

console.log('1. 행들의 합의 값으로 리스트를 만드세요');
let totalList = [];
for (i in nums) {
  total = 0;
  for (j in nums[i]) {
    total += nums[i][j];
  }
  totalList.push(total);
}
console.log(totalList);

// 강사님 풀이
// 1. 배열을 만든다.
// 2. 6을 만든다.
// 3. 넣는다.
// 4. 15를 만든다. ~ 2~4 반복
result = [];
for (let i = 0; i < n; i++) {
  sum = 0;
  for (let j = 0; j < m; j++) {
    sum += nums[i][j];
  }
  result.push(sum);
}

// var _ = require('lodash');

// result = [];
// for (let arr of nums) {
//   result.push((sum = _.sum(arr)));
// }

console.log('2. 모든 원소들의 합을 구하시오');
let numSum = 0;
for (i in nums) {
  for (j in nums[i]) {
    numSum += nums[i][j];
  }
}
console.log(numSum);

// 강사님 풀이
total = 0;
for (let arr of nums) {
  for (let num of arr) {
    total += num;
  }
}
for (i = 0; i < n; i++) {
  for (j = 0; j < m; j++) {
    total += nums[i][j];
  }
}
console.log('ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ');
for (j = 0; j < m; j++) {
  for (i = 0; i < n; i++) {
    total += nums[i][j];
  }
}
console.log('강사님 답', total);

// nums[i][j]의 형태는 항상 유지할 예정.
// 헷갈리지 않게

console.log('3. 열들의 합의 값으로 리스트를 만드세요.');
numSum1 = 0;
numSum2 = 0;
numSum3 = 0;
totalList = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums[i].length; j++) {
    if (j === 0) {
      numSum1 += nums[i][j];
    } else if (j === 1) {
      numSum2 += nums[i][j];
    } else if (j === 2) {
      numSum3 += nums[i][j];
    }
  }
  if (i === 2) {
    totalList.push(numSum1, numSum2, numSum3);
  }
}
console.log(totalList);

console.log('ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ');
// 열과 행을 바꿔서 풀기
n = nums.length;
m = nums[0].length;
totalList = [];
ijsum = 0;
for (let j = 0; j < m; j++) {
  for (let i = 0; i < n; i++) {
    ijsum += nums[i][j];
  }
  totalList.push(ijsum);
  ijsum = 0;
}
console.log('새로운 답', totalList);

console.log('10. 구구단이 들어있는 2차원 배열을 만드시오.');
guguCulumn = 4; // 열의 갯수
guguLow = 5; // 행의 갯수
guguLowList = [];
guguCulumnList = [];
for (let i = 1; i <= guguLow; i++) {
  for (let j = 1; j <= guguCulumn; j++) {
    guguLowList.push(i * j);
    if (guguLowList.length === guguCulumn) {
      guguCulumnList.push(guguLowList);
      guguLowList = [];
    }
  }
}
console.log(guguCulumnList);
