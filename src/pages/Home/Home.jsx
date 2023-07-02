import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <ul className={css.movieList}>
        {movies.map(movie => {
          return (
            <li key={movie.id} className={css.movieItem}>
              <Link
                to={`/movies/${movie.id}`}
                className={css.movieLink}
                state={{ from: location }}
              >
                <h3 className={css.movieTitle}>{movie.title || movie.name}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
