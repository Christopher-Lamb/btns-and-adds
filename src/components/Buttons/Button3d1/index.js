import React from "react";
import CSS from "./Button3d1.module.css";

export default function Button3d1() {
  return (
    <>
      <button class={CSS.pushable}>
        <span class={CSS.shadow}></span>
        <span class={CSS.edge}></span>
        <span class={CSS.front}>Push me</span>
      </button>
    </>
  );
}
