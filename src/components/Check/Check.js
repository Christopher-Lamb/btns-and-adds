import React, { useEffect, useRef } from "react";
import CSS from "./Check.module.css";
import GodTier from "../GodTier/GodTier";
import Nice from "../Nice/Nice";
export default function Check({ color, top, font, left, name }) {
  const longRect = useRef();
  const shortRect = useRef();

  //GOLD ORANGE BLUE GREEN
  //

  useEffect(() => {
    colorGenerator();
  }, []);

  const colorGenerator = () => {
    let x = null;
    switch (color) {
      case "green":
        x = CSS.green;
        break;
      case "gold":
        x = CSS.gold;
        break;
      case "orange":
        x = CSS.orange;
        break;
      case "yellow":
        x = CSS.yellow;
        break;
      case "blue":
        x = CSS.blue;
        break;
      case "purple":
        x = CSS.purple;
        break;
      case "red":
        x = CSS.red;
        break;
      case "platinum":
        x = CSS.platinum;
        //render god
        break;
      case "god":
        x = CSS.god;
        //render god
        break;
    }

    switch (color) {
      case "red":
      case "green":
      case "gold":
      case "blue":
      case "purple":
      case "orange":
      case "platinum":
        longRect.current.className = `${CSS.shape} ${CSS.cuboid1} ${CSS.cub1} ${x} ${CSS.cubano}`;
        shortRect.current.className = `${CSS.shape} ${CSS.cuboid2} ${CSS.cub2} ${x} ${CSS.cubano}`;
    }
  };

  const getComp = () => {
    let comp = null;
    switch (color) {
      case "god":
        comp = <GodTier />;
        break;
      case "nice":
        comp = <Nice />;
        break;
      default:
        break;
    }
    return comp;
  };

  return (
    <>
      {color === "god" || color === "nice" ? (
        getComp()
      ) : (
        <div id="tridivCheck">
          <div
            className={CSS.scene}
            style={{
              top: `${top}px`,
              fontSize: `${font}px`,
              left: `${left}px`,
            }}

            // style="-webkit-transform:rotateX(-1deg) rotateY(-3577deg); -moz-transform:rotateX(-1deg) rotateY(-3577deg); -ms-transform:rotateX(-1deg) rotateY(-3577deg); transform:rotateX(-1deg) rotateY(-3577deg); "
          >
            <div
              ref={longRect}
              className={`${CSS.shape} ${CSS.cuboid1} ${CSS.cub1} ${CSS.cubano}`}
            >
              <div className={`${CSS.face} ${CSS.ft}`}>
                {name &&
                  color.split("").map((letter, i) => {
                    return <p key={i}>{letter.toUpperCase()}</p>;
                  })}
              </div>
              <div className={`${CSS.face} ${CSS.bk}`}></div>
              <div className={`${CSS.face} ${CSS.rt}`}></div>
              <div className={`${CSS.face} ${CSS.lt}`}></div>
              <div className={`${CSS.face} ${CSS.bm}`}></div>
              <div className={`${CSS.face} ${CSS.tp}`}></div>
            </div>
            <div
              ref={shortRect}
              className={`${CSS.shape} ${CSS.cuboid2} ${CSS.cub2}  ${CSS.cubano}`}
            >
              <div className={`${CSS.face} ${CSS.ft}`}></div>
              <div className={`${CSS.face} ${CSS.bk}`}></div>
              <div className={`${CSS.face} ${CSS.rt}`}></div>
              <div className={`${CSS.face} ${CSS.lt}`}></div>
              <div className={`${CSS.face} ${CSS.bm}`}></div>
              <div className={`${CSS.face} ${CSS.tp}`}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
