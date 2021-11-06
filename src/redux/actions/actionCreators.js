import actionsTypes from "./actionTypes";

export const getRoobotsActions = (robots) => ({
  type: actionsTypes.getRoobots,
  robots,
});
