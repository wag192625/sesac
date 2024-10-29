// 시도별 실시간 측정정보 조회에서  확인 가능한 시도 이름을 전부 작성하시오.
// 시도별 실시간 측정정보 조회가 아니라 측정소별 실시간 측정정보 조회로 검색해야함
async function getPost() {
  try {
    const baseURL = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=QCm74%2BCmnGEJDOzL%2BwIQlr5LUEwzfwgYfGGBPpAaEE2fkCqaJ7PKQD9dbuf0S5jOQxE5BRmyZmkO6cMDg%2BO72A%3D%3D&returnType=json&numOfRows=800&pageNo=1&stationName=%EC%A2%85%EB%A1%9C%EA%B5%AC&dataTerm=MONTH&ver=1.0`;
    let URL = `${baseURL}`;
    const res = await fetch(URL);
    let data = await res.json();

    data = data.response.body.items;
    // pm25Value = 한달치
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
