"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

const TrustedBy: React.FC = () => {
	const images = [ "/assets/dot.svg", "/assets/astar.svg", "/assets/apillon.svg"];

	let [ref, { width }] = useMeasure();

	const xTranslation = useMotionValue(0);

	useEffect(() => {
		let controls;
		let finalPosition = -width / 3 - 9;

		controls = animate(xTranslation, [0, finalPosition], {
			ease: "linear",
			duration: 20,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});

		return controls.stop;
	}, [xTranslation, width]);

	return (
		<div className="overflow-hidden w-full mt-24 mb-12">
			<div className='absolute left-0 flex items-center overflow-hidden border-t border-b bg-[#272A2E] border-[#636363] w-full h-12'>
			<h4 className='text-secondary text-lg whitespace-nowrap pl-32 bg-[#272A2E] z-10 px-12'>Trusted By</h4>
				<motion.div className="flex items-center" ref={ref} style={{ x: xTranslation }}>
					{[...images, ...images, ...images].map((item, idx) => (
						<div key={idx} className='min-w-52 lg:min-w-72 flex justify-center items-center'>
							  <Image src={item} alt='logo' width={120} height={50} />
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default TrustedBy;
