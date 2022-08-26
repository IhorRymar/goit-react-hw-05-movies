import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const data = await getSearchMovies(query);
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
    if (query) {
      fetchMovies();
    }
  }, [query]);

  const changeSearch = ({ query }) => {
    setSearchParams({ query });
  };

  const { items, loading, error } = state;

  return (
    <div className={css.container}>
      <h3
        style={{
          color: 'white',
        }}
      >
        Сторінка пошуку кінофільмів
      </h3>
      <MovieSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}
      {loading && <p>... завантажуються кінофільми</p>}
      {error && <p>Помилка заванаження!</p>}
    </div>
  );
};

export default MovieSearchPage;
