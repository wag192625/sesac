async function getPost() {
  try {
    const baseURL = 'https://jsonplaceholder.typicode.com/posts';
    const params = new URLSearchParams({
      userId: 1,
      // id: 1,
    });

    const URL = `${baseURL}?${params}`;

    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();

//   data.forEach((value) => {
//   console.log(value.title);
// });
