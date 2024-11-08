import React from "react";
export default function Question1() {
  const names = ["김철수", "이영희", "박민수", "정지원", "최동욱"];
  const mappingName = names.map((name) => {
    return <div>{name}</div>;
  });
  return <div>{mappingName}</div>;
}
