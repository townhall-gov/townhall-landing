import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
	return (
		<section className="flex flex-col gap-4 md:gap-8 justify-between items-center w-full mb-8 md:mb-24 px-4 md:px-8 lg:px-24">
			<div className="relative h-[20vh] sm:h-[40vh] lg:h-[70vh]  w-full ">
				<Image
					className="object-contain"
					src="/assets/bountybirdBanner.svg"
					alt="bountybird"
					fill
					loading="lazy"
				/>
			</div>
			<Link
				className="md:fixed bottom-24 z-10 "
				href="https://www.bountybird.xyz/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button
					className="audiowide-bold text-white"
					size="lg"
					variant={'destructive'}
				>
					Launch App{' '}
				</Button>
			</Link>
		</section>
	);
};

export default Banner;
