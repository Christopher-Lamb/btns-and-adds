import React, { useEffect } from "react";
import CSS from "./Counter.module.css";

export default function Counter({ children }) {
  let digitSize = undefined;
  switch (children.toString().split("").length) {
    case 1:
      break;
    case 2:
      digitSize = CSS.double;
      break;
    case 3:
      digitSize = CSS.triple;
      break;
    default:
      break;
  }

  return (
    <div className={CSS.container}>
      <h1 className={`${CSS.counter} ${digitSize}`}>{children}</h1>
    </div>
  );
}
