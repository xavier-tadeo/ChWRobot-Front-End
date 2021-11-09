import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoobotsThunks, postUserThunk } from "../redux/thunks/roobotsThunks";

const useRoobots = () => {
  const roobots = useSelector(({ roobots }) => roobots);
  const dispatch = useDispatch();

  const getRoobots = useCallback(() => {
    dispatch(getRoobotsThunks());
  }, [dispatch]);

  const postUser = (user) => {
    dispatch(postUserThunk(user));
  };

  return { roobots, getRoobots, postUser };
};

export default useRoobots;
