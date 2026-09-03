import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}

      <Link to="/" className="navbar-logo">
        NOMADIA
      </Link>


      {/* NAVIGATION */}

      <div className="navbar-links">

        <Link to="/">
          Explore
        </Link>

        <a href="/#explore">
          Destinations
        </a>

        <Link to="/ai-planner">
          AI Planner
        </Link>

        <a href="/#explore">
          Start Exploring
        </a>

      </div>

    </nav>
  );
}

export default Navbar;