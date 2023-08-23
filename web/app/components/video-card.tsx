import React from 'react';
import Image from 'next/image';
import { Video } from '../entities';
import { formatTimeToVideo } from '../utils';

const VideoCard = ({ title, thumbnail, duration }: Video) => {
  return (
    <div className="border border-gray-500 p-4 m-4 max-w-md">
      <div className="relative">
        <Image src={thumbnail} alt={title} width={800} height={450} />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white py-1 px-2 rounded">
          {formatTimeToVideo(duration)}
        </span>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default VideoCard;