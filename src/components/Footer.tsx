import React from "react";
import GetStarted from "./GetStarted";
import Image from "next/image";

const Footer = () => {
	return (
		<div className='w-full relative'>
			<div>
				<div className='flex flex-col md:flex-row items-start gap-8 justify-between mt-12 md:mt-32 bg-[#191e23] px-4 md:px-24 pt-16 pb-40 md:pb-32'>
					<div className='flex flex-col w-full items-center sm:items-start gap-4 relative'>
						<Image width={200} height={35} alt='townhall' src='/logo_full.svg' />
						<p className="relative self-stretch text-center sm:text-left [font-family:'Poppins-SemiBold',Helvetica]  text-white text-lg sm:text-2xl leading-[normal]">
							{" "}
							Ut enim ad minim veniam, <br className="hidden sm:block"/>
							quis nostrud exercitation.
						</p>
					</div>
					<div className='inline-flex flex-wrap justify-between items-start gap-y-16 gap-x-12 sm:gap-16 relative flex-[0_0_auto]'>
						<div className="flex-col gap-4 w-2/5 sm:w-auto  [font-family:'Poppins-Regular',Helvetica] inline-flex items-start relative sm:flex-[0_0_auto]">
							<div className='relative w-fit font-normal text-[#ffffffcc] text-sm tracking-[0.28px] leading-[normal]'>
								PRODUCTS
							</div>
							<div className='inline-flex flex-col leading-[normal] items-start gap-[18px] relative flex-[0_0_auto]'>
								<p>Townhall</p>
								<p>BountyBird</p>
								<p>TreasureEase</p>
								<p>Governance SDKs</p>
							</div>
						</div>
						<div className="flex-col gap-4 w-2/5 sm:w-auto [font-family:'Poppins-Regular',Helvetica] inline-flex items-start relative sm:flex-[0_0_auto]">
							<div className='relative w-fit font-normal text-[#ffffffcc] text-sm leading-[normal]'>
								COMPANY
							</div>
							<div className='inline-flex flex-col leading-[normal] items-start gap-[18px] relative flex-[0_0_auto]'>
								<p>About Us</p>
								<p>Roadmap</p>
								<p>Contact Us</p>
							</div>
						</div>
						<div className='flex-col gap-4 w-2/5 sm:w-auto inline-flex items-start relative sm:flex-[0_0_auto]'>
							<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-sm leading-[normal]">
								RESOURCES
							</div>
							<div className='inline-flex flex-col items-start gap-[18px] leading-[normal] relative flex-[0_0_auto]'>
								<p>Documentation</p>
								<p>GitHub</p>
							</div>
						</div>
						<div className='flex-col gap-4 w-2/5 sm:w-auto inline-flex items-start relative sm:flex-[0_0_auto]'>
							<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-sm leading-[normal]">
								SOCIALS
							</div>
							<div className='flex-col gap-[12px] inline-flex items-start relative flex-[0_0_auto]'>
								<button className='flex items-center gap-1.5 px-3.5 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-full border border-solid border-[#414349]'>
									<Image width={18} height={18} alt='twitter' src='/assets/xIcon.svg' />
									<div className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-sm leading-[20px] whitespace-nowrap">
										Twitter
									</div>
								</button>
								<button className='flex items-center gap-1.5 px-3.5 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-full border border-solid border-[#414349]'>
									<Image width={20} height={20} alt='discord' src='/assets/Discord.svg' />
									<div className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-sm leading-[20px] whitespace-nowrap">
										Discord
									</div>
								</button>
								<button className='flex items-center gap-1.5 px-3.5 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-full border border-solid border-[#414349]'>
									<Image width={20} height={20} alt='discord' src='/assets/telegram.svg' />
									<div className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-sm leading-[20px] whitespace-nowrap">
										Telegram
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col md:flex-row w-full items-center justify-between absolute bottom-0 px-4 sm:px-20 py-6 gap-2 bg-primary'>
				<p className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-background text-sm">
					© 2024 Townhall Inc. All rights reserved.
				</p>
				<div className='gap-4 sm:gap-8 inline-flex w-full sm:w-auto justify-between  items-start relative flex-[0_0_auto]'>
					<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-background text-xs sm:text-sm">
						Terms of Service
					</div>
					<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-background text-xs sm:text-sm">
						Privacy Policy
					</div>
					<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-background text-xs sm:text-sm">
						Cookies
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
