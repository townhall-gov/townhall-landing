import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full px-24">
      <div className="w-full flex flex-col items-center relative rounded-3xl h-full">
        <Image
          src="/assets/townhallBanner.png"
          fill
          loading="lazy"
          alt="townhall"
        />
        <div className="w-full flex flex-col gap-4 justify-center items-center absolute bottom-0 bg-[#191E23] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-8 pb-24">
          <h1 className="relative font-semibold text-white text-5xl">
            TownHall:{" "}
            <span className="text-primary"> Gamified Social Products</span>
          </h1>
          <p className="text-lg font-light">
            We are focused on improving participation and governance in web3
            ecosystem
          </p>
        </div>
        <Button size="lg" className="fixed bottom-20 z-20">
          Launch App
        </Button>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h3>Integrated with</h3>
        <div className="flex gap-4">
            <Image src="/assets/snapshotFull.svg" width={120} height={60} alt="snapshot" />
            <Image src="/assets/discourse.svg" width={120} height={60} alt="snapshot" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
