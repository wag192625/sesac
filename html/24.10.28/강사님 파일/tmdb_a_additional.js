async function getPopularMovies() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    // const path = '/popular';
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key: 'eab8c9893e725b2e167187cef66bae3d',
      language: 'ko',
    });
    // const params = 'api_key=eab8c9893e725b2e167187cef66bae3d&language=ko';

    const URL = `${baseURL}${path}?${params}`;
    // const URL =
    //   'https://api.themoviedb.org/3/movie/popular?api_key=eab8c9893e725b2e167187cef66bae3d';

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;

    const my_movie = {
      title: 'sesac the movie',
      // 만일 평점은 높은데 평가자는 낮다면 어떻게 할 것인가에 대한 문제
      vote_average: 10.0,
      vote_count: 1,
    };

    movies.push(my_movie);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPopularMovies();
