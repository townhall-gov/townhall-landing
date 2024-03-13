import Image from "next/image";
import React from "react";

const Elevate = () => {
  return (
    <div className="flex flex-col md:flex-row items-center [font-family:'Poppins-Regular',Helvetica] md:px-20 mt-24 border-t border-b w-full">
      <div className="inline-flex ">
        <div className="inline-flex flex-col items-start justify-center pl-0 pr-4 md:pr-16 ">
          <h4 className=" text-xl leading-8 whitespace-nowrap">
            Total Proposals
          </h4>
          <h1 className=" [font-family:'Outfit-Bold',Helvetica] font-bold text-3xl md:text-6xl leading-[80px] whitespace-nowrap">
            245
          </h1>
        </div>
        <div className="inline-flex flex-col items-start justify-center px-4 md:px-14 py-8 md:py-20  self-stretch border-l">
          <h4 className=" text-xl leading-8 whitespace-nowrap">Total Votes</h4>
          <h1 className="[font-family:'Outfit-Bold',Helvetica] font-bold text-3xl md:text-6xl leading-[80px] whitespace-nowrap">
            2500+
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center item-center md:items-start flex-wrap border-t md:border-l p-4 md:pl-14  flex-1 self-stretch grow">
        <p className="[font-family:'Outfit-SemiBold',Helvetica] text-center md:text-left font-semibold text-[#d9d9d9] text-2xl md:text-4xl tracking-[0.17px] leading-9">
          Elevate decision-making experience with Townhall Governance Platform
        </p>
        <div className="flex items-start pl-0 pr-5 py-0  self-stretch w-full">
          <p className=" flex-1 text-base md:text-xl text-center md:text-left">
            We provide the tools, you bring the ideas. Together, we build a{" "}
            <br />
            stronger, more inclusive Web3 community.
          </p>
        </div>
        <div className="flex text-lg font-semibold items-center gap-2 justify-center md:justify-start self-stretch w-full text-[#FF796A]">
          Partnered with{" "}
          <Image width={80} height={35} alt="privy" src="/assets/privy.svg" />
        </div>
      </div>
    </div>
  );
};

export default Elevate;
