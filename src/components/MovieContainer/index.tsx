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
          href={{ pathname: '/viewmore', query: { title: title } }}
          className='rounded-md border-gray-600 bg-gray-800 px-2 py-1 text-xs font-semibold uppercase text-white duration-300 hover:bg-black'
        >
          View more
        </Link>
        <span className='absolute -bottom-[1.5px] left-0 z-10 inline-block h-1 w-16 bg-red-600'></span>
      </div>
      <div className={cn('scrollbar-hide flex space-x-4 overflow-scroll px-5 py-5 lg:px-10')}>
        {movies.map((movie) => (
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
