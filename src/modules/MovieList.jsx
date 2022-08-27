import { Link, useLocation } from 'react-router-dom';

import noImg from '../images/Poster_not_available.jpg';

import css from '../modules/Menu.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, poster_path }) => (
    <li key={id} className={css.movieItem}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <img
          src={poster_path ? `${IMG_URL}${poster_path}` : noImg}
          alt={title}
          width="300"
        />
        <p
          style={{
            fontWeight: 'bold',
            width: '300px',
          }}
        >
          {title}
        </p>
      </Link>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default MovieList;

MovieList.defaultProps = {
  items: [],
};
