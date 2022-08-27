import { useState, useEffect } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getSingleMovie } from 'modules/api';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import noImg from '../images/Poster_not_available.jpg';
import { getClassName } from '../modules/Menu';

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

  const location = useLocation();
  const from = location.state?.from || '/movies';

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

  const goBack = () => navigate(from);

  const { loading, error } = state;
  const { title, overview, poster_path, vote_average, release_date } =
    state.item;

  const getYear = () => new Date(release_date).getFullYear();

  return (
    <div className={css.container}>
      <button className={css.singleMoviePageBtn} onClick={goBack}>
        <AiOutlineArrowLeft /> Назад
      </button>
      <div className={css.singleMovieContainer}>
        <img
          src={poster_path ? `${IMG_URL}${poster_path}` : noImg}
          alt={title}
          width="300"
        />
        <h2>
          {title} ({getYear()})
        </h2>
        <p>
          <b>Опис фільму:</b> {overview}
        </p>
        <p>
          <b>Рейтинг:</b> {vote_average}
        </p>
      </div>
      <div className={css.singleMovieLinks}>
        <NavLink
          state={{ from }}
          className={getClassName}
          to={`/movies/${id}/credits`}
        >
          Актори
        </NavLink>
        <NavLink
          state={{ from }}
          className={getClassName}
          to={`/movies/${id}/reviews`}
        >
          Відгуки
        </NavLink>
      </div>
      <Outlet />
      {loading && <p>... завантажується кінофільм</p>}
      {error && <p>Помилка заванаження!</p>}
    </div>
  );
};

export default SingleMoviePage;
