import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWNhZTlkZDZmNDIwODRkNWIxNTBlOGNhZmUzZDBmMSIsInN1YiI6IjY0OWY0NjQ3M2FmOTI5MDBjOGY0MmE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YZn_lK4ht5wkWyPYzyypO1pBwfY3ejbHkrGmxQwrBA4',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setCast(data.cast);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  console.log(cast);

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
