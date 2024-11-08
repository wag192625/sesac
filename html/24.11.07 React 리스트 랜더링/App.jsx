import Question1 from "./Question/Question1";
import Question2 from "./Question/Question2";
import Question3 from "./Question/Question3";
import Question4 from "./Question/Question4";
import Question5 from "./Question/Question5";
import Question6 from "./Question/Question6";
import QuestionCafeMenu from "./CafeMenu/QuestionCafeMenu";
import ApparelShop from "./apparel_shop/ApparelShop";

function App() {
  return (
    <div style={{ width: "100vw" }}>
      <ApparelShop></ApparelShop>
      {/* <div style={{ width: "600px", margin: "0 auto" }}>
      <QuestionCafeMenu></QuestionCafeMenu> */}
      {/* <Question1></Question1>
        <Question2></Question2>
        <Question3></Question3>
        <Question4></Question4>
        <Question5></Question5>
        <Question6></Question6> */}
    </div>
  );
}

export default App;
