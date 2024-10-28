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

    // 현재 상영중인 영화 중 평점이 가장 높은 영화의 수익
    const maxVoteMovie = movies.reduce((acc, cur) => {
      const accVoteAerage = acc.vote_average;
      const curVoteAerage = cur.vote_average;
      
      if (accVoteAerage > curVoteAerage) {
        return acc;
      } else if (accVoteAerage < curVoteAerage) {
        return cur;
      }
    });
    const movieId = maxVoteMovie.id;
    
    ///// 기존 api엔 없어서 detail에서 가져와야 했음
    URL = `${baseURL}/${movieId}?${params}`;
    const response2 = await fetch(URL);
    const data2 = await response2.json();
    console.log(data2);
    const revenue = data2.revenue;

    console.log(revenue);
    /////

    // 현재 상영중인 영화 중 평점이 7 이상인 영화를 나열
    function vote7() {
      movie_list = [];
      for (i in movies) {
        // console.log(movies[i].vote_average);
        if (movies[i].vote_average > 7) {
          movie_list.push(movies[i]);
        }
      }
      return movie_list;
    }
    // console.log(vote7());

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
    // console.log(`image.tmdb.org/t/p/w500/${max_vote_average_image()}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
