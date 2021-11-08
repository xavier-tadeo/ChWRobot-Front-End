import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <header className="linksPages">
      <Link className="nav-link" to="/">
        Home Page
      </Link>
      <Link className="nav-link" to="PageCard">
        Your Roobots
      </Link>
      <Link className="nav-link" to="Form">
        Creation Robot
      </Link>
    </header>
  );
};

export default HomePage;
