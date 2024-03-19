'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const Banner = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end end', 'end start']
	});
	const controls = useAnimation();

	const xRange: [string, string] = ['8%', '-35%'];
	const yRange: [string, string] = ['25%', '450px'];

	const x = useTransform(scrollYProgress, [0.1, 0.3], xRange);
	const y = useTransform(scrollYProgress, [0.1, 0.3], yRange);
	const opacity = useTransform(scrollYProgress, [0.3, 0.31], [0, 1]);
	const position = useTransform(scrollYProgress, (pos) => {
		return pos > 0.3 ? 'fixed' : 'sticky';
	});

	return (
		<section
			ref={targetRef}
			className="flex flex-col gap-4 md:gap-8 mt-8  justify-between items-center w-full mb-8 md:mb-24 px-4 md:px-8 lg:px-24"
		>
			<div className="relative h-[20vh] sm:h-[40vh] lg:h-[60vh] w-full ">
				<Image
					className="object-contain"
					src="/assets/bountybirdBanner.png"
					alt="bountybird"
					fill
					loading="lazy"
				/>
				<div className="relative top-[15%] size-[100px] md:size-[200px] lg:size-[350px]">
					<Image
						className="object-contain absolute left-0  bottom-[25%]"
						src="/assets/Bird.svg"
						alt="bountybird"
						fill
						loading="lazy"
					/>
				</div>
				<motion.div
					style={{ x, y, position }}
					className="hidden md:block"
					animate={controls}
				>
					<Link
						className="md:absolute md:bottom-[20%] lg:bottom-[12%] right-auto md:right-24 z-10 "
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
				</motion.div>
			</div>
			<div className="flex flex-col w-full items-center">
				<p className="outfit-200 text-lg md:text-3xl  mb-2 -mt-8">
					Built On
				</p>
				<div className="inline-flex items-center gap-6">
					<div className="inline-flex items-center gap-2">
						<Image
							src="/assets/lens-white.svg"
							alt="bountybird"
							width={50}
							height={50}
						/>
						<p className="outfit-500 text-lg md:text-2xl ">Lens</p>
					</div>
					<div className="inline-flex items-center gap-2">
						<Image
							src="/assets/farcaster.svg"
							alt="bountybird"
							width={32}
							height={32}
						/>
						<p className="outfit-500 text-lg md:text-2xl ">
							Farcaster
						</p>
					</div>
					<div className="inline-flex items-center gap-2">
						<Image
							src="/assets/xIcon.svg"
							alt="bountybird"
							width={25}
							height={25}
						/>
					</div>
				</div>
				<motion.div
					style={{
						position: 'fixed',
						bottom: '2rem',
						opacity,
						zIndex: '10'
					}}
					// className="fixed bottom-8 "
					animate={controls}
				>
					<Link
						className="z-10  mt-4"
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
				</motion.div>
			</div>
		</section>
	);
};

export default Banner;
