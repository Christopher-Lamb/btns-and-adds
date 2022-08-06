import React from "react";
import CSS from "./Reload.module.css";
import { IoMdRefresh } from "react-icons/io";

export default function Reload({ onClick }) {
  return (
    <div className={CSS.container}>
      <button onClick={onClick} className={CSS.pushable}>
        <span className={CSS.shadow}></span>
        <span className={CSS.edge}></span>
        <span className={CSS.front}>
          <IoMdRefresh />
        </span>
      </button>
    </div>
  );
}
