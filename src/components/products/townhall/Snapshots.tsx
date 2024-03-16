'use client';

import Image from 'next/image';
import React from 'react';

const Snapshots = () => {
	return (
		<section className="flex flex-col gap-8 justify-between items-center md:mt-48  w-full p-8 md:p-24 ">
			<div className="relative w-full h-full">
				<div className="w-full h-[50vh] lg:h-[80vh] relative drop-shadow-[0_-100px_80px_#2E285650]">
					<Image
						src="/assets/snapshots/feed-main.svg"
						fill
						alt="Snapshots"
						loading="lazy"
					/>
				</div>
				<div className=" absolute -left-4 lg:left-0 -bottom-12 lg:bottom-[12.5rem]   drop-shadow-[0_0_8px_#ffffff70] ">
					<Image
						src="/assets/snapshots/my-houses.svg"
						width={350}
						height={350}
						alt="Snapshots3"
						className="hidden lg:block"
						loading="lazy"
					/>
					<Image
						src="/assets/snapshots/my-houses.svg"
						width={150}
						height={150}
						alt="Snapshots3"
						className="block lg:hidden"
						loading="lazy"
					/>
				</div>

				<div className="absolute -right-4 lg:-right-8 -top-12  xl:flex  drop-shadow-[0_0_8px_#ffffff70]">
					<Image
						src="/assets/snapshots/trending-bounties.svg"
						width={400}
						height={400}
						alt="Snapshots2"
						className="hidden lg:block"
						loading="lazy"
					/>
					<Image
						src="/assets/snapshots/trending-bounties.svg"
						width={150}
						height={150}
						alt="Snapshots3"
						className="block lg:hidden"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
};

export default Snapshots;
