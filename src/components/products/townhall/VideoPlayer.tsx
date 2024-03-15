'use client';

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
		<div className="relative mx-8 md:mx-44 rounded-3xl mt-8 md:mt-24 overflow-hidden">
			<video
				ref={videoRef}
				className="w-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] object-contain"
				controls={true}
				// onClick={togglePlay}
			>
				<source src="/assets/townhall-video.mp4" type="video/mp4" />
				{/* <source
					src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
					type="video/mp4"
				/> */}
				Your browser does not support the video tag.
			</video>

			<button
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 cursor-pointer flex items-center focus:outline-none"
				onClick={togglePlay}
			>
				{isPlaying ? (
					<Image
						className="-mt-12 opacity-0"
						src="/assets/PlayVideo.svg"
						alt="Play"
						width={64}
						height={64}
					/>
				) : (
					<Image
						className="-mt-12"
						src="/assets/PlayVideo.svg"
						alt="Play"
						width={64}
						height={64}
					/>
				)}
			</button>
		</div>
	);
};

export default VideoPlayer;
