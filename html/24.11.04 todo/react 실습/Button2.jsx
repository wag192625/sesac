import Btn from "./Btn";

export default function Button2(props) {
  const { text, children } = props;
  return (
    <div>
      <Btn backColor="green" text={children}>
        {/* <Btn backColor text={children}> */}
        {text}
      </Btn>
      {/*  */}
    </div>
  );
}
