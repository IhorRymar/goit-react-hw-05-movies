import { useState, useEffect } from 'react';

import MovieSearchForm from 'modules/MovieSearshForm';
import { getSearchMovies } from 'modules/api';
import css from '../modules/Menu.module.css';
import MovieList from 'modules/MovieList';

const MovieSearchPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const data = await getSearchMovies(search);
        setState(prevState => ({
          ...prevState,
          items: data,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };
    if (search) {
      fetchMovies();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearch(search);
  };

  const { items, loading, error } = state;

  return (
    <div className={css.container}>
      <h3
        style={{
          color: 'white',
        }}
      >
        Movie search page
      </h3>
      <MovieSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}
      {loading && <p>... завантажуються кінофільми</p>}
      {error && <p>Помилка заванаження!</p>}
    </div>
  );
};

export default MovieSearchPage;
