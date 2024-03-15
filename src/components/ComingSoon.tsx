import Image from 'next/image';
import React from 'react';

const ComingSoon = () => {
	return (
		<div className="absolute flex gap-2 items-center rounded-full  bg-[#272727]  border-t-2 border-l-2 border-[#4b4b4b] justify-between top-1/2 text-3xl left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<div className="flex gap-2 items-center border-r-2 border-[#f2f2f2] rounded-full px-6 py-3 ">
				Coming Soon
				<Image
					src="/assets/star.svg"
					width={36}
					height={36}
					alt="star"
				/>
			</div>
		</div>
	);
};

export default ComingSoon;
