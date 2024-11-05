// 가로, 세로 사이즈를 조절할 수 있는
// title, content를 가지는 Card컴포넌트를 만드시오.

function CardData(props) {
  let cardValue = props.cardValue;
  let size = props.size;
  return (
    <div style={{ width: size.width, height: size.height }}>
      <h1>{cardValue.title}</h1>
      <p>{cardValue.content}</p>
    </div>
  );
}

export default function Card() {
  return (
    <>
      <div className="box">
        <CardData
          cardValue={{
            title: "title1",
            content: "content1",
          }}
          size={{ width: 140, height: 140 }}
        />
      </div>
      <div className="box">
        <CardData
          cardValue={{
            title: "title2",
            content: "content2",
          }}
          size={{ width: 140, height: 140 }}
        />
      </div>
    </>
  );
}
