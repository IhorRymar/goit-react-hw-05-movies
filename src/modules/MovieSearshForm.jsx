import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import css from '../modules/Menu.module.css';

const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ ...state });
    setState({
      search: '',
    });
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchFormInput}
        // type="text"
        value={state.search}
        name="search"
        autoComplete="off"
        autoFocus
        required
        placeholder="Пошук кінофільмів..."
        onChange={handleChange}
      />
      <button type="submit" className={css.searchFormBtn}>
        <FaSearch />
      </button>
    </form>
  );
};

export default MovieSearchForm;
