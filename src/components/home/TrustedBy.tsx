"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

const TrustedBy: React.FC = () => {
	const images = ["Trusted", "/assets/dot.svg", "/assets/astar.svg", "/assets/apillon.svg"];

	let [ref, { width }] = useMeasure();

	const xTranslation = useMotionValue(0);

	useEffect(() => {
		let controls;
		let finalPosition = -width / 2 - 6;

		controls = animate(xTranslation, [0, finalPosition], {
			ease: "linear",
			duration: 25,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});

		return controls.stop;
	}, [xTranslation, width]);

	return (
		<div className="overflow-hidden w-full">
			<div className='absolute left-0 flex items-center overflow-hidden border-t border-b bg-[#272A2E] border-[#636363] w-full h-12'>
				<motion.div className="flex items-center" ref={ref} style={{ x: xTranslation }}>
					{[...images, ...images].map((item, idx) => (
						<div key={idx} className='min-w-[400px] flex justify-center items-center'>
							{item === "Trusted" ?  <h4 className='text-secondary text-lg whitespace-nowrap'>Trusted By</h4>: <Image src={item} alt='logo' width={120} height={50} />}
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default TrustedBy;
