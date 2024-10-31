// 만약 아래 코드가 에러면
try {
  // 해봐
  console.log(a);
} catch (err) {
  // 에러 발생했어?
  console.log('에러 이름', err.name);
  console.log('에러 메세지', err.message);
}
// 모든 에러는 예상 가능해야 함.
// 특수한 상황들을 자체적으로 에러 처리 해야 하는 경우가 있음.
// if문을 통해 각각의 에러들을 받아서

function checkAge(num) {
  if (typeof num !== 'number') {
    throw new Error('숫자가 아닙니다.');
  } else if (num < 0) {
    throw new Error('나이가 음수입니다.');
  }
  console.log(num + 1);
}

try {
  checkAge('문자열'); // Error 발생
} catch (error) {
  console.error(error.message); // 숫자가 아닙니다.
}
