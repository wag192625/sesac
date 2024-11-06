export default function Container({ children }) {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
      {/* children을 받아서 위의 div로 감싸줌 */}
    </div>
  );
}
