'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { oneStopData } from '@/services/constants';

const Solution: React.FC = () => {
	return (
		<div className="flex flex-col md:grid relative grid-row sm:grid-cols-3 lg:px-24 bg-transparent ">
			<div className="col-span-1 border-b md:border-r">
				<div className="md:p-4 relative md:sticky top-0 ">
					<h1 className="text-3xl md:text-4xl lg:text-6xl flex flex-col justify-center h-[300px] md:h-screen font-semibold px-2 mb-4">
						One Stop Solution for Governance
					</h1>
				</div>
			</div>

			<div className="col-span-2 flex flex-col justify-between md:p-4 ml-6 snap-proximity">
				{oneStopData.map((item, index) => (
					<div
						key={index}
						className=" flex flex-col md:flex-row  justify-between w-full h-screen my-8  pt-24 md:pt-0 items-center border-b md:border-none snap-align-none hover:snap-center"
					>
						<div className="md:flex-1 lg:mr-24">
							<h2 className="text-4xl text-destructive font-semibold mb-2">
								{item.title}
							</h2>
							<p className="font-lg pr-4">{item.description}</p>
						</div>
						<div className="flex-1 relative md:left-12 size-[200px] md:size-[400px]">
							<Image
								src={item.image}
								alt={item.title}
								className="object-contain"
								loading="lazy"
								fill
							/>
						</div>
					</div>
				))}
			</div>
			<span className="hidden md:block absolute w-full overflow-hidden border-b  bottom-0" />
		</div>
	);
};

export default Solution;
