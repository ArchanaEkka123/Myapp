import "../Design/NavContainer.css";
import "../Design/ButtonModul.css";
import { Link } from "react-router-dom";
import navtitle from "./Image/navtitle/Spardha.png";

const NavBar = () => {
  return (
    <div className="Container">
      <img className="HeaderName" src={navtitle} alt="Spardha img" />
      <nav>
      <ul>
        <li className="list-box">
          <Link to="/">Home</Link>
        </li>
        <li className="list-box">
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/Event">Event</Link>
        </li>
        <li>
          <Link to="/Results">Results</Link>
        </li>
        <li>
          {" "}
          <Link to="/Contact"> Contact</Link>
        </li>
        {/* <div className="btn">
          <button className="Registration">Registration</button>
          <button className="Login">Login</button>
        </div> */}
      </ul>
      </nav>
      
    </div>
  );
};

export default NavBar;
