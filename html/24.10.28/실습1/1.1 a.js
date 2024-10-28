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

    // 현재 상영중인 영화 중 평점이 가장 높은 영화
    function max_vote_average() {
      rank = -Infinity;
      for (i of movies) {
        if (i.vote_average > rank) {
          rank = i;
        }
      }
      return rank;
    }
    // console.log(max_vote_average());

    //////

    maxVoteAverage = movies.reduce((acc, cur) => {
      const accVoteAerage = acc.vote_average;
      const curVoteAerage = cur.vote_average;

      if (accVoteAerage > curVoteAerage) {
        return acc;
      } else if (accVoteAerage < curVoteAerage) {
        return cur;
      } else {
        const accVoteCount = acc.vote_count;
        const curVoteCount = cur.vote_count;
        // 생략
      }
    });
    // console.log(maxVoteAverage);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
