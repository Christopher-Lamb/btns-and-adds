import CSS from "./App.module.css";
import Title from "./components/TItle";
import Button from "./components/Buttons/Button";
import { useEffect, useRef } from "react";
// import Dice from "./components/Buttons/Dice";

function App() {
  const getBtnDimensions = () => {
    let screenWidth = window.screen.width * 0.8;
    const containerWidth = screenWidth - 24;
    const btnWidth = containerWidth / 4;
    const btnHeight = btnWidth / 3.4;
    // console.log(height, btnWidth, marginSides);
    return Array(4).fill(
      <Button height={btnHeight} width={btnWidth} marginSides={3} />
    );
  };

  return (
    <>
      <Title>Love 4 Buttons</Title>
      <div className={CSS.container}>{getBtnDimensions()}</div>
    </>
  );
}

export default App;
