import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const MovieSearchPage = lazy(() => import('pages/MovieSearchPage'));
const SingleMoviePage = lazy(() => import('pages/SingleMoviePage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));
const CreditsPage = lazy(() => import('pages/CreditsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>... завантаження сторінки</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieSearchPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="credits" element={<CreditsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
