import actionsTypes from "./actionTypes";

export const getRoobotsAction = (roobots) => ({
  type: actionsTypes.getRoobots,
  roobots,
});
