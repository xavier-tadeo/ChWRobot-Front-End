import { useEffect } from "react";
import "./App.css";
import CardRoobot from "./components/CardRoobot";

import useRoobots from "./hooks/useRoobot";

function App() {
  const { roobots, getRoobots } = useRoobots();

  useEffect(() => {
    getRoobots();
  }, [getRoobots]);

  return (
    <div className="App">
      <h1>Here they are all Roobots</h1>
      <div className="containerRoobots">
        {roobots.map((roobot) => (
          <CardRoobot key={roobot._id} roobot={roobot} />
        ))}
      </div>
    </div>
  );
}

export default App;
