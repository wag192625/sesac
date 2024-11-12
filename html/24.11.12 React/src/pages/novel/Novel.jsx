// - 웹툰 카테고리에는 메인페이지, 요일마다 모아놓은 페이지들이 존재해.
// 웹툰 카테고리에 접속하면 어느 페이지에 있던 다른 요일에 접근할 수 있어.

// - 소설 카테고리에는 메인페이지, 장르마다 모아놓은 페이지들이 존재해.
// 소설 카테고리에 접속하면 어느 페이지에 있던 다른 장르에 접근할 수 있어.

// - 웹툰, 소설 어떤 카테고리에서든 다른 카테고리에 접근할 수 있어.

import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Novel() {
  const genre = [
    { id: 'fantasy', genre_ko: '판타지' },
    { id: 'romance', genre_ko: '로맨스' },
    { id: 'mystery', genre_ko: '미스터리' },
  ];
  return (
    <>
      <div>
        <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
          {genre.map((genre) => {
            const { id, genre_ko } = genre;
            return (
              <li key={id} style={{ padding: '0, 10px' }}>
                <Link to={`/novel/${id}`} state={{ genre }}>
                  {genre_ko}
                </Link>
              </li>
            );
          })}
        </ul>
        <Outlet></Outlet>
      </div>
    </>
  );
}
