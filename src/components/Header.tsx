"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"


const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const products = [
		{
			key: 1,
			title: "Townhall",
			link: "/products/townhall",
			logo: "/logo.svg",
			desc: "Lorem ipsum dolor sit",
		},
		{
			key: 2,
			title: "BountyBird",
			link: "/products/bountybird",
			logo: "/assets/bountybird.svg",
			desc: "Lorem ipsum dolor sit",
		},
    {
			key: 3,
			title: "TreasurEase",
			link: "/docs",
			logo: "/assets/treasurEase.svg",
			desc: "Lorem ipsum dolor sit",
		}
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 ${
				isScrolled ? "bg-transparent backdrop-blur-2xl" : "bg-transparent"
			}`}
		>
			<div className='container mx-auto flex justify-between items-center p-4'>
				<div>
					<Link href='/'>
						<Image src='/logo_full.svg' alt='Your Logo' width={120} height={40} />
					</Link>
				</div>

				<nav className='flex space-x-4'>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href='/' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										HOME
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>PRODUCTS</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='flex flex-col gap-4 p-2 w-60'>
									
                    {products.map((item) => (
                      <li key={item.key}>
                        	<Link href={item.link} className='p-2 flex gap-2 rounded-xl hover:bg-[#44474A]'>
												<div className='bg-[#25282b] w-30 p-2 rounded-xl mr-1'>
													<Image src={item.logo} alt='Logo' width={35} height={20} />
												</div>
												<div className='flex-col items-start justify-center gap-[3px] flex-[0_0_auto] inline-flex relative'>
													<div className='items-center gap-[6px] flex-[0_0_auto] inline-flex relative'>
														<div className=' font-semibold text-white text-sm whitespace-nowrap'>
															{item.title}
														</div>
														<Image
															src='/assets/arrow_right.svg'
															alt='Logo'
															width={16}
															height={16}
														/>
													</div>
													<div className='w-fit  font-medium text-white text-xs  whitespace-nowrap'>
														{item.desc}
													</div>
												</div>
											</Link>
                      </li>
                    ))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/infrastructure' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										INFRASTRUCTURE
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/contact' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										CONTACT
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</nav>

				<Link href='/launch-app'>
					<div className='m-[-8px] transition-all hover:border-b-4 hover:border-r-2 rounded-full hover:border-[#38A1FF]'>
            <Button className="m-0.5" variant='outline'>Book Demo</Button>
					</div>
				</Link>
			</div>
		</header>
	);
};

export default Header;
