import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="bar">
      <NavLink to="/portfolio/" end>Home</NavLink>
      <NavLink to="/portfolio/projects">Projects</NavLink>
      <NavLink to="/portfolio/experience">Experience</NavLink>
    </nav>
  );
};

export default Navbar;
