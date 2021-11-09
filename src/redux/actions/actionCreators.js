import actionsTypes from "./actionTypes";

export const getRoobotsAction = (roobots) => ({
  type: actionsTypes.getRoobots,
  roobots,
});

export const postUserAction = (user) => ({
  type: actionsTypes.postUser,
  user,
});
