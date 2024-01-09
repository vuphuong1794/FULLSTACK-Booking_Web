import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="Logo">
          <h2 className="logo_Text">HiBooking</h2>
          <FontAwesomeIcon icon={faPlaneDeparture} className="logoIcon" />
        </div>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
