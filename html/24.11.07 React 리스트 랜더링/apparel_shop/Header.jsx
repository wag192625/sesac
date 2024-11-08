import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ alignContent: "center", textAlign: "center", fontSize: "800" }}> Header</div>
      <Nav></Nav>
    </header>
  );
}
