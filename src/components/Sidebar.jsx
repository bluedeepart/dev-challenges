import { Link, NavLink, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to="/" className="site-logo">
        <span className="theme-text-red">Dev</span>challenges.io
      </Link>

      <ul className="nav-list">
        <li className="nav-item">
          <NavLink className="nav-link" to={`/colors`}>
            Colors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/typography`}>
            Typography
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/spaces`}>
            Spaces
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/buttons`}>
            Buttons
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/inputs`}>
            Inputs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/grid`}>
            Grid
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Sidebar;
