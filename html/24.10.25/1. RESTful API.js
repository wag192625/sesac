// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json()) // 응답 데이터를 JSON으로 변환
//   .then((data) => console.log(data)) // 데이터를 처리
//   .catch((error) => console.error('Error:', error)); // 에러 처리

console.log('--- GET ------------------------');

// get

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => {
//     // console.log(json);
//     const title = json.title;
//     console.log(title);
//   })
//   .catch((error) => console.error(error));

// 위와 아래가 같은건가

// 특정 데이터 get으로 가져오기
async function getPostById(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json(); // json으로 된 데이터를 응답 받음
  console.log(data);
  // const json = response.json();
  // pedding 나오는 이유 = 스택에 잡혀있어서 대기중이라
  // async / await를 통해 비동기 처리

  // const title = json.title;
  // console.log(title);
}

getPostById(1);

// 전체 데이터 가져오기
async function getPosts() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  data.forEach((value) => {
    console.log(value.title);
  });
  const titles = data.map((value) => value.title);
  console.log(titles);
  // console.log(data);
  // const json = response.json();
  // const title = json.title;
  // console.log(title);
}

console.log('--- POST ------------------------');

// getPosts();

// post는 생성하는 것

async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        // headers: 내가 json이라는 것을 알려줄거야 하고 씀
        // 없으면 서버에서 json이라는 것을 알지 못하기에
        // 생성이 안되거나 body의 내용이 전달이 안됨.
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// createPost();

console.log('---------------------------');

// const data1 = JSON.stringify({
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// });

// const data2 = {
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// };

// console.log(data1); // json은 텍스트로 변환, 문자는 "", 숫자는 상관 x
// console.log(data2);

// put

async function updatePost() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

updatePost();

//
