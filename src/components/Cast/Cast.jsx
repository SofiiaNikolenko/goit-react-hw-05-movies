import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getCast from '../../api/Cast-api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div className={css.cardContainer}>
      {cast.map(castPerson => (
        <div key={castPerson.id} className={css.card}>
          <img
            src={`https://image.tmdb.org/t/p/w200${castPerson.profile_path}`}
            alt={castPerson.name}
            className={css.image}
          />
          <p className={css.name}>{castPerson.name}</p>
          <p className={css.character}>{castPerson.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
