import css from "./CardActor.module.css";

export default function CardActor({ data }) {
  if (!data.profile_path) {
    return null;
  }

  return (
    <div className={css.actorContainer}>
    <div className={css.actorCard}> {/* Заміна <ul> на <div> */}
      <div className={css.actorCardList} key={data.id}> {/* Заміна <li> на <div> */}
        <img
          src={`https://image.tmdb.org/t/p/w200${data.profile_path}`}
          alt={data.name}
          className={css.actorImage}
        />
        <p className={css.actorText}>
          {data.name}, Character:{data.character}
        </p>
      </div>
    </div>
  </div>
  );
}