import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

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
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setReviews(data.results);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.reviewsList}>
          {reviews.map(review => {
            return (
              <li key={review.id} className={css.reviewItem}>
                <h3 className={css.author}>Author: {review.author}</h3>
                <p className={css.content}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </>
  );
};

export default Reviews;
