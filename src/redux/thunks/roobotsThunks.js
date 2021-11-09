import axios from "axios";
import jwtDecode from "jwt-decode";
import { getRoobotsAction, postUserAction } from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_URL;

export const getRoobotsThunks = () => async (dispatch) => {
  const roobots = await axios.get(`${apiUrl}robots`);

  dispatch(getRoobotsAction(roobots.data));
};

export const postUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${apiUrl}user`, user);

  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);

    dispatch(postUserAction(user));
    localStorage.setItem("user", JSON.stringify({ token: token }));
  }
};
