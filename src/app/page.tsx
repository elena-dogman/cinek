import CarouselBanner from '~/components/CarouselBanner';
import MovieContainer from '~/components/MovieContainer';
import { getNowPlayingMovies } from '~/lib/getMovies';

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  return (
    <main>
      <CarouselBanner />
      <div className='flex flex-col space-y-2'>
        <MovieContainer
          movies={nowPlayingMovies}
          title={'Now Playing'}
        />
      </div>
    </main>
  );
}
