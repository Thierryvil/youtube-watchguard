import React, { useState } from 'react';
import Image from 'next/image';
import { Video } from '../entities';
import { formatTimeToVideo } from '../utils';
import VideoModal from './video-modal';

interface VideoCardProps {
  id: string
  title: string,
  thumbnail: string,
  duration: number
}

const VideoCard = ({ id, title, thumbnail, duration }: VideoCardProps) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleClick = () => {
    setPopupOpen(!isPopupOpen);
  }

  return (
    <div className="border border-gray-500 p-4 m-4 max-w-md cursor-pointer hover:cursor-pointer" onClick={handleClick}>
      <div className="relative">
        <Image src={thumbnail} alt={title} width={800} height={450} />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white py-1 px-2 rounded">
          {formatTimeToVideo(duration)}
        </span>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <VideoModal isOpen={isPopupOpen} onClose={closePopup} videoId={id} />
    </div>
  );
};

export default VideoCard;