import Image from "next/image";
import React from "react";

const Card = ({
	date,
	imgSrc,
	quarter,
	points,
	isActive,
}: {
	date: string;
	quarter: string;
	imgSrc: string;
	points: string[];
	isActive: boolean;
}) => {

	return (
		<>
			<div className={`w-full  px-4 pt-4 pb-1 flex items-end justify-between`}>
				<span className='text-sm text-secondary'>{date}</span>
				<h1 className={`text-6xl font-semibold ${ isActive ? 'text-primary' : 'text-white'}`}>{quarter}</h1>
			</div>
			<div className={`w-full  px-4 pt-4 ${isActive ? 'bg-primary text-black' : 'bg-[#2D3842] shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)] '} flex flex-col items-start justify-between  `}>
				<Image src={imgSrc} width={120} height={120} alt='roadmap' />
				<ul className='list-disc text-lg p-12 pt-0'>
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
				</ul>
			</div>
		</>
	);
};

const RoadmapMb = () => {
	return (
		<div className='w-full border-t-2 border-b-2  mt-24'>
		<div className='flex sm:hidden flex-col relative justify-center items-center  border-l-2 ml-8 bg-transparent '>
			<div className='flex-1 '>
				<h1 className='text-4xl sm:text-6xl my-12  '>Roadmap</h1>
			</div>
			<div className='flex-1 overflow-y-auto  '>                  
                        <Card date='Jan-Mar 23' quarter='Q1' points={['Social Bounties Platform on Lens Protocol', 'Townhall Governance Platform Launch and Onboarding']} imgSrc="/assets/cone.svg" isActive={true}/>
                        <Card date='Apr-Jun 23' quarter='Q2' points={['Batch Voting', 'Treasury Analytics', 'DAO Management']} imgSrc="/assets/cone-1.svg" isActive={false}/>  
                        <Card date='Jul-Sept 23' quarter='Q3' points={['Leaderboard and Points', 'Community and Treasury Management Tools', 'Launch of Collectibles']} imgSrc="/assets/cone-2.svg" isActive={false}/>
                        <Card date='Oct-Dev 23' quarter='Q4' points={['Data', 'Releasing', 'Soon']} imgSrc="/assets/cone-1.svg" isActive={false}/>
										
			</div>
		</div>
		</div>
	);
};

export default RoadmapMb;
