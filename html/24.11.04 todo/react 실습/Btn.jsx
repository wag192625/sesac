// function BtnColor(props) {
//   const text = props.btnText;
// }

export default function Btn({ text, backColor }) {
  // export default function Btn(props) {
  // const text = props.text;
  // const backColor = props.backColor;
  return (
    // 백그라운드 컬러를 프롭스로
    <>
      <button style={{ backgroundColor: backColor }}>{text}</button>
    </>
  );
}
