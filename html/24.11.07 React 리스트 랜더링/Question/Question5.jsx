// function BtnColor(props) {
//   const text = props.btnText;
//   if (text === "확인") {
//     return <button style={{ backgroundColor: "blue" }}>{text}</button>;
//   } else if (text === "취소") {
//     return <button style={{ backgroundColor: "red" }}>{text}</button>;
//   } else if (text === "보류") {
//     return <button style={{ backgroundColor: "gray" }}>{text}</button>;
//   } else if (text === "1억년") {
//     return <button style={{ backgroundColor: "pink" }}>{text}</button>;
//   }
// }

// export default function Question5() {
//   return <BtnColor btnText={"확인"}></BtnColor>;
// }

import React from "react";

export default function Question5() {
  const buttons = [
    <button style={{ color: "white", backgroundColor: "blue" }}>확인</button>,
    <button style={{ color: "white", backgroundColor: "red" }}>취소</button>,
    <button style={{ color: "white", backgroundColor: "gray" }}>보류</button>,
    <button style={{ color: "white", backgroundColor: "pink" }}>1억년</button>,
  ];
  const BtnList = buttons.map((el) => {
    console.log(el);
    return <div>{el}</div>;
  });
  return <div style={{ display: "flex" }}>{BtnList}</div>;
}
// rerturn div를 button으로
