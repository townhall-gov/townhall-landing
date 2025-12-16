'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

import { Button } from '@/components/ui/button';
import './style.css';
import { products } from '@/services/constants';
import MobileHeader from './MobileHeader';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [open, cycleOpen] = useCycle(false, true);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 0);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const sideVariants = {
		closed: {
			transition: {
				staggerChildren: 0.2,
				staggerDirection: -1
			}
		},
		open: {
			transition: {
				staggerChildren: 0.2,
				staggerDirection: 1
			}
		}
	};

	return (
		<>
			<header className={`fixed left-0 right-0 top-0 z-50 hidden md:block ${isScrolled ? 'bg-transparent backdrop-blur-2xl' : 'bg-transparent'}`}>
				<div className='flex items-center justify-between p-4 px-24'>
					<div className='flex items-center'>
						<Link href='/'>
							<Image
								src='/logo_full.svg'
								alt='Your Logo'
								width={150}
								height={40}
							/>
						</Link>
					</div>

					<nav className='flex space-x-4'>
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<Link
										href='/'
										legacyBehavior
										passHref
									>
										<NavigationMenuLink className={`${pathname === '/' && 'text-primary'} ${navigationMenuTriggerStyle()}`}>HOME</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger className={pathname === '/products/bountybird' || pathname === '/products/townhall' ? 'text-primary' : ''}>PRODUCTS</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="flex w-72 flex-col gap-4 p-2 [font-family:'Poppins-SemiBold',Helvetica]">
											{products.map((item) => (
												<li key={item.key}>
													<Link
														href={item.link}
														className='flex gap-2 rounded-xl p-2 hover:bg-[#44474A]'
													>
														<div className='w-30 mr-1 rounded-xl bg-[#25282b] p-2'>
															<Image
																src={item.logo}
																alt='Logo'
																width={35}
																height={20}
															/>
														</div>
														<div className='relative inline-flex flex-[0_0_auto] flex-col items-start justify-center gap-[3px]'>
															<div className='relative inline-flex flex-[0_0_auto] items-center gap-[6px]'>
																<div className='whitespace-nowrap text-base font-semibold text-white'>{item.title}</div>
																{item.coming_soon ? (
																	<span className='rounded-full bg-destructive px-1.5 text-xs'>Coming Soon</span>
																) : (
																	<Image
																		src='/assets/arrow_right.svg'
																		alt='Logo'
																		width={16}
																		height={16}
																	/>
																)}
															</div>
															{/* <div className="w-fit  font-medium text-white text-xs  whitespace-nowrap">
																{item.desc}
															</div> */}
														</div>
													</Link>
												</li>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link
										href='/infrastructure'
										legacyBehavior
										passHref
									>
										<NavigationMenuLink className={`${pathname === '/infrastructure' && 'text-primary'} ${navigationMenuTriggerStyle()}`}>INFRASTRUCTURE</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link
										href='/contact'
										legacyBehavior
										passHref
									>
										<NavigationMenuLink className={`${pathname === '/contact' && 'text-primary'} ${navigationMenuTriggerStyle()}`}>CONTACT</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</nav>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<Link
								href='https://twitter.com/townhallgov'
								target='_blank'
								rel='noreferrer'
							>
								<div className='socialbg_dark flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full'>
									<Image
										src='/assets/xIcon.svg'
										width={20}
										height={20}
										alt='Discord'
									/>
								</div>
							</Link>
							<Link
								href='https://discord.gg/cp35EvU48b'
								target='_blank'
								rel='noreferrer'
							>
								<div className='socialbg_blue flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full'>
									<Image
										src='/assets/Discord.svg'
										width={24}
										height={24}
										alt='Discord'
									/>
								</div>
							</Link>
							<Link
								href='https://t.me/townhallgov'
								target='_blank'
								rel='noreferrer'
							>
								<div className='socialbg_lightBlue flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full'>
									<Image
										src='/assets/telegram.svg'
										width={24}
										height={24}
										alt='telegram'
									/>
								</div>
							</Link>
							{/* <div className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full socialbg_dark">
								<Image
									src="/assets/GitHub.svg"
									width={28}
									height={28}
									alt="Discord"
								/>
							</div> */}
						</div>
						<Link href='https://calendly.com/bhavyabatra/30min'>
							<div className='-m-[12px] ml-3 rounded-full transition-all hover:border-b-2 hover:border-r-2 hover:border-[#38A1FF]'>
								<Button
									className='m-0.5'
									variant='outline'
								>
									Book Demo
								</Button>
							</div>
						</Link>
					</div>
				</div>
			</header>
			{/* Mobile Header */}
			<header
				className={`fixed left-0 right-0 top-0 z-50 flex items-start justify-between border-b p-4 md:hidden ${isScrolled ? 'bg-transparent backdrop-blur-2xl' : 'bg-transparent'}`}
			>
				{/* {!open && ( */}
				<div className={`z-20 flex min-w-full items-center justify-between`}>
					<Link href='/'>
						<Image
							src='/logo_full.svg'
							alt='Your Logo'
							width={120}
							height={40}
						/>
					</Link>
					{/* <button onClick={() => cycleOpen()}>
              {open ? "Close" : "Open"}
            </button> */}
					<button
						onClick={() => cycleOpen()}
						className='flex flex-col items-center justify-center'
					>
						<span className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${open ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}`}></span>
						<span className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${open ? 'opacity-0' : 'opacity-100'}`}></span>
						<span className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${open ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}`}></span>
					</button>
				</div>
				{/* )} */}
				<AnimatePresence>
					{open && (
						<motion.div
							className='size-full'
							initial={{ width: 0 }}
							animate={{
								width: '100%'
							}}
							exit={{
								width: 0,
								transition: { delay: 0.7, duration: 0.3 }
							}}
						>
							<motion.div
								className='size-full'
								initial='closed'
								animate='open'
								exit='closed'
								variants={sideVariants}
							>
								<MobileHeader />
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		</>
	);
};

export default Header;
