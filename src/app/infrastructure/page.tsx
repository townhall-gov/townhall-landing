import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import GetStarted from '@/components/GetStarted';
import Header from '@/components/Header';
import Customize from '@/components/Infra/Customize';
import GetInfraStarted from '@/components/Infra/GetStarted';
import Kit from '@/components/Infra/Kit';
import Main from '@/components/Infra/Main';
import Features from '@/components/Infra/Features';
import { InfraFaq } from '@/services/constants';
import React from 'react';
import ComingSoon from '@/components/ComingSoon';

const infrastructure = () => {
	return (
		<main className="flex min-h-screen flex-col w-full items-center overflow-hidden justify-between">
			<Header />
			<Main />
			<Kit />
			<div className="w-screen flex flex-col items-center justify-center relative -bottom-8">
				<Features />
				{/* <Customize /> */}
				{/* <GetInfraStarted /> */}
				<ComingSoon />
			</div>
			<div className="bg-[#2F45C6] relative pb-6  w-full">
				{/* <FAQ faqData={InfraFaq} type="Infra" /> */}
				<GetStarted />
			</div>
			<Footer />
		</main>
	);
};

export default infrastructure;
