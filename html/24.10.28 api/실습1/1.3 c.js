//////////////////////////////////////////////
async function getPost() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key: 'd37d9397faf0e7cb3bc33b5e07f64992',
      language: 'ko',
    });

    let URL = `${baseURL}${path}?${params}`;

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;

    // 현재 상영중인 영화 중 평점이 7 이상인 영화를 나열
    function vote7() {
      movie_list = [];
      for (i in movies) {
        if (movies[i].vote_average >= 7) {
          movie_list.push(movies[i].title);
        }
      }
      return movie_list;
    }
    console.log(vote7());
  } catch (error) {
    console.error('Error:', error);
  }


  ////

  
async function main() {
  // 1. 현재 상영중인 영화를 가져온다.
  const movies = await getNowPlayingMovies();
  // 

}

}

getPost();
