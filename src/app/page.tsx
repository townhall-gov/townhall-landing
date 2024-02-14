import Header from "@/components/Header";
import LandingMain from "@/components/home/LandingMain";
import Solution from "@/components/home/Solution";
import TrustedBy from "@/components/home/TrustedBy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
       <LandingMain/>
       <TrustedBy />
       <Solution/>
    </main>
  );
}
