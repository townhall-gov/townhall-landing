import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BuiltButton from './BuiltButton';
import TempHero from './TempHero';

const Banner = () => {
	return (
		<div className='h-screen relative w-full flex flex-col items-center'>
			<div className='w-3/4 h-[65vh] mt-32 overflow-hidden rounded-[60px]'>
				<div className='absolute'>
					<TempHero />
				</div>
				<div className='w-full flex flex-col items-center justify-center relative md:mt-24 z-10'>
					<div className='md:w-3/4 flex flex-col gap-4 justify-center items-center rounded drop-shadow-lg p-4 md:p-12'>
						<h1 className='relative font-semibold text-white text-center  text-2xl md:text-3xl lg:text-5xl'>
							TreasureEase: Your gateway to the <br className='hidden md:block' /> <span className='[text-shadow:_0_3px_16px_rgb(60_115_221)]'>Ultimate MultiSig </span> experience
						</h1>
						<p className='hidden md:block text-lg font-light'>We are focused on improving participation and governance in web3 ecosystem</p>
					</div>
					<div className='flex flex-wrap gap-4 justify-center mt-8 md:mt-auto items-center '>
						<Link href='https://treasurease.xyz'>
							<Button
								size='lg'
								className=' audiowide-bold '>
								Launch App
							</Button>
						</Link>
						<Link href='https://docs.townhallgov.com'>
							<Button
								variant='secondary'
								size='lg'>
								Read Docs
							</Button>{' '}
						</Link>
					</div>
					<div className='flex mt-12 gap-4 items-center justify-center divide-x-2 divide-borderLight'>
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
			</div>
			<div className='sm:left-[28rem] md:left-[18.8rem] top-0 z-20 w-1/2  md:w-auto h-14 md:h-28 overflow-hidden  bg-transparent rounded-bl-3xl rounded-br-3xl'>
				<div className='absolute'>
					<TempHero />
				</div>
				<div className='w-full h-full flex z-10'>
					<div className='banner-pillar-1 w-12 h-full rounded-t-full bg-[#111111] relative right-6 z-10' />
					<Image
						src='/assets/treasurease/TEBuild.png'
						width={350}
						height={400}
						alt='safe'
						className='z-10'
					/>
					<div className='banner-pillar-2 w-12 h-full rounded-t-full bg-[#111111] relative left-6 z-10' />
				</div>
			</div>
		</div>
	);
};

export default Banner;
