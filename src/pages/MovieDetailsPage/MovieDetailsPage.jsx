import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { getMovieId } from "../../api";
import css from "../MovieDetailsPage/MovieDetailsPage.module.css";

import MovieItem from "../../components/MovieItem/MovieItem";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/");
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getFilmId() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await getMovieId(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getFilmId();
  }, [movieId]); 

  return (
    <>
      {isLoading && <Loader />}

      {error && <p>Something wrong...</p>}

      {movie && (
        <>
          <div className={css.goBackContainer}>
            <Link to={goBackLink.current} className={css.goBackLink}>
              Go back
            </Link>
          </div>
          <MovieItem movie={movie} />
          <div>
            <h2>Additional information:</h2>
          </div>
          <MovieInfo />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
