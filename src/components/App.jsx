import { Routes, Route } from 'react-router-dom';
import Menu from 'modules/Menu';
import HomePage from 'pages/HomePage';
import MovieSearchPage from 'pages/MovieSearchPage';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-search" element={<MovieSearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
