import React from "react";

const Elevate = () => {
  return (
    <div className="flex items-center [font-family:'Poppins-Regular',Helvetica] px-20 mt-24 border-t border-b w-full">
      <div className="inline-flex flex-col items-start justify-center pl-0 pr-16 ">
        <h4 className=" text-xl leading-[32px] whitespace-nowrap">
          Total Proposals
        </h4>
        <h1 className=" [font-family:'Outfit-Bold',Helvetica] font-bold text-6xl leading-[80px] whitespace-nowrap">
          245
        </h1>
      </div>
      <div className="inline-flex flex-col items-start justify-center px-14 py-20  self-stretch border-l">
        <h4 className=" text-xl leading-[32px] whitespace-nowrap">
          Total Votes
        </h4>
        <h1 className="[font-family:'Outfit-Bold',Helvetica] font-bold text-6xl leading-[80px] whitespace-nowrap">
          2500+
        </h1>
      </div>
      <div className="flex flex-col gap-4 justify-center items-start flex-wrap border-l pl-14  flex-1 self-stretch grow">
        <p className="[font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[34px] tracking-[0.17px] leading-[38px]">
          Elevate decision-making experience with Townhall
        </p>
        <div className="flex items-start pl-0 pr-5 py-0  self-stretch w-full">
          <p className=" flex-1 text-xl">
            We provide the tools, you bring the ideas. Together, we build a <br/>
            stronger, more inclusive Web3 community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
