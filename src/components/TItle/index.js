import React from "react";
import CSS from "./Title.module.css";

export default function Title({ children }) {
  return (
    <div className={CSS.container}>
      <h1 className={CSS.title}>{children}</h1>
    </div>
  );
}
