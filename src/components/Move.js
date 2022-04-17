import React from "react";
import { connect } from "react-redux";
import { PHASE_2 } from "../constants/constants";

import { setPlayerChoice, setPhase } from "../store/actions/index";

const Move = (props) => {
  const { name, dispatch } = props;

  const setPlayerMove = () => {
    dispatch(setPlayerChoice(name));
    dispatch(setPhase(PHASE_2));
  };

  return (
    <div
      className={`move move-${name.toLowerCase()}`}
      onClick={setPlayerMove}
    ></div>
  );
};

export default connect()(Move);
