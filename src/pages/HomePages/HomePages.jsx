import { useState, useEffect } from "react";
import { trendingMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import css from "./HomePages.module.css";

const HomePages = () => {
  const [films, setFilm] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        setFilm([]);
        const trendingFilms = await trendingMovies();
        setFilm(trendingFilms);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFilms();
  }, []);

  return (
    <>
      <div className={css.container}>
        {isLoading && <Loader />}
        {error && <p>Something wrong...</p>}
        <h1>Trending today</h1>

        {isLoading && <div>Loading....</div>}

        <MovieList movies={films} />
      </div>
    </>
  );
};
export default HomePages;