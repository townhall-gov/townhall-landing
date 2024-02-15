import Header from "@/components/Header";
import Ecosystem from "@/components/home/Ecosystem";
import LandingMain from "@/components/home/LandingMain";
import Roadmap from "@/components/home/Roadmap";
import Solution from "@/components/home/Solution";
import Testimony from "@/components/home/Testimony";
import TrustedBy from "@/components/home/TrustedBy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <Header/>
       <LandingMain/>
       <TrustedBy />
       <Solution/>
       <Ecosystem/>
       <Roadmap/>
       <Testimony/>
    </main>
  );
}
