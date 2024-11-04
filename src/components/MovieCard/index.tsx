import Image from 'next/image';
import { getImagePath } from '~/lib/getImagePath';
import { Movie } from '../../../types';

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <div>
        <p>{movie?.title}</p>
        <Image
          src={getImagePath(movie?.backdrop_path || movie?.poster_path)}
          alt={movie?.title}
          width={1920}
          height={1080}
          className='h-56 w-fit object-cover shadow-md shadow-gray-900 drop-shadow-xl lg:min-w-[400px]'
        />
      </div>
    </div>
  );
};

export default MovieCard;
