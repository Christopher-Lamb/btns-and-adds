import React from "react";
import CSS from "./Button.module.css";

export default function Button({ onClick, height, width, marginSides }) {
  return (
    <>
      <button onClick={onClick} className={CSS.pushable}>
        <span className={CSS.shadow}></span>
        <span className={CSS.edge}></span>
        <span
          style={{
            height: `${height}px`,
            width: `${width}px`,
            // margin: `${marginSides}px 0px`,
          }}
          className={CSS.front}
        >
          Push me
        </span>
      </button>
    </>
  );
}
