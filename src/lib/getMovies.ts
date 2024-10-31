import { SearchResults } from '../../types';

const fetcher = async (url: URL, cacheTime?: number) => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'X-API-KEY': `${process.env.KINOPOISK_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };
  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return data;
};

export const getNowPlayingMovies = async () => {
  const url = new URL('https://kinopoiskapiunofficial.tech/api/v2.2/films');
  url.searchParams.set('order', 'NUM_VOTE');
  url.searchParams.set('type', 'FILM');
  const data = await fetcher(url);
  console.log(data);
  return data.films;
};

export const getUpcomingMovies = async () => {
  const url = new URL('https://kinopoiskapiunofficial.tech/api/v2.2/films');
  url.searchParams.set('order', 'RATING');
  url.searchParams.set('type', 'FILM');
  const data = await fetcher(url);
  return data.films;
};

export const getTopRatedMovies = async () => {
  const url = new URL('https://kinopoiskapiunofficial.tech/api/v2.2/films/top');
  url.searchParams.set('type', 'TOP_250_BEST_FILMS');
  const data = await fetcher(url);
  return data.films;
};

export const getPopularMovies = async () => {
  const url = new URL('https://kinopoiskapiunofficial.tech/api/v2.2/films/top');
  url.searchParams.set('type', 'TOP_100_POPULAR_FILMS');
  const data = await fetcher(url);
  return data.films;
};

export const getDiscoverMovies = async (id?: string, keywords?: string) => {
  const url = new URL('https://kinopoiskapiunofficial.tech/api/v2.2/films');
  keywords && url.searchParams.set('keyword', keywords);
  id && url.searchParams.set('genres', id);

  const data = await fetcher(url);
  return data.films;
};

export const getSearchedMovies = async (term: string) => {
  const url = new URL('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword');
  url.searchParams.set('keyword', term);

  const data = await fetcher(url);
  return data.films;
};

export const getMovieVideos = async (id?: string) => {
  const url = new URL(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`);

  const data = await fetcher(url);
  return data.films;
};

export const getMovieDetails = async (id?: string) => {
  const url = new URL(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`);
  const data = await fetcher(url);
  return data;
};
