import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { PersonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const GetStarted = () => {
	return (
		<div className="w-full p-4 sm:p-24">
			<div className="w-full relative flex justify-center items-center bg-[#38A1FF] rounded-3xl p-24 py-32">
				<Image
					className="absolute top-0 left-0"
					src="/assets/EllipseTop.svg"
					width="200"
					height="200"
					alt="Ellipse"
				/>
				<Image
					className="absolute bottom-0 right-0"
					src="/assets/EllipseBtm.svg"
					width="200"
					height="200"
					alt="Ellipse"
				/>
				<div className="flex flex-col items-center gap-8">
					<h1 className=" text-clamp text-3xl sm:text-6xl font-semibold">
						Get started with Townhall
					</h1>
					<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
						{/* <div className="flex items-center relative">
							<PersonIcon className="h-5 w-5 absolute left-6 -translate-x-1/2" />

							<input
								type="email"
								className="border pl-10 h-12 w-[250px] sm:w-[400px] border-white focus:border-transparent focus:ring-0 text-[#F2F2F2] placeholder:text-[#F2F2F2] bg-transparent rounded-full"
								placeholder="Enter your email"
							/>
						</div> */}
						<Link href="https://calendly.com/bhavyabatra/30min">
							<Button className="audiowide-bold w-full" size="lg">
								Book Demo
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
