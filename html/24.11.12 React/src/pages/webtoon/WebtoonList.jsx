import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function WebtoonList() {
  const webtoonList = [
    { week: 'mon', title: '월요일 웹툰1', imgSrc: '' },
    { week: 'mon', title: '월요일 웹툰2', imgSrc: '' },
    { week: 'mon', title: '월요일 웹툰3', imgSrc: '' },

    { week: 'tue', title: '화요일 웹툰1', imgSrc: '' },
    { week: 'tue', title: '화요일 웹툰2', imgSrc: '' },
    { week: 'tue', title: '화요일 웹툰3', imgSrc: '' },

    { week: 'wed', title: '수요일 웹툰1', imgSrc: '' },
    { week: 'wed', title: '수요일 웹툰2', imgSrc: '' },
    { week: 'wed', title: '수요일 웹툰3', imgSrc: '' },

    { week: 'thu', title: '목요일 웹툰1', imgSrc: '' },
    { week: 'thu', title: '목요일 웹툰2', imgSrc: '' },
    { week: 'thu', title: '목요일 웹툰3', imgSrc: '' },

    { week: 'fri', title: '금요일 웹툰1', imgSrc: '' },
    { week: 'fri', title: '금요일 웹툰2', imgSrc: '' },
    { week: 'fri', title: '금요일 웹툰3', imgSrc: '' },

    { week: 'sat', title: '토요일 웹툰1', imgSrc: '' },
    { week: 'sat', title: '토요일 웹툰2', imgSrc: '' },
    { week: 'sat', title: '토요일 웹툰3', imgSrc: '' },

    { week: 'sun', title: '일요일 웹툰1', imgSrc: '' },
    { week: 'sun', title: '일요일 웹툰2', imgSrc: '' },
    { week: 'sun', title: '일요일 웹툰3', imgSrc: '' },
  ];

  const {} = useParams();
  const location = useLocation();

  const { week } = location.state;
  const { id } = week;
  const todayWebtoon = webtoonList.filter((el) => {
    return el.week === id;
  });
  return (
    <>
      <div>
        <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
          {todayWebtoon.map((webtoon) => {
            const { week, title, imgSrc } = webtoon;
            return (
              // <div style={{ width: '140px' }} key={week}>
              <div style={{ width: '140px' }}>
                <img src={imgSrc} alt="" />
                <p>{title}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
