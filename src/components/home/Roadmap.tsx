import React from "react";

const Card = ({
	date,
	quarter,
	points,
	isActive,
}: {
	date: string;
	quarter: string;
	points: string[];
	isActive: boolean;
}) => {

    const marginTop = quarter === 'Q1' ? '' : quarter === 'Q2' ? 'mt-[250px]' : 'mt-[170px]';

	return (
		<>
			<div className={`w-full ${marginTop} border-b border-l px-4 pt-4 pb-1 flex items-end justify-between`}>
				<span className='text-sm text-secondary'>{date}</span>
				<h1 className={`text-6xl font-semibold ${ isActive ? 'text-primary' : 'text-white'}`}>{quarter}</h1>
			</div>
			<div className={`w-full h-[250px] px-4 pt-4 ${isActive ? 'bg-primary text-black' : 'bg-[#2D3842] shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)] '} flex items-center justify-between  `}>
				<ul className='list-disc text-lg p-12'>
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
				</ul>
			</div>
		</>
	);
};

const Roadmap = () => {
	return (
		<div className='grid relative grid-cols-12  border-t border-b bg-transparent mt-24 w-full'>
			<div className='col-span-5 border-r pb-48'>
				<h1 className='-rotate-90 text-8xl sticky top-48 my-24 md:mb-48'>Roadmap</h1>
			</div>
			<div className='col-span-7 overflow-y-auto'>
				<div className='grid relative grid-cols-12 border-t bg-transparent w-full'>
					<div className='col-span-6 h-full w-full'> 
                    {/* Add Even Quater data here */}
                        <Card date='Apr-Jun 23' quarter='Q2' points={['Batch Voting', 'Treasury Analytics', 'DAO Management']} isActive={false}/>  
                        <Card date='Oct-Dev 23' quarter='Q4' points={['Data', 'Releasing', 'Soon']} isActive={false}/>
					</div>
					<div className='col-span-6  h-full w-full'> 
                     {/* Add Odd Quater data here */}
                        <Card date='Jan-Mar 23' quarter='Q1' points={['Social Bounties Platform on Lens Protocol', 'Townhall Governance Platform Launch and Onboarding']} isActive={true}/>
                        <Card date='Jul-Sept 23' quarter='Q3' points={['Leaderboard and Points', 'Community and Treasury Management Tools', 'Launch of Collectibles']} isActive={false}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
