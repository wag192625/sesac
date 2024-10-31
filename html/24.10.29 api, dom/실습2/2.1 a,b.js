// 시도별 실시간 측정정보 조회에서  확인 가능한 시도 이름을 전부 작성하시오.
// query parameter에 넣을 수 있는 이름이 무엇일까?

function filterNetworkError(data) {
  // return data.filter((el) => {
  const result = data.filter((el) => {
    if (el.pm25Flag === '통신장애') return false;

    return true;
  });
  return result;
}
async function getPost() {
  try {
    const baseURL = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=QCm74%2BCmnGEJDOzL%2BwIQlr5LUEwzfwgYfGGBPpAaEE2fkCqaJ7PKQD9dbuf0S5jOQxE5BRmyZmkO6cMDg%2BO72A%3D%3D&returnType=json&numOfRows=100&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0`;
    // const baseURL = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=QCm74%2BCmnGEJDOzL%2BwIQlr5LUEwzfwgYfGGBPpAaEE2fkCqaJ7PKQD9dbuf0S5jOQxE5BRmyZmkO6cMDg%2BO72A%3D%3D&returnType=json&numOfRows=100&sidoName=%EC%A0%84%EA%B5%AD&ver=1.0`;
    // const path = '/items';
    let URL = `${baseURL}`;
    const res = await fetch(URL);
    let data = await res.json();

    data = data.response.body.items;

    // 통신 장애 데이터를 거르고 싶다.
    data = filterNetworkError(data);

    let minPm25Value = Infinity;
    let minPm25StationName = '';

    for (let datum of data) {
      const pm25Value = parseInt(datum.pm25Value);
      // console.log(pm25Value);
      if (pm25Value < minPm25Value) {
        minPm25Value = pm25Value;
        minPm25StationName = datum.stationName;
      }
    }
    console.log(minPm25Value);
    console.log(minPm25StationName);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
