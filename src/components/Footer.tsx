import React from 'react';
import GetStarted from './GetStarted';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="w-full relative">
			<div>
				<div className="flex flex-col md:flex-row items-start gap-8 justify-between pt-12 md:pt-32 bg-[#191e23] px-4 md:px-24 pb-40 md:pb-32">
					<div className="flex flex-col w-full items-center sm:items-start gap-4 relative">
						<Image
							width={200}
							height={35}
							alt="townhall"
							src="/logo_full.svg"
						/>
						<p className="relative self-stretch text-center sm:text-left font-family:'Poppins-Regular',Helvetica]  text-white text-lg sm:text-2xl ">
							The All-in-One DAO{' '}
							<br className="hidden sm:block" />
							Superapp
						</p>
					</div>
					<div className="inline-flex flex-wrap justify-between items-start gap-y-16 gap-x-12 sm:gap-16 relative flex-[0_0_auto]">
						<div className="flex-col gap-4 w-2/5 sm:w-auto  [font-family:'Poppins-Regular',Helvetica] inline-flex items-start relative sm:flex-[0_0_auto]">
							<div className="relative w-fit font-normal text-[#ffffffcc] text-sm tracking-[0.28px] leading-[normal]">
								PRODUCTS
							</div>
							<div className="inline-flex flex-col leading-[normal] items-start gap-[18px] relative flex-[0_0_auto]">
								<Link href="/products/townhall">
									<p>Townhall</p>
								</Link>
								<Link href="/products/bountybird">
									<p>BountyBird</p>
								</Link>
								{/* <p>TreasureEase</p>
								<p>Governance SDKs</p> */}
							</div>
						</div>
						<div className="flex-col gap-4 w-2/5 sm:w-auto [font-family:'Poppins-Regular',Helvetica] inline-flex items-start relative sm:flex-[0_0_auto]">
							<div className="relative w-fit font-normal text-[#ffffffcc] text-sm leading-[normal]">
								COMPANY
							</div>
							<div className="inline-flex flex-col leading-[normal] items-start gap-[18px] relative flex-[0_0_auto]">
								<Link href="/">
									<p>About Us</p>
								</Link>
								<Link href="/#roadmap">
									<p>Roadmap</p>
								</Link>
								<Link href="/contact">
									<p>Contact Us</p>
								</Link>
							</div>
						</div>
						<div className="flex-col gap-4 w-2/5 sm:w-auto inline-flex items-start relative sm:flex-[0_0_auto]">
							<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-sm leading-[normal]">
								RESOURCES
							</div>
							<div className="inline-flex flex-col items-start gap-[18px] leading-[normal] relative flex-[0_0_auto]">
								<Link
									href="https://docs.townhallgov.com/townhall"
									target="_blank"
									rel="noreferrer"
								>
									<p>Documentation</p>
								</Link>
								{/* <p>GitHub</p> */}
							</div>
						</div>
						<div className="flex-col gap-4 w-2/5 sm:w-auto inline-flex items-start relative sm:flex-[0_0_auto]">
							<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-sm leading-[normal]">
								SOCIALS
							</div>
							<div className="flex-col gap-[12px] inline-flex items-start relative flex-[0_0_auto]">
								<Link
									href="https://twitter.com/townhallgov"
									target="_blank"
									rel="noreferrer"
								>
									<button className="flex items-center gap-1.5 px-3.5 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-full border border-solid border-[#414349]">
										<Image
											width={14}
											height={14}
											alt="twitter"
											src="/assets/xIcon.svg"
										/>
										<div className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-sm leading-[20px] whitespace-nowrap">
											Twitter
										</div>
									</button>
								</Link>
								<Link
									href="https://discord.gg/cp35EvU48b"
									target="_blank"
									rel="noreferrer"
								>
									<button className="flex items-center gap-1.5 px-3.5 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-full border border-solid border-[#414349]">
										<Image
											width={18}
											height={18}
											alt="discord"
											src="/assets/Discord.svg"
										/>
										<div className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-sm leading-[20px] whitespace-nowrap">
											Discord
										</div>
									</button>
								</Link>
								<Link
									href="https://t.me/townhallgov"
									target="_blank"
									rel="noreferrer"
								>
									<button className="flex items-center gap-1.5 px-3.5 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-full border border-solid border-[#414349]">
										<Image
											width={18}
											height={18}
											alt="discord"
											src="/assets/telegram.svg"
										/>
										<div className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-sm leading-[20px] whitespace-nowrap">
											Telegram
										</div>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row w-full items-center justify-between absolute bottom-0 px-4 sm:px-20 py-6 gap-2 bg-primary">
				<p className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-background text-sm">
					© 2024 Townhall Inc. All rights reserved.
				</p>
				<div className="gap-4 sm:gap-8 inline-flex w-full sm:w-auto justify-between  items-start relative flex-[0_0_auto]">
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
