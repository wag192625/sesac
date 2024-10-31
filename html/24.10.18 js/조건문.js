money = 10000;
hungry = 100;

console.log(money > 1000 && hungry > 50);

// if (condition) {
//   condition이 true일 때 실행
// }else{
//   condition이 false일 때 실행
// }

if (money > 1000 && hungry > 50) {
  console.log('치킨 사먹기');
} else {
  // if문의 명제가 거짓(boolean)일 때 실행
  console.log('치킨 안 사먹기');
}

온도 = 20;

if (온도 < 22) {
  console.log('보일러 틀어줘');
} else {
  console.log('에어컨 틀어줘');
}

money = 2000;
//돈이 10000보다 많으면 치킨
//돈이 5000보다 많으면 라면
//돈이 1000보다 많으면 과자
//돈이 100보다 많으면 추파춥스
if (money > 1000) {
  console.log('치킨');
} else {
  if (money > 5000) {
    console.log('라면');
  } else {
    if (money > 1000) {
      console.log('과자');
    }
  }
}

if (money > 10000) {
  console.log('치킨');
} else if (money > 5000) {
  console.log('라면');
} else if (money > 1000) {
  console.log('과자');
} else if (money > 100) {
  console.log('사탕');
}

let 농도 = 101;

if (농도 > 250) {
  console.log('매우나쁨');
} else if (농도 > 100) {
  console.log('나쁨');
} else if (농도 > 50) {
  console.log('좋음');
} else if (농도 > 0) {
  console.log('매우좋음');
}

let x = 10;

let result = x % 2 === 0 ? '짝수' : '홀수';

console.log(`${x}는 ${result}입니다.`);

const dust = 110;

/// 참조 자료형

