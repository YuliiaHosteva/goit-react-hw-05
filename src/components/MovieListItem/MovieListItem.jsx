import { Link } from "react-router-dom";
import css from "./MovieListItem.module.css";

export function MovieListItem({ state, movie }) {
  if (!movie.poster_path) {
    return false;
  }
  return (
    <li className={css.movieItem}>
      <Link to={`movies/${movie.id}`} state={state} className={css.movieLink}>
        <div className={css.imageContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={css.imageItem}
          />
        </div>
        <p className={css.movieTitle}> {movie.title}</p>
      </Link>
    </li>
  );
}