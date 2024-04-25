import Image from 'next/image';
import React from 'react';

const BuiltButton = () => {
	return (
		<div className='flex w-[250px] items-center justify-center relative bg-[#59648c8a] rounded-full border border-solid border-transparent'>
			<div className='relative w-fit outfit-600 font-normal text-white text-xl  leading-normal'>Built on</div>
			<div className='relative w-[96px] h-[40px]'>
				<Image
					src='/assets/safe.svg'
					fill
					alt='safe'
				/>
			</div>
		</div>
	);
};

export default BuiltButton;
