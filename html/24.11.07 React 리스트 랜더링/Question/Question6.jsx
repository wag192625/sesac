import React from "react";

export default function Question6() {
  const card = [
    <div className="box" style={{ backgroundColor: "black", width: 100, height: 100 }}></div>,
    <div className="box" style={{ backgroundColor: "pink", width: 100, height: 100 }}></div>,
    <div className="box" style={{ backgroundColor: "yellow", width: 100, height: 100 }}></div>,
    <div className="box" style={{ backgroundColor: "white", width: 100, height: 100 }}></div>,
  ];
  const cardList = card.map((el) => {
    return el;
  });
  return <div style={{ display: "flex" }}>{cardList}</div>;
}
