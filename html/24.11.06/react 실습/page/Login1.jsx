import React from "react";

export default function Login1({ isLogged }) {
  // console.log(isLogged);
  return <p>{isLogged ? null : "로그인이 필요합니다."}</p>;
}
