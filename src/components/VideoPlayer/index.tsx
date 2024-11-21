'use client';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Videos } from '../../../types';

const VideoPlayer = ({ videos }: Videos) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };
  const opts = {
    height: '300px',
    width: '100%',
  };
  return (
    <div>
      <h2 className='mb-5 text-xl font-bold'>Official videos</h2>
      <div className='md: grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {videos.map((video) => (
          <div
            key={video?.id}
            className='relative w-full overflow-hidden rounded-md border border-gray-600'
          >
            <p>
              Type: {video?.type} - {video?.official ? 'Official' : 'General'}
            </p>
            <YouTube
              videoId={video?.key}
              onReady={onPlayerReady}
              opts={opts}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
