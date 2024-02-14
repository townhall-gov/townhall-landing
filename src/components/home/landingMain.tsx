import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"

const LandingMain = () => {
	return (
		<section className='grid grid-cols-12 justify-between items-center px-24 w-full'>
			<div className='col-span-7 inline-flex flex-col items-start gap-12 relative'>
				<div className='flex-col items-start gap-8 inline-flex '>
					<div className='flex-col items-start gap-3 inline-flex '>
						<p className="relative font-semibold text-white text-[60px] leading-[66.0px]">
							Townhall: The Ultimate Governance Toolkit
						</p>
						<p className="relative self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-[#e2e2e2] text-xl leading-9">
							Elevate governance game with Townhall – a single destination <br/> for on-chain and
							off-chain decision-making, treasury <br/> management, and fostering a thriving Web3
							ecosystem.
						</p>
					</div>
					<div className='items-center gap-4 inline-flex relative'>
                        <Button className="audiowide-bold" size='lg'>Launch App</Button>
                        <Button size='lg' variant='secondary'>Book Demo</Button>
					</div>
				</div>
				<div className='items-center gap-8 inline-flex '>
					<div className='items-start gap-10 inline-flex '>
						<div className='items-center gap-3 inline-flex '>
								<div className='flex '>
									<Avatar>
										<AvatarImage src='/assets/avatar.svg' />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									<Avatar className='ml-[-8px]'>
										<AvatarImage src='https://github.com/shadcn.png' />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
								</div>
							<div className='flex-col items-start  inline-flex '>
								<div className="relative w-fit font-bold text-white text-3xl">
									20+
								</div>
								<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-secondary text-xs">
									Partners
								</div>
							</div>
						</div>
						<div className='flex-col items-start inline-flex '>
							<div className="relative w-fit font-bold text-white text-3xl">
								50+
							</div>
							<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-secondary text-xs">
								Proposals
							</div>
						</div>
						<div className='flex-col items-start gap-[2.02px] inline-flex '>
							<div className="relative w-fit font-bold text-white text-3xl">
								10k+
							</div>
							<div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-secondary text-xs">
								Votes
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-5">
				<Image src='/assets/Crystal.svg' width='400' height='400' alt='crystal' />
			</div>
		</section>
	);
};

export default LandingMain;
