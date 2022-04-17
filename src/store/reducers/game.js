import { SET_PLAYER_CHOICE, PLAY_AGAIN } from "../actions/names";
import {
  COMPUTER,
  COMPUTER_CHOICES,
  PAPER,
  PLAYER,
  ROCK,
  SCISSORS,
  TIE,
} from "../../constants/constants";
import { generateRandomNumber } from "../../utils/random-number";

const computerChoicePickHandler = () => {
  const randomNumber = generateRandomNumber(1, 3).toString();
  const randomChoice = COMPUTER_CHOICES[randomNumber];
  return randomChoice;
};

const generateOutcome = (playerPick, computerPick) => {
  if (playerPick === ROCK && computerPick === ROCK) {
    return TIE;
  } else if (playerPick === ROCK && computerPick === PAPER) {
    return COMPUTER;
  } else if (playerPick === ROCK && computerPick === SCISSORS) {
    return PLAYER;
  } else if (playerPick === PAPER && computerPick === ROCK) {
    return PLAYER;
  } else if (playerPick === PAPER && computerPick === PAPER) {
    return TIE;
  } else if (playerPick === PAPER && computerPick === SCISSORS) {
    return COMPUTER;
  } else if (playerPick === SCISSORS && computerPick === ROCK) {
    return COMPUTER;
  } else if (playerPick === SCISSORS && computerPick === PAPER) {
    return PLAYER;
  } else if (playerPick === SCISSORS && computerPick === SCISSORS) {
    return TIE;
  }
};

const setPlayerChoiceHandler = (state, playerPick) => {
  const computerPick = computerChoicePickHandler();
  const outcome = generateOutcome(playerPick, computerPick);
  let score = state.score;
  if (outcome === PLAYER) {
    score = score + 1;
  } else if (outcome === COMPUTER) {
    score = score - 1;
  }
  console.log({ computerPick, playerPick, outcome, score });
  return { computerPick, playerPick, outcome, score };
};

const gameState = (
  state = { computerPick: "", playerPick: "", outcome: "", score: 0 },
  action
) => {
  switch (action.type) {
    case SET_PLAYER_CHOICE:
      return setPlayerChoiceHandler(state, action.choice);
    case PLAY_AGAIN:
      return {
        computerPick: "",
        playerPick: "",
        outcome: "",
        score: state.score,
      };
    default:
      return state;
  }
};

export default gameState;
