// 3. `시도별 실시간 측정정보 조회`의 `서울`의 데이터를 `stationName`으로 접근하기 쉬운 자료구조로 재구성하시오. 
//     1. 그런 자료구조는 무엇일까?

async function fetchDustInfo() {
  const URL =
    'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=%2BiEaRW7xrORUYANDjKPrnvW9DAAqDJNKv3E4sm3Vwbes8db4rFSa%2FTnEVPEmaCWv1BzeVE2ek9Fv8onYt9obpQ%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0';
  const res = await fetch(URL);
  let data = await res.json();

  data = data.response.body.items;

  const objectData = {};
  for (let datum of data) {
    const stationName = datum.stationName;
    objectData[stationName] = datum;
  }

  console.log(objectData['광진구']);
  console.log(objectData['관악구']);
  console.log(objectData['성동구']);
}

fetchDustInfo();
