// - nums가 다음과 같을 때, 구구단 3단을 출력하시오
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log('for in')
// for (i in nums) {
//   num = nums[i];
//   console.log(`3 x ${num} : ${num * 3}`);
// }

// console.log('for of')
// for (i of nums) {
//   console.log(`3 x ${i} : ${i * 3}`);
// }

// console.log('for')
// for (let i = 1; i <= nums.length; i++) {
//   console.log(`3 x ${i} : ${i * 3}`);
// }

// console.log('while')
// i=0
// while(i <= 9) {
//   console.log(`3 x ${i} : ${i*3}`)
//   i++
// }

// console.log('while(true)')
// i=0
// while(true) {
//   if(i == 10) break
//   console.log(`3 x ${i} : ${i*3}`)
//   i++
// }

// - 출석번호를 포함하여 '1번 jun', ..., '4번 lynda'의 형태로 출석을 부르시오.
names = ['jun', 'beemo', 'ken', 'lynda'];

// console.log('for in')
for (i in names) {
  name = names[i];
  console.log(++i, '번', name);
}

// console.log('for of')
j = names.length - 1;
num1 = names.length;
for (i of names) {
  num2 = num1 - j;
  console.log(num2, '번', i);
  num1++;
}

// console.log('for')
for (let i = 0; i < names.length; i++) {
  num = i + 1;
  console.log(num, '번', names[i]);
}

// console.log('while')
i = 0;
while (i < names.length) {
  num = i + 1;
  console.log(num, '번', names[i]);
  i++;
}

// console.log('while(true)')
while (true) {
  if (i == names.length) break;
  num = i + 1;
  console.log(num, '번', names[i]);
  i++;
}

names = ['jun', 'beemo', 'ken'];
ages = [18, 28, 37]; // 일 때,
// 18살 jun
// 28살 beemo
// 37살 ken
// 을 출력하시오.
console.log('for in');
// for (i in names)

console.log('for of');
console.log('for');
for (let i = 0; i < names.length; i++) {
  console.log(ages[i], '살 ', names[i]);
}
console.log('while');
i = 0;
while (i < names.length) {
  console.log(ages[i], '살 ', names[i]);
  i++;
}
console.log('while(true)');

// // - 주어진 리스트의 길이를 계산하시오
names = ['jun', 'beemo', 'ken', 'lynda'];

for (let i = 1; i <= names.length; i++) {
  console.log(i);
}
i = 1;
while (i <= names.length) {
  console.log(i);
  i++;
}
// // - 주어진 리스트의 합계를 계산하시오
console.log('합계');
console.log('for');
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num = 0;
for (let i = 0; i < nums.length; i++) {
  num += nums[i];
  console.log(num);
}

console.log('while');
i=0;
num = 0;
while (i < nums.length) {
  num += nums[i];
  console.log(num);
  i++;
}







// // - 주어진 리스트에서 최소값을 찾으시오

// nums = [10, 6, 8, 5, 4, 2, 3, 11];

// // - 주어진 리스트의 순서를 뒤집으시오
// nums = [10, 6, 8, 5, 4];
// // 결과
// // const reversedNum = [4, 5, 8, 6, 10]



