import Header from "@/components/Header";
import LandingMain from "@/components/home/landingMain";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen h-[200vh] flex-col items-center justify-between p-24">
      <Header/>
       <LandingMain/>
    </main>
  );
}
