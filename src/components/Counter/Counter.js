import React from "react";
import CSS from "./Counter.module.css";

export default function Counter({ children }) {
  return (
    <div className={CSS.container}>
      <h1>{children}</h1>
    </div>
  );
}
