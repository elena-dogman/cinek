export const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? 'original' : 'w500'}/${imagePath}`
    : '/assets/movie-image.jpg';
};
