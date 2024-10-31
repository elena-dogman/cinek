import { getDiscoverMovies } from '~/lib/getMovies';
import HeroCarousel from '../HeroCarousel';

type CarouselProps = {
  id?: string;
  keywords?: string;
};
const CarouselBanner = async ({ id, keywords }: CarouselProps) => {
  const movies = await getDiscoverMovies(id, keywords);
  return <HeroCarousel movies={movies} />;
};

export default CarouselBanner;
