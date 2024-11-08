import EventPractice from './eventPractice/EventPractice';
import Button from './eventPractice/Button';
function App() {
  return (
    <>
      <EventPractice></EventPractice>
      <Button
        backColor="blue"
        onClick={() => {
          alert('확인 완료');
        }}
      >
        확인
      </Button>
      <Button
        backColor="tomato"
        onClick={() => {
          alert('취소 완료');
        }}
      >
        취소
      </Button>
      <Button
        backColor="gray"
        onClick={() => {
          alert('보류 완료');
        }}
      >
        보류
      </Button>
      <Button
        backColor="pink"
        onClick={() => {
          alert('1억년 완료');
        }}
      >
        1억년
      </Button>
    </>
  );
}

export default App;
