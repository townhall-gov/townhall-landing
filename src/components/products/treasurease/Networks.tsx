'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { animate, useMotionValue, motion } from 'framer-motion';

const Networks: React.FC = () => {
	const images = [
		{ logo: '/assets/networks/eth.svg', name: 'Ethereum' },
		{ logo: '/assets/networks/Polygon.svg', name: 'Polygon' },
		// { logo: '/assets/networks/.svg', name: 'Gnosis' },
		{ logo: '/assets/networks/bnb.svg', name: 'BNB' },
		{ logo: '/assets/networks/goreli.svg', name: 'Goerli' },
		{ logo: '/assets/networks/Astar.svg', name: 'Astar' },
		{ logo: '/assets/networks/moonbeam.svg', name: 'Moonbeam' },
		{ logo: '/assets/networks/Arbitrum.svg', name: 'Arbitrum' },
		{ logo: '/assets/networks/optimism.svg', name: 'Optimism' }
		// { logo: '/assets/networks/.svg', name: 'Zeta' }
	];

	let [ref, { width }] = useMeasure();

	const xTranslation = useMotionValue(0);

	useEffect(() => {
		let controls;
		let finalPosition = -width / 3 - 9;

		controls = animate(xTranslation, [0, finalPosition], {
			ease: 'linear',
			duration: 20,
			repeat: Infinity,
			repeatType: 'loop',
			repeatDelay: 0
		});

		return controls.stop;
	}, [xTranslation, width]);

	return (
		<div className='networks-container  w-full  mb-12'>
			<div className='absolute left-0 flex flex-col pt-2 md:pt-0 gap-4 md:flex-row items-center overflow-hidden border-t border-b bg-[#272A2E] border-[#636363] w-full h-20 md:h-12'>
				<h4 className='text-secondary text-sm sm:text-lg whitespace-nowrap pl-auto md:pl-32 bg-[#272A2E] z-10 px-12'>Networks</h4>
				<motion.div
					className='flex items-center'
					ref={ref}
					style={{ x: xTranslation }}>
					{[...images, ...images, ...images].map((item, idx) => (
						<div
							key={idx}
							className='min-w-52 lg:min-w-72 flex justify-center items-center'>
							<Image
								src={item.logo}
								alt='logo'
								width={24}
								height={24}
							/>
							<h3 className='text-secondary ml-2'>{item.name}</h3>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Networks;
