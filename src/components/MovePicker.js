import React from "react";
import Move from "./Move";

import TriangleBg from "../assets/bg-triangle.svg";
import { ROCK, PAPER, SCISSORS } from "../constants/constants";

export default function MovePicker(props) {
  return (
    <div className="move-picker">
      <img
        className="move-picker-triangle-bg"
        src={TriangleBg}
        alt="triangle bg"
      ></img>
      <div className="move-picker-top-row">
        <Move name={ROCK} />
        <Move name={PAPER} />
      </div>
      <div className="move-picker-bottom-row">
        <Move name={SCISSORS} />
      </div>
    </div>
  );
}
