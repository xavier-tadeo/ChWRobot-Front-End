import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoobotsThunks } from "../redux/thunks/roobotsThunks";

const useRoobots = () => {
  const roobots = useSelector((store) => store.roobots);
  const dispatch = useDispatch();

  const getRoobots = useCallback(() => {
    dispatch(getRoobotsThunks);
  }, [dispatch]);

  return { getRoobots, roobots };
};

export default useRoobots;
