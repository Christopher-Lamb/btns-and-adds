import React from "react";
import CSS from "./Button.module.css";

export default function Button({ onClick }) {
 
  return (
    <div style={{ position: "relative", height: "100px" }}>
      <button onClick={onClick} className={CSS.pushable}>
        <span className={CSS.shadow}></span>
        <span className={CSS.edge}></span>
        <span className={CSS.front}></span>
      </button>
    </div>
  );
}
