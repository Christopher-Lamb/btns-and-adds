import React from "react";
// import CSS from "./TypedLine.module.css";
import styled, { keyframes } from "styled-components";

const Typer = styled.p`
  position: relative;
  font-family: monospace;
  width: fit-content;
  user-select: none;
  margin: 0px;
  color: ${(props) => props.color};
  &:before,
  &:after {
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
  }
  &:before {
    background-color: ${(props) => props.bgColor};
  }
  &:after {
    visibility: hidden;
    width: 0.125rem;
    background-color: ${(props) => props.barColor};
  }
`;

const typeWriter = keyframes`
to {
    left: 100%;
  }
`;
const startBlink = keyframes`
  to {
    visibility: visible;
  }
`;
const blink = keyframes`
  to {
    visibility: hidden;
  }
`;

const AnimatedTyper = styled(Typer)`
  &:before {
    animation: ${typeWriter} ${(props) => props.typeSpeed}s
      steps(${(props) => props.charLength})
      ${(props) => props.preBlink + props.holdBlink}s forwards;
  }
  &:after {
    animation: ${typeWriter} ${(props) => props.typeSpeed}s
        steps(${(props) => props.charLength})
        ${(props) => props.preBlink + props.holdBlink}s forwards,
      ${startBlink} steps(2) 1000ms ${(props) => props.preBlink}
        ${(props) => props.holdBlink}s forwards,
      ${blink} steps(2, start) 1000ms ${(props) => props.postBlinks}
        ${(props) => props.typeSpeed + props.preBlink + props.holdBlink}s
        forwards;
  }
`;
// ${(props) => props.postBlinks}
export default function TypedLine({
  text = "123456789012345",
  preBlink = 1,
  typeSpeed = 3,
  postBlinks = 1,
  bgColor = "white",
  color = "black",
  barColor = "white",
  holdBlink = 2,
}) {
  const charLength = text.split("").length;

  return (
    <>
      <AnimatedTyper
        charLength={charLength}
        typeSpeed={typeSpeed}
        preBlink={preBlink}
        postBlinks={postBlinks}
        bgColor={bgColor}
        color={color}
        barColor={barColor}
        holdBlink={holdBlink}
      >
        {text}
      </AnimatedTyper>
    </>
  );
}
