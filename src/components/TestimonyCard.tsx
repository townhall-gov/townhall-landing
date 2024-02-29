import Image from "next/image";
import React from "react";

const TestimonyCard = () => {
	return (
		<div className='p-4 sm:p-8 bg-[#ffffff18] rounded-3xl'>
			<div className='inline-flex flex-col items-start gap-[32px]'>
				<p className="relative  [font-family:'Poppins-Regular',Helvetica] font-normal text-transparent text-base">
					<span className='text-[#e6e6e6]'>
						“As a long-time crypto investor, I&#39;ve tried many wallet platforms, but{" "}
						<span className='text-[#38a1ff]'>Townhall </span>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
						consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
					</span>
				</p>
				<div className='flex items-center gap-[14px] relative self-stretch w-full flex-[0_0_auto]'>
					<Image
						className='relative object-cover'
						width={60}
						height={60}
						alt='Unsplash'
						src='/assets/user.png'
					/>
					<div className='flex items-center justify-between relative flex-1 grow'>
						<div className='relative w-[100px] sm:w-[135px] h-[42px]'>
							<div className=" [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-sm sm:text-[16px] tracking-[0.80px] leading-[18px] whitespace-nowrap">
								Jane Doe
							</div>
							<div className=" [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0.80px] leading-[18px] whitespace-nowrap">
								ROLE, COMPANY
							</div>
						</div>
						<Image
							className='relative object-cover'
							width={80}
							height={42}
							alt='Image'
							src='/assets/sign.png'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonyCard;
