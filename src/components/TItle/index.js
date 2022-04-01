import React, { useRef } from "react";
import CSS from "./Title.module.css";
import SecretBtn from "../SecretBtn";

export default function Title({ children }) {
  const titleRef = useRef();
  const handleSecretBtn = () => {
    titleRef.current.classList.toggle(CSS.rainbow);
    titleRef.current.childNodes[0].childNodes[0].classList.toggle(CSS.secretBtnText);
  };

  return (
    <>
      <div ref={titleRef} className={CSS.container}>
        <div className={CSS.wrapper}>
          <h1 className={CSS.text1}>{children}</h1>
        </div>
        <SecretBtn onClick={handleSecretBtn} />
      </div>
    </>
  );
}
