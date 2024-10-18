// let fruits = ['사과', '바나나', '딸기'];
// console.log(fruits[0]); // 사과

// let numbers = [1, 2, '3'];
// console.log(numbers[2]); // 3

// 배열 뒤에 원소 집어넣기
// numbers.push(4);
// console.log(numbers);

//마지막 원소 빼기
// // numbers.pop();
// let pop_number = numbers.pop();
// console.log(numbers);
// console.log(pop_number);

// //뺀거 다시 넣기
// numbers.push(pop_number);
// console.log(numbers);

// // 첫 번째 원소 추가
// numbers.unshift(0);
// console.log(numbers);

// // 첫 번째 원소 제거
// let number = numbers.shift();

// console.log(numbers);
// console.log(number);

let uniqueValues = new Set([1, 2, 2, 3]);

console.log(1, uniqueValues); // Set { 1, 2, 3 }

console.log(2, uniqueValues.has(4)); // Set { 1, 2, 3 }

uniqueValues.delete(2);
console.log(3, uniqueValues); // Set(2) { 1, 3 }

let del_false = uniqueValues.delete(2);

console.log(4, del_false);
// delete를 두 번 해도 오류가 안뜨는 이유는
// delete시 해당 요소가 없으면 False를 반환하기 때문.