import Image from "next/image";
import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const LandingMain = () => {
  return (
    <section className="grid grid-rows md:grid-cols-12 h-screen justify-between items-center px-6 md:px-24 w-full">
      <div className="col-span-7 inline-flex flex-col items-start gap-12 relative">
        <div className="flex-col items-start justify-start gap-8 inline-flex ">
          <div className="flex-col items-start md:w-11/12 gap-3 inline-flex ">
            <p className="relative font-semibold text-white  text-2xl sm:text-4xl md:text-6xl ">
              Townhall: The All-in-One DAO Toolkit
            </p>
            <p className="relative self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-[#e2e2e2] text-sm md:text-xl md:leading-9">
              Effortlessly manage your decentralized collective with
              Townhall&apos;s unified platform for governance, treasury,
              community, and decision-making.
            </p>
          </div>
          <div className="inline-flex  items-center gap-4 relative">
            <Button className="audiowide-bold" size="lg">
              Launch App
            </Button>
            <Button size="lg" variant="secondary">
              Book Demo
            </Button>
          </div>
        </div>
        <div className="items-center gap-8 inline-flex ">
          <div className="items-start inline-flex divide-x-2 divide-borderLight">
            <div className="items-center  gap-1 sm:gap-3 pr-2 sm:pr-6 inline-flex">
              <div className="flex ">
                <Avatar>
                  <AvatarImage src="/assets/avatar.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="ml-[-8px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-col items-start  inline-flex ">
                <div className="relative w-fit font-bold text-white text-xl sm:text-3xl">
                  20+
                </div>
                <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-secondary text-xs">
                  Partners
                </div>
              </div>
            </div>
            <div className="flex-col items-start px-2 sm:px-6 inline-flex ">
              <div className="relative w-fit font-bold text-white text-xl sm:text-3xl">
                50+
              </div>
              <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-secondary text-xs">
                Proposals
              </div>
            </div>
            <div className="flex-col items-start px-2 sm:px-6  inline-flex ">
              <div className="relative w-fit font-bold text-white text-xl sm:text-3xl">
                10k+
              </div>
              <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-secondary text-xs">
                Votes
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-5 m-12 ">
        <Image
          className="object-contain"
          style={{ filter: "drop-shadow(-54px -20px 80px #2567a8)" }}
          src="/assets/crystal.gif"
          width="400"
          height="400"
          alt="crystal"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default LandingMain;
