import React from "react";

export default function Question3() {
  const products = [
    { id: 1, name: "노트북", price: 55000 },
    { id: 2, name: "마우스", price: 15000 },
    { id: 3, name: "키보드", price: 45000 },
    { id: 4, name: "마우스패드", price: 8000 },
    { id: 5, name: "모니터", price: 150000 },
  ];
  const price = products.filter((el) => {
    return el.price >= 30000;
  });
  // 배열 안의 오브젝트는 출력을 못함
  const List = price.map((el) => {
    const { id, name, price } = el;
    return (
      <div>
        <span>{id}</span>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    );
  });
  return <div>{List}</div>;
}
