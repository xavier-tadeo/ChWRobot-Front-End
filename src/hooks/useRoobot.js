import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoobotsThunks } from "../redux/thunks/roobotsThunks";

const useRoobots = () => {
  const roobots = useSelector(({ roobots }) => roobots);
  const dispatch = useDispatch();

  const getRoobots = useCallback(() => {
    dispatch(getRoobotsThunks());
  }, [dispatch]);

  return { roobots, getRoobots };
};

export default useRoobots;
