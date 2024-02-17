import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SliderNavs = ({
	active,
	total,
	next,
	prev
}: {
	active: number;
	total: number;
	next: () => void;
	prev: () => void;
}) => {
	const [prevActiveIndex, setPrevActiveIndex] = useState(active);

	useEffect(() => {
		if (prevActiveIndex !== active) {
			setPrevActiveIndex(active);
		}
	}, [active, prevActiveIndex]);

	const Dots = () => (
		<div className='flex justify-center items-center space-x-2'>
			<AnimatePresence>
				{[...Array(total)].map((_, index) => (
					<motion.div
						key={index}
						layout
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
						transition={{ duration: 0.2 }}
						className={` rounded-full ${
							index === active - 1 ? " h-2 w-2 bg-white" : "h-1.5 w-1.5 bg-zinc-700"
						}`}
					/>
				))}
			</AnimatePresence>
		</div>
	);

	return (
		<div className='w-[184px] h-9 px-4 py-2 bg-opacity-40 rounded-full justify-center items-center gap-8 inline-flex'>
			<button
				className='w-5 h-5 relative'
				onClick={prev}
			>
				<Image
					width={16}
					height={16}
					className='relative flex-[0_0_auto]'
					alt='Frame'
					src='/assets/arrowLeft.svg'
				/>
			</button>
			<Dots />
			<button
				className='w-5 h-5 relative'
				onClick={next}
			>
				<Image
					width={16}
					height={16}
					className='relative flex-[0_0_auto]'
					alt='Frame'
					src='/assets/arrowRight.svg'
				/>
			</button>
		</div>
	);
};

export default SliderNavs;
