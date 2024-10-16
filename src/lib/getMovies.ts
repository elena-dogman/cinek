import { SearchResults } from '../../types';

const fetcher = async (url: URL, cacheTime?: number) => {
  url.searchParams.set('include_adult', 'false');
  url.searchParams.set('video', 'false');
  url.searchParams.set('sort_by', 'popularity.desc');
  url.searchParams.set('language', 'en-US');
  url.searchParams.set('page', '1');

  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TBDB_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };
  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;
};
