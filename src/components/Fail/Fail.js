import React from "react";
import CSS from "./Fail.module.css";

export default function Fail() {

  return (
    <>
      <div id="fail">
        <div
          className={`${CSS.scene}`}
          // style={{
          //   WebkitTransform: "rotateX(11deg) rotateY(1443deg)",
          //   MozTransform: "rotateX(11deg) rotateY(1443deg)",
          //   transform: "rotateX(11deg) rotateY(1443deg)",
          // }}
        >
          <div
            className={`${CSS.shape} ${CSS.cuboid1} ${CSS.cub1} ${CSS.cubano}`}
          >
            <div className={`${CSS.face} ${CSS.ft}`}></div>
            <div className={`${CSS.face} ${CSS.bk}`}></div>
            <div className={`${CSS.face} ${CSS.rt}`}></div>
            <div className={`${CSS.face} ${CSS.lt}`}></div>
            <div className={`${CSS.face} ${CSS.bm}`}></div>
            <div className={`${CSS.face} ${CSS.tp}`}></div>
          </div>
          <div
            className={`${CSS.shape} ${CSS.cuboid2} ${CSS.cub2} ${CSS.cubano}`}
          >
            <div className={`${CSS.face} ${CSS.ft}`}></div>
            <div className={`${CSS.face} ${CSS.bk}`}></div>
            <div className={`${CSS.face} ${CSS.rt}`}></div>
            <div className={`${CSS.face} ${CSS.lt}`}></div>
            <div className={`${CSS.face} ${CSS.bm}`}></div>
            <div className={`${CSS.face} ${CSS.tp}`}></div>
            <div className={`${CSS.cr} ${CSS.cr0}`}>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s0}`}></div>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s1}`}></div>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s2}`}></div>
            </div>
            <div className={`${CSS.cr} ${CSS.cr1}`}>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s0}`}></div>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s1}`}></div>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s2}`}></div>
            </div>
            <div className={`${CSS.cr} ${CSS.cr2}`}>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s0}`}></div>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s1}`}></div>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s2}`}></div>
            </div>
            <div className={`${CSS.cr} ${CSS.cr3}`}>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s0}`}></div>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s1}`}></div>
              <div className={`${CSS.face} ${CSS.side} ${CSS.s2}`}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
