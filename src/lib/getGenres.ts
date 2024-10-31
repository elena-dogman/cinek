export const fetchGenres = async () => {
  const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/filters';
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'X-API-KEY': `${process.env.KINOPOISK_API_KEY}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data.genres;
};
