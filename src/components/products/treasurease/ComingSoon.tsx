import Image from 'next/image';
import React from 'react';

const ComingSoon = () => {
	return (
		<section className='w-full flex flex-col justify-center items-center h-screen'>
			<h1 className=' text-5xl '>Coming Soon</h1>
			<div className='w-full mt-8 border-t border-b flex flex-col md:flex-row justify-around items-center py-24 px-8 bg-[#1C1C1C]'>
				<div className='flex flex-col gap-4 items-center md:items-start justify-center'>
					<Image
						src='/assets/treasurease/TESoon1.svg'
						width={36}
						height={36}
						alt='soon'
					/>
					<h1 className='text-xl font-semibold'>Growth stack</h1>
				</div>
				<div className='flex flex-col gap-4 items-center py-24 md:py-auto md:items-start justify-center'>
					<Image
						src='/assets/treasurease/TESoon2.svg'
						width={36}
						height={36}
						alt='soon'
					/>
					<h1 className='text-xl font-semibold'>on-chain treasury bonds</h1>
				</div>
				<div className='flex flex-col gap-4 items-center md:items-start justify-center'>
					<Image
						src='/assets/treasurease/TESoon3.svg'
						width={36}
						height={36}
						alt='soon'
					/>
					<h1 className='text-xl font-semibold'>Automated financial statements</h1>
				</div>
			</div>
		</section>
	);
};

export default ComingSoon;
