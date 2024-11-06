import React from "react";
function Logged({ isLogin }) {
  if (isLogin === true) {
    return <p>환영합니다.</p>;
  } else {
    return <p>로그인이 필요합니다.</p>;
  }
}

export default function Login() {
  return (
    <>
      <div>
        <Logged isLogin={true}></Logged>
      </div>
      <div>
        <Logged isLogin={false}></Logged>
      </div>
    </>
  );
}
