'use client';

// @ts-nocheck
import { useEffect, useLayoutEffect, useState } from 'react';
import '../../../temphero.scss';
import WalletIcon from '/public/assets/hero-wallet-icon.svg';
import NetworkIcon from '/public/assets/hero-network-icon.svg';
import Image from 'next/image';

const getBox = (size: number, x: number, y: number) => {
	return (
		<div
			className='feature'
			id='feature-id'
			// className={`w-[80px] h-[80px] feature border border-[#1A2A42]`}
			key={size}
			// style={{ background: y === 6 && x === Math.ceil((window.innerWidth / 80) - 3) && 'radial-gradient(500px circle at 50%,rgba(21, 115, 254, 0.1),transparent 20%)' }}
		>
			<div className='feature-content flex justify-center items-center'>
				{window.innerWidth > 640 && (
					<>
						{y === 12 && x === Math.ceil(window.innerWidth / 80) && (
							<Image
								alt='wallet'
								width={35}
								height={35}
								src={WalletIcon}
								className='drop-shadow-[0_35px_35px_rgba(10, 50 60)]'
							/>
						)}
						{y === 5 && (window.innerWidth < 769 ? x === 1 : x === 4) && (
							<Image
								src={NetworkIcon}
								alt='network'
								width={35}
								height={35}
							/>
						)}
					</>
				)}
			</div>
		</div>
	);
};

const rowItems = [];

const renderBoxes = (y: number) => {
	let size = 40;
	let arr = [];
	while (size < window.innerWidth + 40) {
		size += 40;
		arr.push(getBox(size, arr.length, y));
	}

	return arr;
};

const TempHero = () => {
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth
	});

	useEffect(() => {
		function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth
			});
		}
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// border handling
	useLayoutEffect(() => {
		console.clear();
		const featuresEl = document.querySelector('.features');
		const featureEls = document.querySelectorAll('.feature');
		if (featureEls && featuresEl) {
			featuresEl?.addEventListener('mousemove', (ev) => {
				featureEls?.forEach((featureEl) => {
					// Not optimized yet, I know
					const rect = featureEl.getBoundingClientRect();
					featureEl.style.setProperty('--x', ev.clientX - rect.left);
					featureEl.style.setProperty('--y', ev.clientY - rect.top);
				});
			});
		}
	}, []);

	return (
		<div className='h-full flex flex-col bg-[#1B2028] absolute'>
			<div className='features'>
				{Array.from({ length: 20 }).map((time, i) => {
					return (
						<div
							className='flex'
							key={i}>
							{...renderBoxes(i)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TempHero;
