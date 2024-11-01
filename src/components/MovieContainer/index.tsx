import { Movie } from '../../../types';

type MovieContainerProps = {
  title?: string;
  movies: Movie[];
  isVertical: boolean;
};
const MovieContainer = ({ title, movies, isVertical }: MovieContainerProps) => {
  return (
    <div>
      <div className='relative mx-10 mb-4 flex items-center justify-between border-b border-b-gray-500 py-2'></div>
    </div>
  );
};

export default MovieContainer;
