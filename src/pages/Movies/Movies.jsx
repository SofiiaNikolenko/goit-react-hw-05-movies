import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import getMovies from '../../api/Movies-api';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (movieName) {
      getMovies(movieName)
        .then(data => {
          setMovies(data.results);
        })
        .catch(err => console.error(err));
    }
  }, [movieName]);

  const handleSubmit = event => {
    event.preventDefault(event);
    setSearchParams({ query: event.target[0].value });
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="movie"
          placeholder="Search movie"
          className={css.searchInput}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
      <ul className={css.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.movieItem}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.movieLink}
            >
              <h3 className={css.movieTitle}>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
