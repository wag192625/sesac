let fruits = ['사과', '바나나', '딸기'];
console.log(fruits[0]); // 사과

let numbers = [1, 2, '3'];

console.log(numbers[2]); // 3

numbers.push(4);
console.log(numbers); // [ 1, 2, '3', 4 ]

//

let pop_number = numbers.pop();

console.log(numbers); // [ 1, 2 ]
console.log(pop_number); // 3

// pop을 했을 때 