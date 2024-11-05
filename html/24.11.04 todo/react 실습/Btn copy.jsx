function BtnColor(props) {
  const text = props.btnText;
  if (text === "확인") {
    return <button style={{ backgroundColor: "blue" }}>{text}</button>;
  } else if (text === "취소") {
    return <button style={{ backgroundColor: "red" }}>{text}</button>;
  } else if (text === "보류") {
    return <button style={{ backgroundColor: "gray" }}>{text}</button>;
  } else if (text === "1억년") {
    return <button style={{ backgroundColor: "pink" }}>{text}</button>;
  }
}

export default function Btn({ text }) {
  return <BtnColor btnText={text}></BtnColor>;
}
