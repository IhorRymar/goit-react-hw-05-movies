import { useState, useEffect } from 'react';
import { getMovieTrending } from '../modules/api';
import MovieList from './MovieList';

const Movies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getMovieTrending();
        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...result],
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

    fetchMovies();
  }, [setState]);

  const { items, loading, error } = state;

  return (
    <>
      {items.length > 0 && <MovieList items={items} />}
      {loading && <p>... завантажуються кінофільми</p>}
      {error && <p>Помилка заванаження!</p>}
    </>
  );
};

export default Movies;
