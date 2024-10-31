studentList = [
  '가경식',
  '강경훈',
  '김동훈',
  '김상호',
  '노영재',
  '박재훈',
  '박종빈',
  '박하은',
  '서승덕',
  '오예진',
  '원성준',
  '육슬찬',
  '윤대정',
  '이상호',
  '이재현',
  '이태영',
  '임수빈',
  '임유진',
  '정명훈',
  '정승연',
  '정여원',
  '최원호',
  '차윤선',
];
const container = document.querySelector('#container');
stdLeng = studentList.length + 5;
// console.log(stdLeng);
// for (let i = 0; i<stdLeng; i++) {

// }
for (let i = 0; i <= stdLeng; i++) {
  num = 0;
  const newDiv = document.createElement('div');
  container.append(newDiv, 1);
  const newOl = document.createElement('ol');
  newDiv.append(newOl);
  // if (i == 1) {
  //   const newLi = document.createElement('li');
  //   newLi.textContent = null;
  //   newOl.append(newli);
  //   num++;
  //   continue;
  // }
  for (let j = 7; j > num; j--) {
    const newLi = document.createElement('li');
    newli.textContent = studentList[i];
    newOl.append(newli);
    num++;
  }
  num = 0;
}
