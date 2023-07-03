import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import getTrendingMovies from '../../api/Home-api';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
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
