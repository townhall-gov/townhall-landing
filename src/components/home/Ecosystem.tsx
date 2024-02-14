import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Ecosystem = () => {
	return (
		<section className='mt-12 flex flex-col justify-center items-center gap-8'>
			<div className='flex justify-center gap-8 items-center'>
				<div className='w-[400px] h-[350px] flex flex-col justify-center items-center bg-[#ffffff18] rounded-[26px] shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)]'>
					<Image alt='Frame' src='/assets/townhall-white.svg' width={100} height={100} />
					<div className='flex items-center gap-2 mt-4'>
						<Image alt='Frame' src='/assets/Th-text.svg' width={250} height={100} />
						<Image alt='Frame' src='/assets/arrow-sm-left.svg' width={40} height={40} />
					</div>
				</div>
				<div className='w-[400px] h-[350px] flex flex-col justify-center items-center bg-[#ffffff18] rounded-[26px] shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)]'>
					<Image alt='Frame' src='/assets/bountybird.svg' width={100} height={100} />
					<div className='flex items-center gap-2 mt-4'>
						<Image alt='Frame' src='/assets/BountyBird-text.svg' width={250} height={100} />
						<Image alt='Frame' src='/assets/arrow-sm-left.svg' width={40} height={40} />
					</div>
				</div>
				<div className='w-[400px] h-[350px] flex flex-col justify-center items-center bg-[#ffffff18] rounded-[26px] shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)]'>
					<Image alt='Frame' src='/assets/treasurEase.svg' width={100} height={100} />
					<div className='flex items-center gap-2 mt-4'>
						<Image alt='Frame' src='/assets/treasurease-text.svg' width={250} height={100} />
						<Image alt='Frame' src='/assets/arrow-sm-left.svg' width={40} height={40} />
					</div>
				</div>
			</div>
			<h1 className='text-6xl font-semibold mt-8'>Our Growing Ecosystem</h1>
			<Button size='lg'>
				Explore{" "}
				<Image
					className='ml-2'
					alt='Frame'
					src='/assets/arrow-sm-left-blk.svg'
					width={20}
					height={20}
				/>{" "}
			</Button>
		</section>
	);
};

export default Ecosystem;
