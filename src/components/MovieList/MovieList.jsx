import { Link } from "react-router-dom";
import css from "./MovieList.module.css";
import { MovieListItem } from "../MovieListItem/MovieListItem";

export default function MovieList({ movies }) {
  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieListItem movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
