import "./App.css";
import CardRoobot from "./components/CardRoobot";

function App() {
  const roobot = {
    features: { speed: 10, endurance: 2, creationDate: "1110" },
    name: "C2P2",
    imageSource: "url",
  };
  return (
    <div className="App">
      <h1>Here they are all Roobots</h1>
      <CardRoobot roobot={roobot} />
    </div>
  );
}

export default App;
