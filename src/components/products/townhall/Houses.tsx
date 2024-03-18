'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import SliderNavs from '@/components/SliderNavs';
import Image from 'next/image';
import { getActiveBreakpoint } from '@/lib/utils';
const Houses = ({ Data = [] }: any) => {
	const [FlowDirection, setFlowDirection] = useState(true);
	const [CenterId, setCenterId] = useState(0);
	const [Left1Id, setLeft1Id] = useState(Data.length - 1);
	const [Left2Id, setLeft2Id] = useState(Data.length - 2);
	const [Left3Id, setLeft3Id] = useState(Data.length - 3);
	const [Right1Id, setRight1Id] = useState(1);
	const [Right2Id, setRight2Id] = useState(2);
	const [Right3Id, setRight3Id] = useState(3);

	const updateId = (id: number, direction: number) => {
		if (id === 0 && direction === -1) {
			return Data.length - 1;
		} else if (id === Data.length - 1 && direction === 1) {
			return 0;
		} else {
			return id + direction;
		}
	};

	const nextBtn = () => {
		setLeft1Id(updateId(Left1Id, 1));
		setLeft2Id(updateId(Left2Id, 1));
		setLeft3Id(updateId(Left3Id, 1));
		setCenterId(updateId(CenterId, 1));
		setRight1Id(updateId(Right1Id, 1));
		setRight2Id(updateId(Right2Id, 1));
		setRight3Id(updateId(Right3Id, 1));
		setFlowDirection(true);
	};

	const prevBtn = () => {
		setFlowDirection(false);
		setLeft1Id(updateId(Left1Id, -1));
		setLeft2Id(updateId(Left2Id, -1));
		setLeft3Id(updateId(Left3Id, -1));
		setCenterId(updateId(CenterId, -1));
		setRight1Id(updateId(Right1Id, -1));
		setRight2Id(updateId(Right2Id, -1));
		setRight3Id(updateId(Right3Id, -1));
	};

	useEffect(() => {
		const timerId = setInterval(() => nextBtn(), 4000);
		return () => clearInterval(timerId);
	});

	const variants = {
		center: {
			x: '0rem',
			opacity: 1,
			scale: 1.1,
			zIndex: '5',
			filter: 'brightness(100%)',
			backgroundImage: 'url(' + Data[CenterId].ImgSrc + ')',
			backgroundColor: 'rgba(256,256,256, 1)',
			boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.3)',
			transition: {
				type: 'spring',
				duration: 1
			}
		},
		left1: {
			x: '-9rem',
			y: '-0.5rem',
			opacity: 1,
			filter: 'brightness(60%)',
			scale: 0.9,
			backgroundImage: 'url(' + Data[Left1Id].ImgSrc + ')',
			backgroundColor: 'rgba(256,256,256, 1)',
			zIndex: '4',
			boxShadow: 'unset',
			transition: {
				type: 'spring',
				duration: 1
			}
		},
		left2: {
			x: '-18rem',
			y: '-1rem',
			opacity: 1,
			filter: 'brightness(50%)',
			scale: 0.85,
			backgroundImage: 'url(' + Data[Left2Id].ImgSrc + ')',
			backgroundColor: 'rgba(256,256,256, 1)',
			zIndex: '3',
			boxShadow: 'unset',
			transition: {
				type: 'spring',
				duration: 1
			}
		},
		left3: {
			x: '-25rem',
			y: '-1.5rem',
			opacity: 1,
			filter: 'brightness(40%)',
			scale: 0.8,
			backgroundImage: 'url(' + Data[Left3Id].ImgSrc + ')',
			backgroundColor: 'rgba(256,256,256, 1)',
			zIndex: '2',
			boxShadow: 'unset',
			transition: {
				type: 'spring',
				duration: 1
			}
		},
		right1: {
			backgroundImage: 'url(' + Data[Right1Id].ImgSrc + ')',
			x: '9rem',
			y: '-0.5rem',
			opacity: 1,
			filter: 'brightness(60%)',
			backgroundColor: 'rgba(256,256,256, 1)',
			scale: 0.9,
			boxShadow: 'unset',
			zIndex: '4',
			transition: {
				type: 'spring',
				duration: 1
			}
		},
		right2: {
			backgroundImage: 'url(' + Data[Right2Id].ImgSrc + ')',
			x: '18rem',
			y: '-1rem',
			opacity: 1,
			filter: 'brightness(50%)',
			backgroundColor: 'rgba(256,256,256, 1)',
			scale: 0.85,
			boxShadow: 'unset',
			zIndex: '3',
			transition: {
				type: 'spring',
				duration: 1
			}
		},
		right3: {
			backgroundImage: 'url(' + Data[Right3Id].ImgSrc + ')',
			x: '25rem',
			y: '-1.5rem',
			opacity: 1,
			filter: 'brightness(40%)',
			backgroundColor: 'rgba(256,256,256, 1)',
			scale: 0.8,
			boxShadow: 'unset',
			zIndex: '2',
			transition: {
				type: 'spring',
				duration: 1
			}
		},
		rightHidden: {
			x: '8rem',
			scale: 0,
			opacity: 0
		},
		leftHidden: {
			x: '-8rem',
			scale: 0,
			opacity: 0
		}
	};
	return (
		<motion.div className="flex flex-col items-center justify-center p-8 lg:p-24 pb-0 w-full overflow-hidden">
			<h1 className="text-5xl font-semibold text-center lg:text-left w-full m-12 mb-24">
				Houses On TownHall
			</h1>
			<motion.div className="relative size-40 lg:size-72">
				<AnimatePresence initial={false}>
					<motion.div
						key={Left3Id}
						variants={variants}
						initial={FlowDirection ? 'center' : 'leftHidden'}
						animate="left3"
						exit={'leftHidden'}
						className="absolute size-40 lg:size-72 bg-center bg-cover -right-44 lg:right-auto bg-no-repeat rounded-full"
					></motion.div>
					<motion.div
						key={Left2Id}
						variants={variants}
						initial={FlowDirection ? 'center' : 'leftHidden'}
						animate="left2"
						exit={'leftHidden'}
						className="absolute size-40 lg:size-72 bg-center bg-cover -right-36 lg:right-auto bg-no-repeat rounded-full"
					></motion.div>
					<motion.div
						key={Left1Id}
						variants={variants}
						initial={FlowDirection ? 'center' : 'leftHidden'}
						animate="left1"
						exit={'leftHidden'}
						className="absolute size-40 lg:size-72 bg-center bg-cover -right-16 lg:right-auto bg-no-repeat rounded-full"
					></motion.div>
					<motion.div
						variants={variants}
						key={CenterId}
						initial={FlowDirection ? 'right' : 'left'}
						animate="center"
						className="absolute size-40 lg:size-72 bg-center bg-cover bg-no-repeat rounded-full"
					></motion.div>
					<motion.div
						key={Right1Id}
						variants={variants}
						initial={FlowDirection ? 'rightHidden' : 'center'}
						animate="right1"
						exit={'rightHidden'}
						className="absolute size-40 lg:size-72 bg-center text-right bg-cover right-16 lg:right-auto bg-no-repeat rounded-full"
					></motion.div>
					<motion.div
						key={Right2Id}
						variants={variants}
						initial={FlowDirection ? 'rightHidden' : 'center'}
						animate="right2"
						exit={'rightHidden'}
						className="absolute size-40 lg:size-72 bg-center text-right bg-cover right-36 lg:right-auto bg-no-repeat rounded-full"
					></motion.div>
					<motion.div
						key={Right3Id}
						variants={variants}
						initial={FlowDirection ? 'rightHidden' : 'center'}
						animate="right3"
						exit={'rightHidden'}
						className="absolute size-40 lg:size-72 bg-center text-right bg-cover right-44 lg:right-auto bg-no-repeat rounded-full"
					></motion.div>
				</AnimatePresence>
			</motion.div>

			<h1 className="text-2xl sm:text-4xl font-semibold text-center w-full min-w-[60px] sm:min-w-[200px] m-12">
				{Data[CenterId].Name}
			</h1>

			<div className=" flex justify-center items-center gap-2 sm:gap-8 z-10 ">
				<motion.button
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: 'spring',
						duration: 0.5
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.8 }}
					className="w-8 h-8 relative"
					onClick={prevBtn}
				>
					<Image
						width={20}
						height={20}
						className="relative flex-[0_0_auto]"
						alt="Frame"
						src="/assets/arrowLeft.svg"
					/>
				</motion.button>
				<SliderNavs
					active={CenterId + 1}
					total={Data.length}
					next={nextBtn}
					prev={prevBtn}
				/>
				<motion.button
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: 'spring',
						duration: 0.5
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.8 }}
					className="w-8 h-8 relative"
					onClick={nextBtn}
				>
					<Image
						width={20}
						height={20}
						className="relative flex-[0_0_auto]"
						alt="Frame"
						src="/assets/arrowRight.svg"
					/>
				</motion.button>
			</div>
		</motion.div>
	);
};

export default Houses;
