'use client';

import Image from 'next/image';
import React, { MouseEvent, useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';

const Card = ({ cardName, title }: { cardName: string; title?: string }) => {
	const [isHovered, setIsHovered] = useState(false);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const titleControls = useAnimation();
	const IconControls = useAnimation();

	const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

	const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = event;
		const cardRect = event.currentTarget.getBoundingClientRect();
		const blobSize = 80;

		x.set(Math.ceil(clamp(clientX - cardRect.left - 200, 0, cardRect.width - blobSize)));
		y.set(Math.ceil(clamp(clientY - cardRect.top - 400, 0, cardRect.height - blobSize)));
	};

	useEffect(() => {
		return () => {
			x.set(0);
			y.set(0);
		};
	}, [x, y]);

	const handleHoverStart = () => {
		titleControls.start({
			opacity: 1,
			height: 'auto'
		});
		IconControls.start({
			opacity: 1,
			width: 'auto'
		});
	};

	const handleHoverEnd = () => {
		titleControls.start({ opacity: 0, height: 0 });
		IconControls.start({
			opacity: 0,
			width: 0
		});
	};

	return (
		<motion.div
			className='relative w-[250px] h-[230px] sm:w-[250px] sm:h-[230px] md:w-[300px] md:h-[280px] flex flex-col justify-center items-center bg-[#ffffff18] rounded-[26px] shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)] overflow-hidden'
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			whileHover={{ scale: 1.05 }}
			onHoverStart={handleHoverStart}
			onHoverEnd={handleHoverEnd}
			transition={{ duration: 0.3 }}>
			<Image
				className='z-10'
				alt='Frame'
				src={`/assets/${cardName}.svg`}
				width={80}
				height={100}
			/>
			<div className='flex items-center z-10 gap-2 mt-4'>
				<Image
					alt='Frame'
					src={`/assets/${cardName}-text.svg`}
					width={220}
					height={100}
				/>
				{cardName !== 'Treasure-Ease' && (
					<motion.div
						initial={{ opacity: 0, width: 0 }}
						animate={IconControls}
						className='hidden md:block'>
						<Image
							alt='Frame'
							src='/assets/arrow-sm-left.svg'
							width={35}
							height={35}
						/>
					</motion.div>
				)}
			</div>
			<motion.h1
				className='text-xl text-center font-light px-2 mt-4 z-10'
				initial={{ opacity: 0, height: 0 }}
				animate={titleControls}>
				{title}
			</motion.h1>
			<motion.div
				initial={{ scale: 0.5 }}
				animate={{
					scale: [1, 1.2, 0.5, 0.9, 1],
					borderRadius: ['100%', '70%', '50%', '66%', '90%'],
					width: ['320px', '200px', '250px', '280px', '320px'],
					height: ['320px', '250px', '270px', '150px', '320px']
				}}
				transition={{
					duration: 10,
					ease: 'linear',
					times: [0, 0.2, 0.5, 0.8, 3],
					repeat: Infinity,
					repeatDelay: 1
				}}
				style={{
					x: x,
					y: y
				}}
				className={`absolute  w-80 h-80 bg-[#2F45C6] rounded-full transition-all ${isHovered ? 'opacity-1' : 'opacity-0'}`}
			/>
		</motion.div>
	);
};

const CardMb = ({ cardName, title }: { cardName: string; title?: string }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

	const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = event;
		const cardRect = event.currentTarget.getBoundingClientRect();
		const blobSize = 80;

		x.set(Math.ceil(clamp(clientX - cardRect.left - 200, 0, cardRect.width - blobSize)));
		y.set(Math.ceil(clamp(clientY - cardRect.top - 400, 0, cardRect.height - blobSize)));
	};

	useEffect(() => {
		return () => {
			x.set(0);
			y.set(0);
		};
	}, [x, y]);

	return (
		<motion.div
			className='relative w-[250px] h-[230px] sm:w-[250px] sm:h-[230px] md:w-[300px] md:h-[280px] flex flex-col justify-center items-center bg-[#ffffff18] rounded-[26px] shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)] overflow-hidden'
			onMouseMove={handleMouseMove}
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.3 }}>
			<Image
				className='z-10'
				alt='Frame'
				src={`/assets/${cardName}.svg`}
				width={50}
				height={50}
			/>
			<div className='flex items-center z-10 gap-2 mt-4'>
				<Image
					alt='Frame'
					src={`/assets/${cardName}-text.svg`}
					width={150}
					height={100}
				/>
				{cardName !== 'Treasure-Ease' && (
					<div className='hidden md:block'>
						<Image
							alt='Frame'
							src='/assets/arrow-sm-left.svg'
							width={35}
							height={35}
						/>
					</div>
				)}
			</div>
			<h1 className='text-base text-center font-light px-2 mt-4 z-10'>{title}</h1>
			{/* <motion.div
				initial={{ scale: 0.5 }}
				animate={{
					scale: [1, 1.2, 0.5, 0.9, 1],
					borderRadius: ['100%', '70%', '50%', '66%', '90%'],
					width: ['320px', '200px', '250px', '280px', '320px'],
					height: ['320px', '250px', '270px', '150px', '320px']
				}}
				transition={{
					duration: 10,
					ease: 'linear',
					times: [0, 0.2, 0.5, 0.8, 3],
					repeat: Infinity,
					repeatDelay: 1
				}}
				style={{
					x: x,
					y: y
				}}
				className={`absolute  w-80 h-80 bg-[#2F45C6] rounded-full transition-all`}
			/> */}
		</motion.div>
	);
};

const Ecosystem = () => {
	return (
		<section
			id='ecosystem'
			className='md:mt-32 flex flex-col overflow-hidden  md:p-4 w-full md:w-auto justify-center items-center gap-4'>
			<div className='hidden lg:flex justify-start lg:justify-center gap-8 items-center'>
				<Link href='/products/townhall'>
					<Card
						cardName='townhall-white'
						title='Simplifying DAO management and Governance'
					/>
				</Link>
				<Link href='/products/townhall'>
					<Card
						cardName='Bounty-Bird'
						title='Making Bounties Social and Rewarding'
					/>
				</Link>
				<Link href='#ecosystem'>
					<Card
						cardName='Treasure-Ease'
						title='Simplifying treasury management and invoicing in Web3 Ecosystem'
					/>
				</Link>
			</div>
			<div className='flex lg:hidden p-4 w-full overflow-y-auto justify-start gap-8 items-center'>
				<Link href='/products/townhall'>
					<CardMb
						cardName='townhall-white'
						title='Simplifying DAO management and Governance'
					/>
				</Link>
				<Link href='/products/townhall'>
					<CardMb
						cardName='Bounty-Bird'
						title='Making Bounties Social and Rewarding'
					/>
				</Link>
				<Link href='#ecosystem'>
					<CardMb
						cardName='Treasure-Ease'
						title='Simplifying treasury management and invoicing in Web3 Ecosystem'
					/>
				</Link>
			</div>
			<h1 className='text-3xl sm:text-5xl text-center font-semibold my-8 '>Our Growing Ecosystem</h1>
			<Link
				href='/infrastructure'
				className='relative w-full py-8 md:py-16 gap-8 flex justify-center items-center bg-[#ffffff18] rounded-[26px] shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)] overflow-hidden'>
				<Image
					className='z-10'
					alt='Frame'
					src={`/assets/infra.svg`}
					width={65}
					height={65}
				/>
				<h1 className='text-2xl md:text-5xl font-semibold '>Infrastructure</h1>
			</Link>
		</section>
	);
};

export default Ecosystem;
