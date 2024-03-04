"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";

const Snapshots = () => {
  const parallaxRef = useRef(null);
  return (
    <section className="flex flex-col gap-8 justify-between items-center  w-full p-8 md:p-24 ">
      <div className="flex flex-col items-center gap-4 mb-24">
        <h1 className="text-3xl md:text-6xl text-center font-semibold">
          Lorem Ipsum
        </h1>
        <p className="text-xl font-light text-center text-[#e2e2e2]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. 
        </p>
      </div>
      <div className="relative w-full h-full" ref={parallaxRef}>
        <div className="w-full h-[50vh] lg:h-[100vh] relative drop-shadow-[0_-100px_80px_#2E285650]">
          <Image
            src="/assets/snapshots/feed-main.svg"
            fill
            alt="Snapshots"
            loading="lazy"
          />
        </div>
        <ScrollParallax isAbsolutelyPositioned zIndex={2}>
        <div className=" absolute -left-4 lg:left-0 -bottom-12 lg:bottom-[12.5rem]   drop-shadow-[0_0_8px_#ffffff70] ">
          <Image
            src="/assets/snapshots/my-houses.svg"
            width={350}
            height={350}
            alt="Snapshots3"
            className="hidden lg:block"
            loading="lazy"
            
          />
          <Image
            src="/assets/snapshots/my-houses.svg"
            width={150}
            height={150}
            alt="Snapshots3"
            className="block lg:hidden"
            loading="lazy"
            
          />
        </div>
        </ScrollParallax>

        <ScrollParallax isAbsolutelyPositioned>
        <div className="absolute -right-4 lg:-right-8 -top-12  xl:flex  drop-shadow-[0_0_8px_#ffffff70]">
          <Image
            src="/assets/snapshots/trending-bounties.svg"
            width={400}
            height={400}
            alt="Snapshots2"
            className="hidden lg:block"
            loading="lazy"
          />
           <Image
            src="/assets/snapshots/trending-bounties.svg"
            width={150}
            height={150}
            alt="Snapshots3"
            className="block lg:hidden"
            loading="lazy"
            
          />
        </div>
        </ScrollParallax>
      </div>
    </section>
  );
};

export default Snapshots;
