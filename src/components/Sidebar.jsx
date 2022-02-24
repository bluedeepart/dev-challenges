import { Link, NavLink, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to="/dev-challenges/" className="site-logo">
        <span className="theme-text-red">Dev</span>challenges.io
      </Link>

      <ul className="nav-list">
        {/* <li className="nav-item">
          <NavLink className="nav-link" to={`/dev-challenges/colors`}>
            Colors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/dev-challenges/typography`}>
            Typography
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/dev-challenges/spaces`}>
            Spaces
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to={`/dev-challenges/buttons`}>
            Buttons
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/dev-challenges/inputs`}>
            Inputs
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to={`/dev-challenges/grid`}>
            Grid
          </NavLink>
        </li> */}
      </ul>
      <Outlet />
    </nav>
  );
}

export default Sidebar;
