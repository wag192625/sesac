console.log('객체 배열 생성');
// - 객체를 저장한 배열 `posts` `comments` 를 생성한다.
// - 생성한 두 배열을 활용해 남은 문제를 해결한다.

const posts = [
  { id: 1, title: '첫 번째 포스트', content: '첫 번째 포스트 내용' },
  { id: 2, title: '두 번째 포스트', content: '두 번째 포스트 내용' },
  { id: 3, title: '세 번째 포스트', content: '세 번째 포스트 내용' },
];

const comments = [
  { id: 1, postId: 1, content: '첫 번째 댓글' },
  { id: 2, postId: 2, content: '두 번째 댓글' },
  { id: 3, postId: 1, content: '세 번째 댓글' },
  { id: 4, postId: 2, content: '네 번째 댓글' },
  { id: 5, postId: 3, content: '다섯 번째 댓글' },
  { id: 6, postId: 2, content: '여섯 번째 댓글' },
  { id: 7, postId: 3, content: '일곱 번째 댓글' },
  { id: 8, postId: 3, content: '여덟 번째 댓글' },
  { id: 9, postId: 1, content: '아홉 번째 댓글' },
  { id: 10, postId: 3, content: '열 번째 댓글' },
];

console.log('게시글 번호와 제목');
// - 모든 `posts` 의 번호 `id`, 제목 `title`을 출력한다.
// - 실행 결과
//     1 첫 번째 포스트
//     2 두 번째 포스트
//     3 세 번째 포스트

for (i in posts) {
  console.log(posts[i].id, posts[i].title);
}

console.log('1번 게시글의 댓글');
// - 게시글 번호 `postId` 가 1인 모든 `comments` 를 출력한다.
// - 실행 결과
//     { id: 1, postId: 1, content: '첫 번째 댓글' }
//     { id: 3, postId: 1, content: '세 번째 댓글' }
//     { id: 9, postId: 1, content: '아홉 번째 댓글' }
for (i in comments) {
  if (comments[i].postId === 1) {
    console.log(comments[i]);
  }
}

console.log('모든 게시글과 댓글');

// - 모든 `posts` 와 `comments` 의 객체를 출력한다.
// - 이때, 개별 `posts` 에 연관된 `comments`를 구분해서 출력한다.
// - 실행 결과
for (i in posts) {
  console.log(posts[i]);
  for (j in comments) {
    if (comments[j].postId === posts[i].id) {
      console.log(comments[j]);
    }
  }
}
//     1번 Post
//     { id: 1, title: '첫 번째 포스트', content: '첫 번째 포스트 내용' }
//     1번 Post의 Comments
//     { id: 1, postId: 1, content: '첫 번째 댓글' }
//     { id: 3, postId: 1, content: '세 번째 댓글' }
//     { id: 9, postId: 1, content: '아홉 번째 댓글' }
//     2번 Post
//     { id: 2, title: '두 번째 포스트', content: '두 번째 포스트 내용' }
//     2번 Post의 Comments
//     { id: 2, postId: 2, content: '두 번째 댓글' }
//     { id: 4, postId: 2, content: '네 번째 댓글' }
//     { id: 6, postId: 2, content: '여섯 번째 댓글' }
//     3번 Post
//     { id: 3, title: '세 번째 포스트', content: '세 번째 포스트 내용' }
//     3번 Post의 Comments
//     { id: 5, postId: 3, content: '다섯 번째 댓글' }
//     { id: 7, postId: 3, content: '일곱 번째 댓글' }
//     { id: 8, postId: 3, content: '여덟 번째 댓글' }
//     { id: 10, postId: 3, content: '열 번째 댓글' }

console.log('댓글의 수');

// - 개별 `posts` 당 연관된 `comments` 의 수를 출력한다.
// - 실행 결과
//     1번 게시글의 댓글 수 3
//     2번 게시글의 댓글 수 3
//     3번 게시글의 댓글 수 4
for (i in posts) {
  num = 0;
  for (j in comments) {
    if (comments[j].postId === posts[i].id) {
      num += 1;
    }
  }
  console.log(`${posts[i].id}번 게시글의 댓글 수 ${num}`);
}
