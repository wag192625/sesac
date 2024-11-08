import { useState } from 'react';
import Button from './Button';

function App() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState('입력');
  const [color, setColor] = useState('');
  let [good, setGood] = useState('좋아요');

  return (
    <>
      <div>{num}</div>
      <Button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        추가
      </Button>
      <Button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        제거
      </Button>

      <div>{text}</div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <div style={{ width: 100, height: 100, border: '1px solid tomato', margin: '1rem', backgroundColor: `${color}` }}></div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />

      <button
        className="goodBtn"
        onClick={(e) => {
          setGood(good === '좋아요' ? ((e.target.style.backgroundColor = 'tomato'), (good = '좋아요 취소')) : ((e.target.style.backgroundColor = 'blue'), (good = '좋아요')));
          // .goodBtn.style.backgroundColor:'tomato'
        }}
      >
        {good}
      </button>
      {/* <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        추가
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        제거
      </button> */}
    </>
  );
}

export default App;
