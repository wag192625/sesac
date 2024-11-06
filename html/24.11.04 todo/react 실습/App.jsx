import Wellcome from "./Wellcome";
import Card from "./Card";
import Btn from "./Btn";
import Button2 from "./Button2";
import Container from "./Container";
import Container2 from "./Container2";

//App.jsx에서 name을 전달하여 인사말 출력

function App() {
  return (
    <div>
      {/* <Container></Container> */}
      <Container2>
        <Button2>컨테이너 안의 버튼</Button2>
      </Container2>
      <Wellcome name={"정명훈"}></Wellcome>
      <Card></Card>
      {/* <Card1
        title="제목"
        content="내용"
        style={{
          width: "100px",
          height: "100px",
        }}
      ></Card1> */}
      {/* <Btn btnStyle={{ backgroundColor: "blue", text: "확인" }}></Btn> */}
      {/* <Btn btnStyle={{ backgroundColor: "red", text: "취소" }}></Btn>
      <Btn btnStyle={{ backgroundColor: "gray", text: "보류" }}></Btn>
      <Btn btnStyle={{ backgroundColor: "pink", text: "1억년" }}></Btn> */}
      <Btn backColor={"blue"} text={"확인"}></Btn>
      <Btn backColor={"red"} text={"취소"}></Btn>
      <Btn backColor={"gray"} text={"보류"}></Btn>
      <Btn backColor={"pink"} text={"1억년"}></Btn>
      <Button2> 두번째 버튼 </Button2>
    </div>
  );
}

export default App;
