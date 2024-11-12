import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function NovelList() {
  const novelList = [
    { genre: 'fantasy', title: '판타지 소설1', imgSrc: '' },
    { genre: 'fantasy', title: '판타지 소설2', imgSrc: '' },
    { genre: 'fantasy', title: '판타지 소설3', imgSrc: '' },

    { genre: 'romance', title: '로맨스 소설1', imgSrc: '' },
    { genre: 'romance', title: '로맨스 소설2', imgSrc: '' },
    { genre: 'romance', title: '로맨스 소설3', imgSrc: '' },

    { genre: 'mystery', title: '미스터리 소설1', imgSrc: '' },
    { genre: 'mystery', title: '미스터리 소설2', imgSrc: '' },
    { genre: 'mystery', title: '미스터리 소설3', imgSrc: '' },
  ];

  const {} = useParams();
  const location = useLocation();

  const { genre } = location.state;
  const { id } = genre;
  const novelGenre = novelList.filter((el) => {
    return el.genre === id;
  });
  return (
    <>
      <div>
        <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
          {novelGenre.map((novel) => {
            const { title, imgSrc } = novel;
            return (
              <div style={{ width: '140px' }}>
                <p>{title}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
