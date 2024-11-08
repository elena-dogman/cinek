import MovieContainer from '~/components/MovieContainer';
import { getPopularMovies, getSearchedMovies } from '~/lib/getMovies';

type SearchPageProps = {
  params: {
    term: string;
  };
};
const SearchPage = async ({ params: { term } }: SearchPageProps) => {
  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();
  return (
    <div className='msx-w-xl py-10'>
      <h2 className='mx-auto mb-5 px-10 text-4xl font-bold'>Results for {termToUse}</h2>
      <MovieContainer
        movies={movies}
        title='Search results'
        isVertical={true}
      />
      <MovieContainer
        movies={popularMovies}
        title='You may also like'
      />
    </div>
  );
};

export default SearchPage;
