import Image from "next/image";
import React from "react";

const Kit = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center p-24">
      <h1 className="text-5xl font-semibold m-12">TownHall Governance Kit</h1>
      <div className="grid grid-cols-3 justify-around gap-32">
        <Card imgSrc="/assets/Kit1.svg" text="Highly Customisable" />
        <Card imgSrc="/assets/Kit2.svg" text="Buildable Features" />
        <Card imgSrc="/assets/Kit3.svg" text="Modular SDK" />
      </div>
    </section>
  );
};

const Card = ({ imgSrc, text }: { imgSrc: string; text: string }) => {
  return (
    <div className="inline-flex size-60 col-span-1 gap-4 flex-col items-center rounded-3xl bg-[#102a4a] p-2 justify-center relative">  
        <Image className="absolute size-56" alt="Plant" src={imgSrc} width={44} height={44} />
      <div className="relative uppercase [font-family:'Poppins-Regular',Helvetica] font-semibold text-white text-center">
        {text}
      </div>
    </div>
  );
}; 

export default Kit;
