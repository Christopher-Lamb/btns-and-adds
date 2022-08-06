import CSS from "./App.module.css";
import Title from "./components/TItle";
import Button from "./components/Buttons/Button/Button";
import { useEffect, useRef, useState } from "react";
import useInterval from "./hooks/useInterval";
// import Dice from "./components/Buttons/Dice";
import Fail from "./components/Fail/Fail";
import Check from "./components/Check/Check";
import Counter from "./components/Counter/Counter";
import GodTier from "./components/GodTier/GodTier";
import Nice from "./components/Nice/Nice";
import Start from "./components/TypedLine/TypedLine";
import Intro from "./components/Intro/Intro";
import Reload from "./components/Reload/Reload";

function App() {
  const count = useRef(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const checkColor = useRef("");
  const [isFail, setIsFail] = useState();
  const [countSwitch, setCountSwitch] = useState(true);
  const isGameOver = useRef(false);
  const [isIntro, setIsIntro] = useState(true);

  const handleClick = async () => {
    // runTest(range);
    if (!isGameOver.current) {
      let result = await game();
      if (result) {
        //If win
        setIsFail(false);
        setIsSuccess(true);
        isGameOver.current = true;
      } else if (!result) {
        //If Fail
        if (!isGameOver.current) {
          // setIsSuccess(false);
          setIsFail(false);
          setIsFail(true);
        }
      }
    } else {
      setCountSwitch(false);
      setCountSwitch(true);
    }
  };

  const game = async () => {
    //increment
    await setCountSwitch(false);
    await setCountSwitch(true);
    count.current = count.current + 1;

    let rand1 = 0;
    let rand2 = 0;
    const range = await getRange(count.current);

    checkColor.current = await getColor(count.current);
    rand1 = await getRandom(range);
    rand2 = await getRandom(range);

    const result = await getResult(rand1, rand2);
    return result;
  };

  const getResult = (num1, num2) => {
    //If num1 and 2 are === true
    if (num1 === num2) {
      //Win
      return true;
    } else {
      //False
      return false;
    }
  };

  const getRange = (count) => {
    //Takes a Count and returns a range
    let range = 0;
    //Count is off by one therefore < actually is <=
    if (count <= 10) {
      //Gold 1% 10
      range = 1000;
    } else if (count <= 50) {
      //Purple 8% 40
      range = 500;
    } else if (count <= 100) {
      //Blue 27% 50
      range = 277;
    } else if (count <= 150) {
      //Green 64% 50
      range = 78;
    } else if (count <= 200) {
      //Orange 125% 100
      range = 40;
    } else {
      range = 36;
    }

    return range;
  };

  const getColor = (count) => {
    let color = "";
    if (count <= 10) {
      color = "gold";
    } else if (count <= 50) {
      color = "purple";
    } else if (count === 69) {
      color = "nice";
    } else if (count <= 100) {
      color = "blue";
    } else if (count <= 150) {
      color = "green";
    } else if (count <= 200) {
      color = "orange";
    } else if (count >= 350) {
      color = "god";
    } else {
      color = "red";
    }
    return color;
  };

  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleIntroClose = () => {
    setIsIntro(false);
  };

  const handleReload = () => {
    setIsFail(false);
    setIsSuccess(false);
    count.current = 0;
    checkColor.current = "";
    setIsIntro(false);
    isGameOver.current = false;
  };

  return (
    <div className={CSS.container}>
      {/* <button style={{ position: "fixed", top: "0px" }} onClick={runTest}>
        Test
      </button> */}

      <Button onClick={handleClick}>
        {isFail && <Fail />}
        {isSuccess && <Check color={checkColor.current} />}
        {countSwitch && <Counter>{count.current}</Counter>}
        {isIntro && <Intro onClose={handleIntroClose} />}
        <Reload onClick={handleReload} />
      </Button>

      {/* <Start /> */}
    </div>
  );
}

export default App;
