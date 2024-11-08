import React from "react";

export default function Nav() {
  return (
    <ul style={{ display: "flex", flexDirection: "row" }}>
      <li style={{ textAlign: "center", padding: "0 10px", listStyle: "none" }}>
        <a href="">HOME</a>
      </li>
      <li style={{ textAlign: "center", padding: "0 10px", listStyle: "none" }}>
        <a href="">PRODURTS</a>
      </li>
    </ul>
  );
}
