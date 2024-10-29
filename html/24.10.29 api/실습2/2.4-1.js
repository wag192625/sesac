async function getPost() {
  const baseURL = 'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc';
  const path = '/getCtprvnRltmMesureDnsty';
  const params = new URLSearchParams({
    sidoName: '서울',
    ver: '1.0',
    pageNo: 1,
    numOfRows: 100,
    returnType: 'json',
    // serviceKey:
    //   'QCm74%2BCmnGEJDOzL%2BwIQlr5LUEwzfwgYfGGBPpAaEE2fkCqaJ7PKQD9dbuf0S5jOQxE5BRmyZmkO6cMDg%2BO72A%3D%3D',
    serviceKey:
      'QCm74+CmnGEJDOzL+wIQlr5LUEwzfwgYfGGBPpAaEE2fkCqaJ7PKQD9dbuf0S5jOQxE5BRmyZmkO6cMDg+O72A==',
    // 안되면 인증키 바꿔보기
  });

  let URL = `${baseURL}${path}?${params}`;
  const res = await fetch(URL);
  let data = await res.text();
  console.log(data);
}

getPost();
