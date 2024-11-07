import MovieContainer from '~/components/MovieContainer';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '~/lib/getMovies';
import { Movie } from '../../../types';

type ViewMorePageProps = {
  searchParams: {
    title: string;
  };
};
const ViewMorePage = async ({ searchParams: { title } }: ViewMorePageProps) => {
  let movies = null;
  const movieFetchers: { [key: string]: () => Promise<Movie[]> } = {
    'Now Playing': getNowPlayingMovies,
    'Upcoming': getUpcomingMovies,
    'Top Rated': getTopRatedMovies,
    'Popular': getPopularMovies,
  };

  movies = title in movieFetchers ? await movieFetchers[title]() : [];

  return (
    <div className='py-10'>
      <h2 className='mb-5 px-10 text-4xl font-bold'>Results of {title}</h2>
      <MovieContainer
        movies={movies}
        isVertical
      />
    </div>
  );
};

export default ViewMorePage;
