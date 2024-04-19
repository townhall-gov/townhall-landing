import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BuiltButton from './BuiltButton';
import TempHero from './TempHero';

const Banner = () => {
	return (
		<div className='h-screen w-full flex items-center justify-center'>
			<div className='w-3/4 h-[65vh] my-32 overflow-hidden rounded-[60px]'>
				<div className='absolute'>
					<TempHero />
				</div>
				<div className='w-full flex flex-col items-center justify-center relative mt-24 z-10'>
					<div className='w-3/4 flex flex-col gap-4 justify-center items-center rounded drop-shadow-lg p-12'>
						<h1 className='relative font-semibold text-white text-center  text-2xl md:text-3xl lg:text-5xl'>
							TreasureEase: Your gateway to the <br /> <span className='[text-shadow:_0_3px_16px_rgb(60_115_221)]'>Ultimate MultiSig </span> experience
						</h1>
						<p className='hidden md:block text-lg font-light'>We are focused on improving participation and governance in web3 ecosystem</p>
					</div>
					<div className='flex gap-4 items-center '>
						<Link href='http://app.townhallgov.com'>
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
				</div>
				<div className='absolute bottom-0 right-48 z-10'>
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
