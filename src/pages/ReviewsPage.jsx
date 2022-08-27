import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'modules/api';

import css from '../modules/Menu.module.css';

const ReviewsPage = () => {
  const [state, setState] = useState({
    reviews: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getReviews(id);

        setState(prevState => {
          return {
            ...prevState,
            reviews: result,
          };
        });
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    fetchReviews();
  }, [id]);

  // const goBack = () => navigate(-1);

  const { loading, error } = state;
  const { reviews } = state;

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h4>{author}</h4>
      <p>{content}</p>
    </li>
  ));

  return (
    <div className={css.container}>
      <ul>{elements}</ul>
      {loading && <p>... завантажується кінофільм</p>}
      {error && <p>Помилка заванаження!</p>}
    </div>
  );
};

export default ReviewsPage;
