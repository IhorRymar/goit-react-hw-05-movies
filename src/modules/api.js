import axios from 'axios';

const API_KEY = '5f30c40f35f127b63ef357633391869a';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const END_POINTS = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export const getMovieTrending = async (page = 1) => {
  const response = await instance.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=uk-UA&include_adult=false`
  );
  return response.data.results;
};

export const getSingleMovie = async id => {
  const response = await instance.get(
    `${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=uk-UA`
  );
  return response.data;
};

export const getSearchMovies = async (query, page = 1) => {
  const response = await instance.get(
    `${END_POINTS.querySearch}?api_key=${API_KEY}&page=${page}&query=${query}&language=uk-UA&include_adult=false`
  );

  return response.data.results;
};
