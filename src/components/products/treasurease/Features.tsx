import Image from 'next/image';
import React from 'react';

const Features = () => {
	return (
		<section className='w-full mt-48 overflow-hidden'>
			<div className='flex flex-col py-16 md:py-24 border-b border-t bg-[#161616]'>
				<h1 className='text-3xl ml-12 md:text-6xl w-full text-left font-semibold mb-12'>Features</h1>
			</div>
			<div className='flex flex-col md:grid md:grid-cols-12 border-collapse w-full'>
				<div className='col-span-5 flex p-8 flex-col justify-center border'>
					<Image
						src='/assets/treasurease/TEIcon3.svg'
						alt='categorisation'
						width={40}
						height={40}
					/>
					<h1 className='text-3xl mt-3 font-semibold'>Notifications</h1>
					<p className='text-secondary mt-2'>Sign multisig transactions, asynchronously</p>
				</div>
				<div className='col-span-7 flex flex-col items-center gap-4 border p-12'>
					<div className='grid grid-cols-12 w-full gap-4'>
						<div className='col-span-6 p-4 rounded-2xl border'>
							<h1>Recurring Notification</h1>
							<p className='text-secondary mt-2'>Our bots send recurring notifications to pending signers</p>
						</div>
						<div className='col-span-6 p-4 rounded-2xl border'>
							<h1>Dashboard</h1>
							<p className='text-secondary mt-2'>User stats dashboard shows signer behaviour over multiple transactions</p>
						</div>
					</div>
					<div className='w-full p-4 rounded-2xl border'>
						<h1>Transaction</h1>
						<p className='text-secondary mt-2'>Get confirmation notification once the transaction is on-chain</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:grid md:grid-cols-12 border-collapse w-full'>
				<div className='col-span-5 flex p-8 flex-col justify-center border'>
					<Image
						src='/assets/treasurease/TEIcon4.svg'
						alt='categorisation'
						width={40}
						height={40}
					/>
					<h1 className='text-3xl mt-3 font-semibold'>Analytics</h1>
					<p className='text-secondary mt-2'>Analytics feature in Treasurease can offer users a comprehensive toolset for analyzing and managing funds held within multisig wallets.</p>
				</div>
				<div className='col-span-7 flex flex-col items-center gap-4 border p-12'>
					<div className='w-full relative h-48 md:h-96 rounded-2xl'>
						<Image
							src='/assets/treasurease/TEAnalytics.svg'
							alt='analytics'
							className='object-contain'
							fill
						/>
					</div>
					<div className='grid grid-cols-12 w-full gap-4'>
						<div className='col-span-6 p-4 rounded-2xl border'>
							<p className='text-secondary mt-2'>Provide users with insights into the distribution of assets across different categories or projects within the multisig wallet.</p>
						</div>
						<div className='col-span-6 p-4 rounded-2xl border'>
							{/* <h1>Consequatur aut m</h1> */}
							<p className='text-secondary mt-2'>Users can visualize asset allocation percentages and identify areas where funds are concentrated or diversified.</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:grid md:grid-cols-12 border-collapse w-full'>
				<div className='col-span-5 flex p-8 flex-col justify-center border'>
					<Image
						src='/assets/treasurease/TEIcon5.svg'
						alt='categorisation'
						width={40}
						height={40}
					/>
					<h1 className='text-3xl mt-3 font-semibold'>Categorisation</h1>
					<p className='text-secondary mt-2'>Allow users to create and customize categories based on their specific needs and preferences.</p>
				</div>
				<div className='col-span-7 flex flex-col h-65 items-center gap-4 border p-12'>
					<div className='grid grid-cols-12 w-full h-full min-h-48 md:min-h-[34rem] gap-4'>
						<div className='col-span-6 relative w-[100%] h-full rounded-2xl'>
							<Image
								src='/assets/treasurease/TECategory1.svg'
								alt='categorisation'
								className='object-contain'
								fill
							/>
						</div>
						<div className='col-span-6 relative w-[83%] h-full rounded-2xl'>
							<Image
								src='/assets/treasurease/TECategory2.svg'
								alt='categorisation'
								className='object-contain'
								fill
							/>
						</div>
					</div>
					<div className='w-full p-4 rounded-2xl border'>
						<h1>Customizable Categories</h1>
						<p className='text-secondary mt-2'>This flexibility enables users to categorize transactions according to different criteria such as project type, transaction purpose, or user-defined tags.</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:grid md:grid-cols-12 border-collapse w-full'>
				<div className='col-span-5 flex p-8 flex-col justify-center border'>
					<Image
						src='/assets/treasurease/TEIcon2.svg'
						alt='categorisation'
						width={40}
						height={40}
					/>
					<h1 className='text-3xl mt-3 font-semibold'>Invoice</h1>
					<p className='text-secondary mt-2'>Create invoice templates.</p>
				</div>
				<div className='col-span-7 flex flex-col items-center gap-4 border p-12'>
					<div className='flex flex-col md:grid md:grid-cols-12 w-full h-full gap-4'>
						<div className='col-span-6 relative w-full h-full min-h-96 rounded-2xl'>
							<Image
								src='/assets/treasurease/TEInvoices.svg'
								alt='categorisation'
								className='object-contain'
								fill
							/>
						</div>
						<div className='col-span-6 p-4 flex flex-col justify-center rounded-2xl border'>
							<h1>Share invoice</h1>
							<p className='text-secondary mt-2'>Share invoice within entity or organisation</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:grid md:grid-cols-12 border-collapse w-full'>
				<div className='col-span-5 flex p-8 flex-col justify-center border'>
					<Image
						src='/assets/treasurease/TEIcon1.svg'
						alt='categorisation'
						width={40}
						height={40}
					/>
					<h1 className='text-3xl mt-3 font-semibold'>Mini-Apps</h1>
					<p className='text-secondary mt-2'>Treasurease.xyz will expand its capabilities by supporting all Safe Mini Apps.</p>
				</div>
				<div className='col-span-7 flex flex-col items-center gap-4 border '>
					<div className='flex flex-col md:grid md:grid-cols-12 w-full h-full  gap-4'>
						{/* <div className='col-span-6 w-full h-full'>
							<div className=' relative w-full h-full min-h-[28rem] rounded-2xl'>
								<Image
									src='/assets/treasurease/TEMini1.svg'
									alt='categorisation'
									className='object-contain'
									fill
								/>
							</div>
							<div className='block md:hidden p-4 mt-4  rounded-2xl border'>
								<h1>Lorem Ipsum</h1>
								<p className='text-secondary mt-2'>Reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
							</div>
						</div> */}
						{/* <div className='col-span-6 w-full h-full'>
							<div className='relative w-full h-full min-h-[28rem] rounded-2xl'>
								<Image
									src='/assets/treasurease/TEMini2.svg'
									alt='categorisation'
									className='object-contain'
									fill
								/>
							</div>
							<div className='block md:hidden p-4 mt-4 rounded-2xl border'>
								<h1>Consequatur aut m</h1>
								<p className='text-secondary mt-2'>Reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
							</div>
						</div> */}
					</div>
					<Image
						src='/assets/treasurease/TESoon.svg'
						alt='categorisation'
						className='object-contain'
						width={550}
						height={520}
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
