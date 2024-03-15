import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Ecosystem from '@/components/home/Ecosystem';
import FAQ from '@/components/FAQ';
import LandingMain from '@/components/home/landingMain';
import Roadmap from '@/components/home/Roadmap';
import Solution from '@/components/home/Solution';
import Testimony from '@/components/home/Testimony';
import TrustedBy from '@/components/home/TrustedBy';
import { homeFaq } from '@/services/constants';
import GetStarted from '@/components/GetStarted';
import RoadmapMb from '@/components/home/RoadmapMb';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Header />
			<LandingMain />
			<TrustedBy />
			<Solution />
			<Ecosystem />
			<Roadmap />
			<RoadmapMb />
			{/* <Testimony /> */}
			<FAQ faqData={homeFaq} type="home" />
			<GetStarted />
			<Footer />
		</main>
	);
}
