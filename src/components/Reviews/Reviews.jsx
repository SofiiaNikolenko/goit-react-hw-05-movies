import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getReviews from '../../api/Reviews-api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(err => console.error(err));
  }, [movieId]);

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
