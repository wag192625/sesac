import React from "react";

export default function Container2({ children }) {
  return (
    <div
      style={{
        border: "2px solid red",
      }}
    >
      {children}
    </div>
  );
}
