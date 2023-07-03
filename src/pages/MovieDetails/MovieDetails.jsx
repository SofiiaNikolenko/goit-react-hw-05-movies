import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, Suspense } from 'react';
import getMovieDetails from '../../api/MovieDetails-api';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieImage, setMovieImage] = useState('');
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovieDetails(data);
        setMovieImage(data.poster_path);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      <Link to={backLink.current}>Go back</Link>
      <div className={css.container}>
        {movieImage && (
          <img
            src={`https://image.tmdb.org/t/p/w300${movieImage}`}
            alt={movieDetails.title}
            className={css.movieImage}
          />
        )}

        <div className={css.details}>
          <h1 className={css.title}>
            {movieDetails.title ? movieDetails.title : 'Title not found'}
          </h1>

          <h3 className={css.sectionTitle}>Overview</h3>
          <p className={css.overview}>
            {movieDetails.overview
              ? movieDetails.overview
              : 'Overview not found'}
          </p>

          <h3 className={css.sectionTitle}>Genres</h3>
          <div className={css.genresContainer}>
            {Array.isArray(movieDetails.genres) &&
            movieDetails.genres.length > 0 ? (
              <div className={css.genres}>
                {movieDetails.genres.map(genr => (
                  <p key={genr.id} className={css.genre}>
                    {genr.name}
                  </p>
                ))}
              </div>
            ) : (
              <p>Genres not found</p>
            )}
          </div>
        </div>
      </div>

      <ul className={css.linkList}>
        <li>
          <Link to="cast" className={css.link}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" className={css.link}>
            Reviews
          </Link>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
