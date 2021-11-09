import { useEffect } from "react";
// import CardRoobot from "./components/cardRoobot";
import CardRoobot from "../components/cardRoobot";

import useRoobots from "../hooks/useRoobot";

const PageCard = () => {
  const { roobots, getRoobots } = useRoobots();

  useEffect(() => {
    getRoobots();
  }, [getRoobots]);

  return (
    <>
      <h1>Here they are all Roobots</h1>

      <div className="containerRoobots">
        {roobots.map((roobot) => (
          <CardRoobot key={roobot._id} roobot={roobot} />
        ))}
      </div>
    </>
  );
};

export default PageCard;
