import paths from "../../pathsRoobot/paths";
import axios from "axios";
import { getRoobotsAction } from "../actions/actionCreators";

export const getRoobotsThunks = () => async (dispatch) => {
  const res = await axios.get(process.env.REACT_APP_URL + paths.get);
  const roobot = await res.json();

  dispatch(getRoobotsAction(roobot));
};
