import React from "react";
import CSS from "./Intro.module.css";
import TypedLine from "../TypedLine/TypedLine";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Intro({ onClose }) {
  const text = [
    "Hello . . .",
    "Welcome to my game . . .",
    "Press the button",
    "You win accordingly",
    "Some rewards are very rare",
    "Can you find them all",
    ">> _ _ _ _ _ _ _ _",
  ];
  return (
    <div className={CSS.container}>
      <div className={CSS.blocker}></div>
      <div className={CSS.intro}>
        <div className={CSS.toolBar}>
          <div className={CSS.close} onClick={onClose}>
            <AiOutlineCloseSquare size={"1.5rem"} />
          </div>
        </div>
        {/* Total 6 */}
        <div className={CSS.lines}>
          <TypedLine
            color={"white"}
            bgColor={"black"}
            typeSpeed={0.5}
            preBlink={1}
            postBlinks={1}
            holdBlink={1}
            text={` Hi I'm THE BUTTON`}
          ></TypedLine>
          <TypedLine
            color={"white"}
            bgColor={"black"}
            typeSpeed={1}
            preBlink={1}
            postBlinks={2}
            holdBlink={4}
            text={`Welcome to MY game`}
          ></TypedLine>
          <TypedLine
            barColor={"white"}
            color={"red"}
            bgColor={"black"}
            typeSpeed={0.5}
            preBlink={1}
            postBlinks={1}
            holdBlink={8}
            text={`Press the button`}
          ></TypedLine>
          <TypedLine
            color={"lightgreen"}
            bgColor={"black"}
            typeSpeed={0.5}
            preBlink={1}
            postBlinks={1}
            holdBlink={10.5}
            text={`AND YOU'LL WIN!!!`}
          ></TypedLine>
          <TypedLine
            color={"white"}
            bgColor={"black"}
            typeSpeed={1}
            preBlink={1}
            postBlinks={1}
            holdBlink={14}
            text={`This is a game of chance O_o`}
          ></TypedLine>
          <TypedLine
            color={"white"}
            bgColor={"black"}
            typeSpeed={1}
            preBlink={1}
            postBlinks={1}
            holdBlink={18}
            text={`To learn how to play keep`}
          ></TypedLine>
          <TypedLine
            color={"white"}
            bgColor={"black"}
            typeSpeed={0.5}
            preBlink={1}
            postBlinks={1}
            holdBlink={20}
            text={`clicking`}
          ></TypedLine>
          <TypedLine
            color={"yellow"}
            bgColor={"black"}
            typeSpeed={0.5}
            preBlink={1}
            postBlinks={1}
            holdBlink={24}
            text={`===============================`}
          ></TypedLine>
          <TypedLine
            color={"yellow"}
            bgColor={"black"}
            typeSpeed={1}
            preBlink={2}
            postBlinks={1}
            holdBlink={26.5}
            text={`? ? ? ? ? ? ? ? = 8`}
          ></TypedLine>
          <TypedLine
            color={"white"}
            bgColor={"black"}
            typeSpeed={0.5}
            preBlink={1}
            postBlinks={1}
            holdBlink={30.5}
            text={`Hint longest and shortest`}
          ></TypedLine>
          <TypedLine
            color={"white"}
            bgColor={"black"}
            typeSpeed={0.5}
            preBlink={1}
            postBlinks={1}
            holdBlink={32}
            text={`scores are best.`}
          ></TypedLine>
        </div>
        <TypedLine
          color={"magenta"}
          bgColor={"black"}
          typeSpeed={0.5}
          preBlink={1}
          postBlinks={1}
          holdBlink={35}
          text={`<3 <3 Goodluck <3 <3`}
        ></TypedLine>
      </div>
    </div>
  );
}
