import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../api";
import Loader from "../Loader/Loader";
import GalleryActor from "../GalleryActor/GalleryActor";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actor, setActor] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovieCredits(movieId);
        setActor(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className={css.error}>Something went wrong...</p>;
  }

  if (actor.length === 0) {
    return <p className={css.noInfo}>No information available about the movie cast.</p>;
  }

  return (
    <div className={css.container}>
      <GalleryActor data={actor} />
    </div>
  );
}
