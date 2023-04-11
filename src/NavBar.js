import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/cookies">
        Cookies
      </NavLink>
      <NavLink exact to="/sourpatchkids">
        Sour Patch Kids
      </NavLink>
      <NavLink exact to="/cocacola">
        Coca Cola
      </NavLink>
    </nav>
  );
}

export default NavBar;
