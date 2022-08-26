import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MovieSearchPage from 'pages/MovieSearchPage';
import SingleMoviePage from 'pages/SingleMoviePage';
import NotFoundPage from 'pages/NotFoundPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MovieSearchPage />} />
      <Route path="/movies/:id" element={<SingleMoviePage />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="*" element={<HomePage />} /> */}
    </Routes>
  );
};
export default UserRoutes;
