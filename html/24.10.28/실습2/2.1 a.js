// 시도별 실시간 측정정보 조회에서  확인 가능한 시도 이름을 전부 작성하시오.
// query parameter에 넣을 수 있는 이름이 무엇일까?

async function getPost() {
  try {
    const baseURL = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=QCm74%2BCmnGEJDOzL%2BwIQlr5LUEwzfwgYfGGBPpAaEE2fkCqaJ7PKQD9dbuf0S5jOQxE5BRmyZmkO6cMDg%2BO72A%3D%3D&returnType=json&numOfRows=100&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0`;
    // const baseURL = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=QCm74%2BCmnGEJDOzL%2BwIQlr5LUEwzfwgYfGGBPpAaEE2fkCqaJ7PKQD9dbuf0S5jOQxE5BRmyZmkO6cMDg%2BO72A%3D%3D&returnType=json&numOfRows=100&sidoName=%EC%A0%84%EA%B5%AD&ver=1.0`;
    // const path = '/items';
    let URL = `${baseURL}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.response.body.items);

    // const mise = data.body;
    // console.log(mise);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
