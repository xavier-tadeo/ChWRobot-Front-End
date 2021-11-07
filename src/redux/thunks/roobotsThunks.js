import axios from "axios";
import { getRoobotsAction } from "../actions/actionCreators";

export const getRoobotsThunks = () => async (dispatch) => {
  const roobots = await axios.get(process.env.REACT_APP_URL);

  dispatch(getRoobotsAction(roobots.data));
};
