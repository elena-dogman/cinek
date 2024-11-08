import MovieContainer from '~/components/MovieContainer';
import { getDiscoverMovies } from '~/lib/getMovies';

type GenrePageProps = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = async ({ params: { id }, searchParams: { genre } }: GenrePageProps) => {
  const movies = await getDiscoverMovies(id);
  return (
    <div className='msx-w-xl py-10'>
      <h2 className='mx-auto mb-5 px-10 text-4xl font-bold'>Results for {genre}</h2>
      <MovieContainer
        movies={movies}
        title='Genre'
        isVertical={true}
      />
    </div>
  );
};

export default GenrePage;
