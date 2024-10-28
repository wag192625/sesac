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
    // console.log(movies.vote_average);

    // 현재 상영중인 영화 중 평점이 가장 높은 영화의 포스터 이미지 조회
    function max_vote_average_image() {
      rank = -Infinity;
      for (i of movies) {
        if (i.vote_average > rank) {
          rank = i;
        }
      }
      return rank.poster_path;
    }
    console.log(`image.tmdb.org/t/p/w500${max_vote_average_image()}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
