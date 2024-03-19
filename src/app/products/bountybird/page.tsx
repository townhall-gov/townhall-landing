import Footer from '@/components/Footer';
import GetStarted from '@/components/GetStarted';
import Header from '@/components/Header';
import Banner from '@/components/products/bountybird/Banner';
import Compete from '@/components/products/bountybird/Compete';
import Tag from '@/components/products/bountybird/Tag';
import React from 'react';

const bountybird = () => {
	return (
		<main className="flex min-h-screen flex-col items-center w-full justify-between pt-16 md:pt-24">
			<Header />
			<Banner />
			<Tag />
			<Compete />
			<GetStarted />
			<Footer />
		</main>
	);
};

export default bountybird;
