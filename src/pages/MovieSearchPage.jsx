import { FaSearch } from 'react-icons/fa';

import css from '../modules/Menu.module.css';

const MovieSearchPage = () => {
  return (
    <div className={css.container}>
      {/* <h3>Movie search page</h3> */}

      <form
        className={css.searchForm}
        // onSubmit={this.handleSubmit}
      >
        <input
          className={css.searchFormInput}
          type="text"
          // value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
          // onChange={this.handleQueryChange}
        />
        <button type="submit" className={css.searchFormBtn}>
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default MovieSearchPage;
