// 미세먼지(한국환경공단_에어코리아_대기오염정보)관련 API를 활용하여 다음 질문에 답하시오.

// 1. `시도별 실시간 측정정보 조회`에서  확인 가능한 시도 이름을 전부 작성하시오.
//     1. query parameter에 넣을 수 있는 이름이 무엇일까?
// 2. `시도별 실시간 측정정보 조회`의 `서울`의 데이터에 대해, 초 미세먼지 농도가 가장 낮은 `stationName`을 찾으시오.
//     1. 초 미세먼지 농도는 어떤 key값으로 표현이 될까?

function filterNetworkError(data) {
  const result = data.filter((el) => {
    if (el.pm25Flag === '통신장애') return false;

    return true;
  });
  return result;
}

async function fetchDustInfo() {
  const URL =
    'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=%2BiEaRW7xrORUYANDjKPrnvW9DAAqDJNKv3E4sm3Vwbes8db4rFSa%2FTnEVPEmaCWv1BzeVE2ek9Fv8onYt9obpQ%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0';
  const res = await fetch(URL);
  let data = await res.json();

  data = data.response.body.items;

  // 통신장애 데이터를 거르고 싶다.
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
}

fetchDustInfo();
