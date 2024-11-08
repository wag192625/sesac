import React from "react";

export default function Question2() {
  const users = [
    { id: 1, name: "김철수", age: 25, hobby: "독서" },
    { id: 2, name: "이영희", age: 28, hobby: "요리" },
    { id: 3, name: "박민수", age: 23, hobby: "게임" },
  ];
  const mappingName = users.map((el) => {
    return (
      <div>
        {el.id}
        {el.name}
        {el.age}
        {el.hobby}
      </div>
    );
  });
  return <div>{mappingName}</div>;
}
