import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [click, setClick] =  useState(false);
  const {dispatch} = useContext(AuthContext);

  const handleCLick = ()=>{
    setClick(!click)
  }

  const handleLogout=()=>{
    dispatch({ type: "LOGOUT"})
    setClick(!click)
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <div className="Logo">
            <h2 className="logo_Text">HiBooking</h2>
            <FontAwesomeIcon icon={faPlaneDeparture} className="logoIcon" />
          </div>
        </Link>
        {user ? (
          <div className="user" onClick={handleCLick}>{user.username}</div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton" >Login</button>
            </Link>
          </div>
        )}
        {
          click && <button className="logOut" onClick={handleLogout}>Logout</button>
        }
      </div>
    </div>
  );
};

export default Navbar;
