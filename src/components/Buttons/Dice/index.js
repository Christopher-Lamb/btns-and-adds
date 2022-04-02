import React, { useRef } from "react";
import CSS from "./Dice.module.css";

export default function Dice() {
  const dieEvenRef = useRef();
  const dieOddRef = useRef();
  const rollDice = () => {
    console.log(dieEvenRef);
    const dice = [dieEvenRef.current, dieOddRef.current];
    dice.forEach((die) => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });
  };

  const toggleClasses = (die) => {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  };

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      <div className={CSS.dice}>
        <ol
          ref={dieEvenRef}
          className={`${CSS.dieList} ${CSS.evenRoll}`}
          data-roll="1"
          id="die-1"
        >
          <li className={CSS.dieItem} data-side="1">
            <span className={CSS.dot}></span>
          </li>
          <li className={CSS.dieItem} data-side="2">
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
          </li>
          <li className={CSS.dieItem} data-side="3">
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
          </li>
          <li className={CSS.dieItem} data-side="4">
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
          </li>
          <li className={CSS.dieItem} data-side="5">
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
          </li>
          <li className={CSS.dieItem} data-side="6">
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
          </li>
        </ol>
        <ol
          className={`${CSS.dieList} ${CSS.oddRoll}`}
          data-roll="1"
          id="die-2"
          ref={dieOddRef}
        >
          <li className={CSS.dieItem} data-side="1">
            <span className={CSS.dot}></span>
          </li>
          <li className={CSS.dieItem} data-side="2">
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
          </li>
          <li className={CSS.dieItem} data-side="3">
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
          </li>
          <li className={CSS.dieItem} data-side="4">
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
          </li>
          <li className={CSS.dieItem} data-side="5">
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
          </li>
          <li className={CSS.dieItem} data-side="6">
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
            <span className={CSS.dot}></span>
          </li>
        </ol>
      </div>
      <button type="button" id="roll-button" onClick={rollDice}>
        Roll Dice
      </button>
    </>
  );
}
