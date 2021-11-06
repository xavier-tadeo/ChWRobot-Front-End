import actionsTypes from "../actions/actionTypes";

const roobotsReducer = (roobots = [], action) => {
  let newRoobot;

  switch (action.type) {
    case actionsTypes.getRoobots:
      newRoobot = [...action.roobots];
      break;
    default:
      newRoobot = roobots;
  }
  return newRoobot;
};

export default roobotsReducer;
