import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleMovie } from 'modules/api';
import noImg from '../images/Poster_not_available.jpg';

import css from '../modules/Menu.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const SingleMoviePage = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getSingleMovie(id);

        setState(prevState => {
          return {
            ...prevState,
            item: result,
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

    fetchMovie();
  }, [id]);

  const goBack = () => navigate(-1);

  // const getYear = () => new Date(state.item.release_date).getFullYear();

  const { loading, error } = state;
  const { title, overview, poster_path, vote_average } = state.item;

  return (
    <div className={css.singleMovieContainer}>
      <button onClick={goBack}>Назад</button>
      <img
        src={poster_path ? `${IMG_URL}${poster_path}` : noImg}
        alt={title}
        width="300"
      />
      <h2>{title}</h2>
      {/* <p>{getYear()}</p> */}
      <h3>Опис фільму:</h3>
      <p>{overview}</p>
      <h3>Рейтинг:</h3>
      <p>{vote_average}</p>
      {loading && <p>... завантажується кінофільм</p>}
      {error && <p>Помилка заванаження!</p>}
    </div>
  );
};

export default SingleMoviePage;
