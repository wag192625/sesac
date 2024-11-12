// - 웹툰 카테고리에는 메인페이지, 요일마다 모아놓은 페이지들이 존재해.
// 웹툰 카테고리에 접속하면 어느 페이지에 있던 다른 요일에 접근할 수 있어.

// - 소설 카테고리에는 메인페이지, 장르마다 모아놓은 페이지들이 존재해.
// 소설 카테고리에 접속하면 어느 페이지에 있던 다른 장르에 접근할 수 있어.

// - 웹툰, 소설 어떤 카테고리에서든 다른 카테고리에 접근할 수 있어.

import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Webtoon() {
  const weeks = [
    { id: 'mon', week_ko: '월' },
    { id: 'tue', week_ko: '화' },
    { id: 'wed', week_ko: '수' },
    { id: 'thu', week_ko: '목' },
    { id: 'fri', week_ko: '금' },
    { id: 'sat', week_ko: '토' },
    { id: 'sun', week_ko: '일' },
  ];
  return (
    <>
      <div>
        <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
          {weeks.map((week) => {
            const { id, week_ko } = week;
            return (
              <li key={id} style={{ padding: '0, 10px' }}>
                <Link to={`/webtoon/${id}`} state={{ week }}>
                  {week_ko}요일
                </Link>
              </li>
            );
          })}
        </ul>
        <Outlet/>
      </div>
    </>
  );
}
