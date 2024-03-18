import c from './ImageCard.module.css';

const ImageCard = ({
  image: { alt_description, urls, user, likes, description, color },
  openModal,
}) => {
  return (
    <div className={c.thumb} style={{ backgroundColor: color }}>
      <img className={c.image}
        onClick={() =>
          openModal({ alt_description, imgUrl: urls.regular, user, likes, description })
        }
        src={urls.small}
        alt={alt_description ?? 'Unrecognized image'}
      />
      <ul className={c.infoList}>
        <li>{user.first_name}</li>
        <li>{user.location}</li>
        <li className={c.info}>Likes {likes}</li>
      </ul>
    </div>
  );
  
};

export default ImageCard;