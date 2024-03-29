import React from "react";
import CSS from "./Button.module.css";

export default function Button({ onClick, children }) {
  return (
    <div className={CSS.container}>
      {children}
      <button onClick={onClick} className={CSS.pushable}>
        <span className={CSS.shadow}></span>
        <span className={CSS.edge}></span>
        <span className={CSS.front}></span>
      </button>
    </div>
  );
}
