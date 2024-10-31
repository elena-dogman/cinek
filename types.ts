export type Movie = {
  filmId: number;
  nameRu: string;
  nameEn?: string;
  year: string;
  filmLength: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
};

export type SearchResults = {
  pagesCount: number;
  films: Movie[];
  total: number;
};

export type Genre = {
  id: number;
  genre: string;
};

export type Genres = {
  genres: Genre[];
};

export type VideoProps = {
  url: string;
  name: string;
  site: string;
};

export type Videos = {
  items: VideoProps[];
};
