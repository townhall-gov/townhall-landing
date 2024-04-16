import Footer from '@/components/Footer';
import GetStarted from '@/components/GetStarted';
import Header from '@/components/Header';
import Banner from '@/components/products/treasurease/Banner';
import ComingSoon from '@/components/products/treasurease/ComingSoon';
import Features from '@/components/products/treasurease/Features';
import Networks from '@/components/products/treasurease/Networks';
import Video from '@/components/products/treasurease/Video';
import React from 'react';

const treasurease = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Header />
			<Banner />
			<Video />
			<Features />
			<Networks />
			<ComingSoon />
			<GetStarted />
			<Footer />
		</main>
	);
};

export default treasurease;
