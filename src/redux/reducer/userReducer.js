import actionsTypes from "../actions/actionTypes";

const userReducer = (user = { isAutenticated: false, user: {} }, action) => {
  let newUser;

  switch (action.type) {
    case actionsTypes.postUser:
      newUser = { user: user.action, isAutenticated: true };
      break;
    default:
      newUser = { ...user };
      break;
  }
  return newUser;
};

export default userReducer;
