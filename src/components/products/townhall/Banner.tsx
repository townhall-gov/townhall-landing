import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-24 ">
      <div className="w-full flex flex-col items-center relative rounded-3xl h-[40vh] md:h-[80vh]">
        <Image
          src="/assets/townhallBanner.png"
          fill
          loading="lazy"
          alt="townhall"
        />
        <div className="w-full flex flex-col gap-4 justify-center items-center absolute bottom-0 bg-[#191E23] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-8 md:pb-24">
          <h1 className="relative font-semibold text-white text-center  text-2xl md:text-3xl lg:text-5xl">
            TownHall:{" "}
            <span className="text-primary">Gamified Social Products</span>
          </h1>
          <p className="hidden md:block text-lg font-light">
            We are focused on improving participation and governance in web3
            ecosystem
          </p>
        </div>
        <Button
          size="lg"
          className="hidden md:block fixed bottom-20 audiowide-bold z-20"
        >
          Launch App
        </Button>
      </div>
      <div className="flex flex-col gap-4 mt-4 items-center md:hidden">
        <p className="relative  text-lg text-center font-light">
          We are focused on improving participation and governance in web3
          ecosystem
        </p>
        <Button size="lg" className="relative audiowide-bold z-20">
          Launch App
        </Button>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h3>Integrated with</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Image
            src="/assets/snapshotFull.svg"
            width={120}
            height={60}
            alt="snapshot"
          />
          <Image
            src="/assets/discourse.svg"
            width={120}
            height={60}
            alt="snapshot"
          />
          <Image
            src="/assets/safe.svg"
            width={120}
            height={60}
            alt="snapshot"
          />
          <Image
            src="/assets/tally.svg"
            width={120}
            height={60}
            alt="snapshot"
          />
          <Image
            src="/assets/karma.svg"
            width={120}
            height={60}
            alt="snapshot"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
