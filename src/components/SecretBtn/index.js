import React, { useRef } from "react";
import CSS from "./SecretBtn.module.css";

export default function SecretBtn({ onClick }) {
  const btnRef = useRef();
  const handleClick = () => {
    btnRef.current.classList.toggle(CSS.transparent);
    const cover = btnRef.current.childNodes[0];
    const btn = btnRef.current.childNodes[1];
    cover.classList.toggle(CSS.transparent);
    btn.classList.toggle(CSS.transparent);
    const span = btn.childNodes[0];
    span.classList.toggle(CSS.transparent);

    onClick();
  };
  return (
    <>
      <div ref={btnRef} className={CSS.btnWrapper}>
        <div className={CSS.cover} />
        <button onClick={handleClick} class={CSS.pushable}>
          <span class={CSS.btnFront}></span>
        </button>
      </div>
    </>
  );
}
