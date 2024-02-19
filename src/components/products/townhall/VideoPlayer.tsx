
"use client"

import Image from 'next/image';
import { useState, useRef } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative mx-24 rounded-3xl mt-24 overflow-hidden">
      <video
        ref={videoRef}
        className="w-full min-h-[600px] object-contain"
        controls={true}
        onClick={togglePlay}
      >
        <source src="/assets/townhallVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/ p-4 cursor-pointer flex items-center focus:outline-none"
        onClick={togglePlay}
      >
        {isPlaying ? (
          null
        ) : (
          <Image className='-mt-12' src="/assets/PlayVideo.svg" alt="Play" width={64} height={64} />
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;