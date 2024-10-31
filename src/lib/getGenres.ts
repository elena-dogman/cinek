import { Genres } from '../../types';
export const getGenres = async (): Promise<Genres> => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list';
  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch genres');
  }
  return response.json() as Promise<Genres>;
};
