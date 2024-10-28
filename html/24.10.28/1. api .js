async function getPost() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key: 'd37d9397faf0e7cb3bc33b5e07f64992',
      languege: 'ko',
    });

    const URL = `${baseURL}${path}?${params}`;

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;
    // console.log(data.results);
    const movie = movies[0];
    console.log(movie.title);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
