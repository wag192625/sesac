arr = ['a', 'b', 'c'];
for (let i in arr) {
  console.log(i, arr[i]);
  // in 은 배열의 주소값을 나타냄
  // 배열[i]로 하면 배열의 값을 나타냄.
}

ob = {
  a: 1,
  b: 2,
  c: 3,
};

for (let i in ob) {
  console.log(ob);
}
