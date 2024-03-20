import { NavLink } from "react-router-dom";
import css from "../MovieInfo/MovieInfo.module.css"

export default function MovieInfo() {
  return (
    <ul className={css.movieInfoList}>
      <li className={css.movieInfoNavList}>
        <NavLink className={css.movieInfoNavLink} to="cast">Cast</NavLink>
      </li>
      <li className={css.movieInfoNavList}>
        <NavLink className={css.movieInfoNavLink} to="reviews">Reviews</NavLink>
      </li>
    </ul>
  );
}