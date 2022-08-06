import React from "react";
import Check from "../Check/Check";

export default function GodTier() {
  return (
    <div>
      <Check color={"gold"} font={6} left={-112.5} top={-55} />
      <Check color={"purple"} font={6} left={-67.5} top={-55} />
      <Check color={"blue"} font={6} left={-22.5} top={-55} />
      <Check color={"green"} font={6} left={22.5} top={-55} />
      <Check color={"orange"} font={6} left={67.6} top={-55} />
      <Check color={"red"} font={6} left={112.5} top={-55} />
      <Check color={"platinum"} font={20} left={0} top={-170} name={true} />
      {/* <Check color={"red"} font={6} left={90} top={45} /> */}
      {/* <Check color={"red"} font={6} left={66} top={45} /> */}
    </div>
  );
}
