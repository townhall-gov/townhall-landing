'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Banner = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const threshold = 800; // Adjust threshold as needed

			if (scrollTop > threshold) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="w-full px-4 h-screen sm:px-8 lg:px-24 ">
			<div className="w-full flex flex-col items-center relative mt-24 rounded-3xl h-[40vh] md:h-[76vh] overflow-hidden">
				<Image
					src="/assets/townhallBanner.png"
					fill
					loading="lazy"
					alt="townhall"
				/>
				<div className="w-full flex flex-col gap-4 justify-center items-center absolute bottom-0 bg-[#191E23] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-8 md:pb-24">
					<h1 className="relative font-semibold text-white text-center  text-2xl md:text-3xl lg:text-5xl">
						TownHall:{' '}
						<span className="text-primary">
							Gamified Social Products
						</span>
					</h1>
					<p className="hidden md:block text-lg font-light">
						We are focused on improving participation and governance
						in web3 ecosystem
					</p>
				</div>
				<Link
					className="fixed bottom-24 z-20"
					href="http://app.townhallgov.com"
				>
					<Button
						size="lg"
						className="hidden md:block audiowide-bold "
					>
						Launch App
					</Button>
				</Link>
			</div>
			<div className="flex flex-col gap-4 mt-4 items-center md:hidden">
				<p className="relative  text-lg text-center font-light">
					We are focused on improving participation and governance in
					web3 ecosystem
				</p>
				<motion.div
					initial={{ y: 0 }}
					animate={{ y: isScrolled ? '100%' : 0 }}
					transition={{ type: 'spring', damping: 25, stiffness: 120 }}
					style={{ position: 'fixed', bottom: 0 }}
				>
					<Button size="lg" className="relative audiowide-bold z-20">
						Launch Apps
					</Button>
				</motion.div>
			</div>
			<div className="flex flex-col items-center mt-12">
				<h3>Integrated with</h3>
				<div className="flex flex-wrap items-center justify-center gap-4">
					<Image
						src="/assets/snapshotFull.svg"
						width={120}
						height={60}
						alt="snapshot"
					/>
					<Image
						src="/assets/discourse.svg"
						width={120}
						height={60}
						alt="snapshot"
					/>
					<Image
						src="/assets/safe.svg"
						width={120}
						height={60}
						alt="snapshot"
					/>
					<Image
						src="/assets/tally.svg"
						width={120}
						height={60}
						alt="snapshot"
					/>
					<Image
						src="/assets/karma.svg"
						width={120}
						height={60}
						alt="snapshot"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
