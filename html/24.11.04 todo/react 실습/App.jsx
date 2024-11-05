import Wellcome from "./Wellcome";
import Card from "./Card";
import Btn from "./Btn";
//App.jsx에서 name을 전달하여 인사말 출력

function App() {
  return (
    <div>
      <Wellcome name={"정명훈"}></Wellcome>
      <Card></Card>
      {/* <Btn btnStyle={{ backgroundColor: "blue", text: "확인" }}></Btn> */}
      {/* <Btn btnStyle={{ backgroundColor: "red", text: "취소" }}></Btn>
      <Btn btnStyle={{ backgroundColor: "gray", text: "보류" }}></Btn>
      <Btn btnStyle={{ backgroundColor: "pink", text: "1억년" }}></Btn> */}
      <Btn backColor={"blue"} text={"확인"}></Btn>
      <Btn backColor={"red"} text={"취소"}></Btn>
      <Btn backColor={"gray"} text={"보류"}></Btn>
      <Btn backColor={"pink"} text={"1억년"}></Btn>
    </div>
  );
}

export default App;
