import { Link } from 'react-router-dom';

import noImg from '../images/Poster_not_available.jpg';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

// const getYear = () => new Date(state.items.release_date).getFullYear();

const MovieList = ({ items }) => {
  const elements = items.map(({ id, title, poster_path }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>
        <img
          src={poster_path ? `${IMG_URL}${poster_path}` : noImg}
          alt={title}
          width="300"
        />
        <p
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {title}
          {/* ({getYear()}) */}
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
