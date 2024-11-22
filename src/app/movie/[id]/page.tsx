import { Metadata } from 'next';
import Image from 'next/image';
import MovieContainer from '~/components/MovieContainer';
import VideoPlayer from '~/components/VideoPlayer';
import { getImagePath } from '~/lib/getImagePath';
import { getMovieDetails, getMovieVideos, getPopularMovies } from '~/lib/getMovies';
import { MovieDetails, VideoProps } from '../../../../types';

export const metadata: Metadata = {
  title: 'Movie Studio Clone || Movie Detail Page',
};

type MovieDetailPageProps = {
  params: { id: string };
};
const MovieDetailPage = async ({ params: { id } }: MovieDetailPageProps) => {
  const movies = (await getMovieVideos(id)) as unknown as VideoProps[];
  const videos = movies.map((movie: VideoProps) => ({
    id: movie.id,
    iso_639_1: movie.iso_639_1,
    iso_3166_1: movie.iso_3166_1,
    name: movie.name,
    key: movie.key,
    site: movie.site,
    size: movie.size,
    type: movie.type,
    official: movie.official,
    published_at: movie.published_at,
  }));

  const details: MovieDetails = await getMovieDetails(id);
  const popularMovies = await getPopularMovies();
  return (
    <div>
      <div className='px-10'>
        <div className='flex flex-col items-center gap-5 py-10 lg:flex-row'>
          <div className='group min-h-96 w-full overflow-hidden rounded-md lg:w-1/2'>
            <Image
              src={getImagePath(details?.backdrop_path)}
              alt={details?.title}
              width={1920}
              height={1080}
              className='h-full w-full object-cover shadow-md shadow-gray-900 drop-shadow-xl duration-500 group-hover:scale-110'
            />
          </div>
          <div className='flex w-full flex-col gap-2 lg:w-1/2'>
            <h2 className='text-2xl font-semibold underline decoration-[1px]'>{details?.original_title}</h2>
            <p className='mt-2 text-sm leading-6 tracking-wide'>{details?.overview}</p>
            <p className='text-sm font-semibold dark:font-medium dark:text-gray-200'>
              IMDB: <span className='font-medium dark:text-white'>{details.vote_average}</span>
            </p>
            <p className='text-sm font-semibold dark:font-medium dark:text-gray-200'>
              Votes: <span className='font-medium dark:text-white'>{details.vote_count}</span>
            </p>
            <p className='text-sm font-semibold dark:font-medium dark:text-gray-200'>
              Release Data: <span className='font-medium dark:text-white'>{details.release_date}</span>
            </p>
            <p className='text-sm font-semibold dark:font-medium dark:text-gray-200'>
              Genres:{' '}
              {details?.genres.map((item: any) => (
                <span
                  key={item?.id}
                  className='mr-1 font-medium dark:text-white'
                >
                  {item?.name},
                </span>
              ))}
            </p>
            <p className='text-sm font-semibold dark:font-medium dark:text-gray-200'>
              Tag Line: <span className='font-medium dark:text-white'>{details.tagline}</span>
            </p>
            <p className='text-sm font-semibold dark:font-medium dark:text-gray-200'>
              Status:{' '}
              <span className={`font-medium ${details?.status === 'Released' ? 'text-green-500' : 'text-red-500'}`}>
                {details.status}
              </span>
            </p>
          </div>
        </div>
        <VideoPlayer videos={videos} />
      </div>
      <div className='mt-6'>
        <MovieContainer
          movies={popularMovies}
          title='Popular Movies'
          isVertical
        />
      </div>
    </div>
  );
};

export default MovieDetailPage;
