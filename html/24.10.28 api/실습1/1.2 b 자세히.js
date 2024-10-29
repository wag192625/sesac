// function makeURL(baseURL, path, params) {
//   let URL = `${baseURL}${path}?${params}`;
//   return URL;
// }

/*
현재 상영중인 영화의 목록을 return한다.
*/

// 공용 데이터
const baseURL = 'https://api.themoviedb.org/3/movie';
const params = new URLSearchParams({
  api_key: 'd37d9397faf0e7cb3bc33b5e07f64992',
  language: 'ko',
});

// 1. 현재 상영중인 영화
async function getNowPlayingMovies() {
  const path = '/now_playing';

  let URL = `${baseURL}${path}?${params}`;

  const response = await fetch(URL);
  const data = await response.json();

  const movies = data.results;
  return movies;
}

// 2. 평점 높은 영화
function getPopularMovie(movies) {
  const maxVoteMovie = movies.reduce((acc, cur) => {
    const accVoteAerage = acc.vote_average;
    const curVoteAerage = cur.vote_average;

    if (accVoteAerage > curVoteAerage) {
      return acc;
    } else if (accVoteAerage < curVoteAerage) {
      return cur;
    }
  });
  return maxVoteMovie;
}

// 3. detail은 api 사이트에서 movie 뒤에 movie_id 키가 필요하다 함 (새로 참조하기 때문에 비동기)
async function getDetailMovie(movieID) {
  const path = `/${movieID}`;
  const URL = `${baseURL}${path}?${params}`;

  const response2 = await fetch(URL);
  const data = await response2.json();
  // console.log(data);
  return data;
}

async function main() {
  // 1. 현재 상영중인 영화를 가져온다.
  //    api에서 가져와야 하기 때문에 비동기 처리
  const movies = await getNowPlayingMovies();
  // 2. 영화 중에서 가장 평점이 높은 영화를 가져온다.
  //    이미 가져온 api 데이터 이용이기 때문에 비동기 x
  const movie = getPopularMovie(movies);
  // 3. 그 영화의 detail한 정보를 가져온다
  const movieId = movie.id;
  // 4. 수익
  const detailMovie = await getDetailMovie(movieId);
  console.log(detailMovie.revenue);
}
//////////////////////////////////////////////

main();
