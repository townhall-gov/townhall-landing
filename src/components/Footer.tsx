import React from "react";
import GetStarted from "./GetStarted";
import Image from "next/image";

const Footer = () => {
	return (
		<div className='w-full relative'>
			<div>
				<div className='flex  items-start justify-between mt-32  px-24 pb-32'>
					<div className='flex flex-col items-start gap-4 relative'>
						<Image width={200} height={35} alt='townhall' src='/logo_full.svg' />
						<p className="relative self-stretch [font-family:'Poppins-SemiBold',Helvetica]  text-white text-2xl leading-[normal]">
							{" "}
							Ut enim ad minim veniam, <br />
							quis nostrud exercitation.
						</p>
					</div>
					<div className='inline-flex items-start gap-16 relative flex-[0_0_auto]'>
						<div className="flex-col gap-4  [font-family:'Poppins-Regular',Helvetica] inline-flex items-start relative flex-[0_0_auto]">
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
						<div className="flex-col gap-[16px] [font-family:'Poppins-Regular',Helvetica] inline-flex items-start relative flex-[0_0_auto]">
							<div className='relative w-fit font-normal text-[#ffffffcc] text-sm leading-[normal]'>
								COMPANY
							</div>
							<div className='inline-flex flex-col leading-[normal] items-start gap-[18px] relative flex-[0_0_auto]'>
								<p>About Us</p>
								<p>Roadmap</p>
								<p>Contact Us</p>
							</div>
						</div>
						<div className='flex-col gap-[16px] inline-flex items-start relative flex-[0_0_auto]'>
							<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-sm leading-[normal]">
								RESOURCES
							</div>
							<div className='inline-flex flex-col items-start gap-[18px] leading-[normal] relative flex-[0_0_auto]'>
								<p>Documentation</p>
								<p>GitHub</p>
							</div>
						</div>
						<div className='flex-col gap-[16px] inline-flex items-start relative flex-[0_0_auto]'>
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

			<div className='flex w-full items-center justify-between absolute bottom-0 px-[80px] py-6 bg-primary'>
				<p className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-background text-sm">
					© 2024 Townhall Inc. All rights reserved.
				</p>
				<div className='gap-[32px] inline-flex items-start relative flex-[0_0_auto]'>
					<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-background text-sm">
						Terms of Service
					</div>
					<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-background text-sm">
						Privacy Policy
					</div>
					<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-background text-sm">
						Cookies
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
