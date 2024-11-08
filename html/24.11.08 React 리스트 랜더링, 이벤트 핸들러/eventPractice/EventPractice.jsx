export default function EventPractice() {
  // 버튼을 클릭하면 => 버튼 클릭이라는 alert가 나옴
  function handleClick() {
    alert("버튼 클릭2");
  }
  return (
    <>
      {/* 1번 문제. 버튼을 클릭했을 때 버튼 클릭이라는 alert가 나오는 기능을 구현하시오 */}
      <button onClick={() => alert("버튼 클릭1")}>클릭</button>
      <button onClick={handleClick}>클릭</button>

      {/* 2번 문제. 크기가 100px, border가 있는 div 위에 마우스를 올렸을 때 색이 검은색으로 바뀌고, 내렸을 때 다시 흰색으로 바뀌도록 구현하시오. */}
      <div
        style={{ widows: 100, height: 100, border: "1px solid black" }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "black";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "white";
        }}
      ></div>

      {/* 3번 문제.- input 태그에 입력을 하면 입력값이 콘솔에 출력되도록 구현하시오.
    - react에서는 `input` 이벤트 대신 `change`이벤트를 활용합니다. */}
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </>
  );
}
