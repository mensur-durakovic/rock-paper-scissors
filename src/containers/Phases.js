import React from "react";
import { connect } from "react-redux";
import FirstPhase from "./FirstPhase";
import SecondPhase from "./SecondPhase";
import { PHASE_1, PHASE_2 } from "../constants/constants";

const Phases = (props) => {
  const { displayRulesModal, modalVisible, phase, playerPick, computerPick } =
    props;
  return (
    <>
      {phase === PHASE_1 && (
        <FirstPhase
          displayRulesModal={displayRulesModal}
          modalVisible={modalVisible}
        />
      )}
      {phase === PHASE_2 && (
        <SecondPhase
          displayRulesModal={displayRulesModal}
          modalVisible={modalVisible}
          playerPick={playerPick}
          computerPick={computerPick}
        />
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  phase: state.phases.currentPhase,
  playerPick: state.game.playerPick,
  computerPick: state.game.computerPick,
});

export default connect(mapStateToProps)(Phases);
