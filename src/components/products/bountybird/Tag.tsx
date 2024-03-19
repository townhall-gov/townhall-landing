import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Tag = () => {
	return (
		<section className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen overflow-hidden p-8 pr-0 md:p-24 md:pr-0 ">
			<div className="flex flex-1 flex-col gap-8">
				<h1 className="text-3xl md:text-6xl font-semibold">
					Post , Share and Hunt Bounties
				</h1>
				<p className="text-lg font-light md:max-w-[600px]">
					Create bounties on Twitter, Hey, and more with ease! Just
					tag{' '}
					<span className="text-destructive font-semibold">
						@TheBountyBird
					</span>{' '}
					and use #create to post a bounty.
				</p>
				<div className="items-center md:items-start gap-4 inline-flex flex-col mb-8 relative ">
					<Link
						href="https://hey.xyz/"
						target="_blank"
						rel="noreferrer"
						className="w-3/4"
					>
						<Button
							variant="secondary"
							className="audiowide-bold border-[#FF4869] text-[#FF4869] w-full"
							size="lg"
						>
							<Image
								className="mr-2"
								src="/assets/hey.svg"
								alt="hey"
								width={20}
								height={20}
							/>{' '}
							Create Bounty on Hey
						</Button>
					</Link>
					<Link
						href="https://hey.xyz/"
						target="_blank"
						rel="noreferrer"
						className="w-3/4"
					>
						<Button
							variant="secondary"
							className="audiowide-bold border-[#975DFF] text-[#975DFF] w-full"
							size="lg"
						>
							<Image
								className="mr-2"
								src="/assets/farcaster.svg"
								alt="hey"
								width={20}
								height={20}
							/>{' '}
							Create Bounty on Farcaster
						</Button>
					</Link>
					<Link
						href="https://twitter.com"
						target="_blank"
						rel="noreferrer"
						className="w-3/4"
					>
						<Button
							variant="secondary"
							className="w-full"
							size="lg"
						>
							<Image
								className="mr-2"
								src="/assets/xIcon.svg"
								alt="hey"
								width={16}
								height={16}
							/>{' '}
							Create Bounty on Twitter
						</Button>
					</Link>
				</div>
			</div>
			<Image
				className="flex-1 relative -right-24 size-[500px] object-contain"
				src="/assets/BountyBirdSS.png"
				alt="tag"
				width={300}
				height={500}
			/>
		</section>
	);
};

export default Tag;
