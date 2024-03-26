import CardActor from "../CardActor/CardActor";
import css from "./GalleryActor.module.css"

export default function GalleryActor({ data }) { 
  return (
    <ul className={css.cardActorList}>
      {data.map((cardData) => ( 
        <CardActor key={cardData.id} data={cardData} /> 
      ))}
    </ul>
  );
}
