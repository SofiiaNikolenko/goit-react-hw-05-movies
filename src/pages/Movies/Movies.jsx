import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    if (searchClicked) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWNhZTlkZDZmNDIwODRkNWIxNTBlOGNhZmUzZDBmMSIsInN1YiI6IjY0OWY0NjQ3M2FmOTI5MDBjOGY0MmE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YZn_lK4ht5wkWyPYzyypO1pBwfY3ejbHkrGmxQwrBA4',
        },
      };

      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then(response => response.json())
        .then(data => {
          setMovies(data.results);
        })
        .catch(err => console.error(err));
    }
  }, [searchClicked, value]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchClicked(true);
  };

  const handleChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movie"
          value={movieName}
          placeholder="Search movie"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
