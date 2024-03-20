import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const navigationLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={navigationLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={navigationLink}>
        Movies
      </NavLink>
    </nav>
  );
}