import Link from 'next/link';
import { cn } from '~/lib/utils';
import { Movie } from '../../../types';
import MovieCard from '../MovieCard';

type MovieContainerProps = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};
const MovieContainer = ({ title, movies, isVertical }: MovieContainerProps) => {
  return (
    <div>
      <div className='relative mx-10 mb-4 flex items-center justify-between border-b border-b-gray-500 py-2'>
        <h2 className='text-sm font-bold uppercase tracking-wider'>{title}</h2>
        <Link
          href={isVertical ? '/' : { pathname: '/viewmore', query: { title } }}
          className={cn(
            'rounded-md border-gray-600 bg-gray-800 px-2 py-1 text-xs font-semibold uppercase text-white duration-300 hover:bg-black'
          )}
        >
          {isVertical ? 'Back' : 'View more'}
        </Link>
        <span className='absolute -bottom-[1.5px] left-0 z-10 inline-block h-1 w-16 bg-red-600'></span>
      </div>
      <div
        className={cn(
          'flex space-x-4 overflow-scroll px-5 py-5 scrollbar-hide lg:px-10',
          isVertical ? 'flex-col space-x-0 space-y-12' : 'space-x-4'
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie?.id}
                className={cn(isVertical && 'mb-5 flex flex-col items-center space-x-5 space-y-5 lg:flex-row')}
              >
                <MovieCard movie={movie} />
                <div className='max-w-2xl'>
                  <p className='font-bold'>
                    {movie?.title} ({movie?.release_date.split('-')[0]})
                  </p>
                  <hr className='mb-3 border-gray-700' />
                  <p>{movie?.overview}</p>
                </div>
              </div>
            ))
          : movies.map((movie) => (
              <MovieCard
                key={movie?.id}
                movie={movie}
              />
            ))}
      </div>
    </div>
  );
};

export default MovieContainer;
