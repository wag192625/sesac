import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  // let num = 0;
  return (
    <>
      <div>{num}</div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        버튼
      </button>
    </>
  );
}

export default App;
