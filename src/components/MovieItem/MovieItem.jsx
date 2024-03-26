import css from "../MovieItem/MovieItem.module.css"

export default function MovieItem({ movie }) {
  return (
    <>
      <div className={css.movieContainer}>
        <div>
          {movie.poster_path && (
            <img 
              className={css.movieImage}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title}`}
            />
          )}
        </div>
        <div>
          <h2 className={css.movieTitle}>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h2>
          <p>{movie.overview}</p>
          <div>
            <p>
              <b>Release Date: </b>
              {movie.release_date}
            </p>
            <p>
              <b>Budget: </b>$ {movie.budget}
            </p>
            <p>
              <b>Rating:</b> {movie.vote_average}
            </p>
            {movie.genres && (
              <p>
                <b>Genres:</b>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
            )}
            <div className={css.movieContainerProd}>
              {movie.production_companies && (
                <>
                  {!movie.production_companies.logo_path && (
                    <b>Production companies:</b>
                  )}
                  {movie.production_companies.map((company) => (
                    <div className={css.movieProd} key={company.id}>
                      {company.logo_path && (
                        <img className={css.movieProdImg}    
                          src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                          alt={company.name}
                        />
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
            {movie.homepage && (
              <a className={css.movieHomePage} href={movie.homepage} target="_blank" rel="noopener noreferrer">
                Movie home page
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
