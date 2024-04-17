import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BuiltButton from './BuiltButton';

const Banner = () => {
	return (
		<div className='w-full px-4 h-screen sm:px-8 lg:px-24 '>
			<div className='w-full flex flex-col items-center justify-center relative mt-24 rounded-3xl h-[40vh] md:h-[76vh] overflow-hidden bg-[url("/assets/treasurease/TEBanner.png")] bg-contain bg-no-repeat'>
				<div className='w-3/4 flex flex-col gap-4 justify-center items-center rounded drop-shadow-lg p-12'>
					<h1 className='relative font-semibold text-white text-center  text-2xl md:text-3xl lg:text-5xl'>
						TreasureEase: Your gateway to the <br /> Ultimate MultiSig experience
					</h1>
					<p className='hidden md:block text-lg font-light'>We are focused on improving participation and governance in web3 ecosystem</p>
				</div>
				<div className='flex gap-4 items-center '>
					<Link
						className=' bottom-24 z-20'
						href='http://app.townhallgov.com'>
						<Button
							size='lg'
							className=' audiowide-bold '>
							Launch App
						</Button>
					</Link>
					<Link href='https://calendly.com/bhavyabatra/30min'>
						<Button
							variant='secondary'
							size='lg'>
							Read Docs
						</Button>{' '}
					</Link>
				</div>
				<div className='flex mt-12 gap-4 items-center divide-x-2 divide-borderLight'>
					<div className='px-4'>
						<h1 className='font-bold text-white text-xl sm:text-3xl'>1500+</h1>
						<p className='relative w-fit poppins-regular font-normal text-secondary text-xs'>Total Wallets</p>
					</div>
					<div className='px-4'>
						<h1 className='font-bold text-white text-xl sm:text-3xl'>1500+</h1>
						<p className='relative w-fit poppins-regular font-normal text-secondary text-xs'>Total Assets Managed</p>
					</div>
				</div>
				<div className='absolute bottom-0 right-48'>
					{/* <BuiltButton /> */}
					<Image
						src='/assets/treasurease/TEBuilt.png'
						width={350}
						height={400}
						alt='safe'
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
