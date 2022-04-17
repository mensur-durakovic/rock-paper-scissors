import React from "react";
import ScoreBoard from "../components/ScoreBoard";
import MovePicker from "../components/MovePicker";
import RulesButton from "../components/RulesButton";
import RulesModal from "../components/RulesModal";

export default function FirstPhase(props) {
  const { modalVisible, displayRulesModal } = props;
  return (
    <>
      <ScoreBoard />
      <MovePicker />
      <RulesButton onClickHandler={displayRulesModal} />
      {modalVisible && <RulesModal onClickHandler={displayRulesModal} />}
    </>
  );
}
