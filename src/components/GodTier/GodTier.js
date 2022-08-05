import React from "react";
import Check from "../Check/Check";

export default function GodTier() {
  return (
    <div>
      <Check color={"gold"} font={6} left={20} top={50} />
      <Check color={"purple"} font={6} left={31} top={50} />
      <Check color={"blue"} font={6} left={42} top={50} />
      <Check color={"green"} font={6} left={53} top={50} />
      <Check color={"orange"} font={6} left={64} top={50} />
      <Check color={"red"} font={6} left={75} top={50} />
      <Check color={"platinum"} font={20} left={50} top={70} name={true} />
      {/* <Check color={"red"} font={6} left={90} top={45} /> */}
      {/* <Check color={"red"} font={6} left={66} top={45} /> */}
    </div>
  );
}
