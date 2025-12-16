import Image from 'next/image';
import React from 'react';
import './style.css';
import ReactHTMLParser from 'react-html-parser';

const Difference = () => {
	return (
		<section className='relative m-24 min-h-full w-full'>
			<div className='relative flex h-full min-h-[120vh] w-full flex-col items-center justify-center bg-gradient-to-r from-[#1c1e1f] via-[#305561] to-transparent blur-[25px] backdrop-blur-[23px]'></div>
			<div className='absolute left-1/2 top-24 w-full -translate-x-1/2 -translate-y-1/3 transform md:top-1/3'>
				<h1 className='text-center text-5xl md:text-8xl'>
					What makes us <br />
					<span className='text-primary'>different? </span>
				</h1>
				<div className='absolute left-1/2 top-24 -translate-x-1/2 -translate-y-1/2 transform md:top-1/2'>
					<Image
						className='bubbling motion-safe:animate-pulse'
						src='/assets/bubble.svg'
						width={500}
						height={500}
						alt='townhall'
					/>
				</div>
			</div>
			<div className='md:items-top absolute -bottom-12 left-1/2 flex w-full -translate-x-1/2 transform flex-col items-center justify-evenly gap-4 md:bottom-12 md:flex-row md:gap-8'>
				<Card
					imgSrc='/assets/diff1.svg'
					text='Gamified User friendly Interface'
				/>
				<Card
					imgSrc='/assets/diff2.svg'
					text='Easy Onboarding: Login via Privy or Safe'
					// text="Easy Onboarding: Login via <div class='inline-flex gap-2 items-center'> <img src='/assets/privyIcon.png' className='w-6 h-6 '/> or  <img src='/assets/SafeIcon.png' className='w-6 h-6 pl-2'/> </div>"
				/>
				<Card
					imgSrc='/assets/diff3.svg'
					text='Modular Infrastructure: Customise the platform to your needs'
				/>
			</div>
		</section>
	);
};

const Card = ({ imgSrc, text }: { imgSrc: string; text: string }) => {
	return (
		<div className='relative inline-flex flex-col items-center'>
			<Image
				alt='Plant'
				src={imgSrc}
				width={200}
				height={200}
			/>
			<div className='poppins-light relative flex w-[300px] flex-col items-center text-center text-2xl font-extralight text-white md:min-h-[100px]'>{ReactHTMLParser(text)}</div>
		</div>
	);
};

export default Difference;
