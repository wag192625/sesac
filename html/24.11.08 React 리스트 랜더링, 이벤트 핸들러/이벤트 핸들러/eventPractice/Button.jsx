import React from "react";

export default function Button(props) {
  const { backColor, onClick, children } = props;
  return (
    <button style={{ backgroundColor: backColor }} onClick={onClick}>
      {children}
    </button>
  );
}
