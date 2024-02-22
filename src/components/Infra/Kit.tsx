import Image from "next/image";
import React from "react";

const Kit = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center p-24">
      <h1 className="text-5xl font-semibold m-12">TownHall Governance Kit</h1>
      <div className="grid grid-cols-3 justify-evenly gap-24">
        <Card imgSrc="/assets/InfraKit1.svg" text="Highly Customisable" />
        <Card imgSrc="/assets/InfraKit1.svg" text="Buildable Features" />
        <Card imgSrc="/assets/InfraKit1.svg" text="Modular SDK" />
      </div>
    </section>
  );
};

const Card = ({ imgSrc, text }: { imgSrc: string; text: string }) => {
  return (
    <div className="inline-flex col-span-1 gap-4 flex-col items-center rounded-3xl bg-[#353D46] p-12 justify-center relative">
      <div className="p-8 rounded-2xl bg-[#0328ee]">
        <Image alt="Plant" src={imgSrc} width={30} height={30} />
      </div>
      <div className="relative uppercase [font-family:'Poppins-Regular',Helvetica] font-semibold text-white text-center">
        {text}
      </div>
    </div>
  );
};

export default Kit;
