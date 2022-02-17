import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="top-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/beers">Beers</NavLink>
      <NavLink to="/random-beer">Random beer</NavLink>
      <NavLink to="/new-beer">New beer</NavLink>
    </div>
  );
}

export default Navbar;
