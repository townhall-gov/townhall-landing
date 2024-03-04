import Image from "next/image";
import React from "react";

const Kit = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center p-8 md:p-24">
      <h1 className="text-3xl md:text-5xl font-semibold md:m-12">TownHall Governance Kit</h1>
      <div className="flex flex-col md:grid md:grid-cols-3 justify-around gap-8 md:gap-32">
        <Card imgSrc="/assets/Kit1.svg" text="Highly Customisable" />
        <Card imgSrc="/assets/Kit2.svg" text="Buildable Features" />
        <Card imgSrc="/assets/Kit3.svg" text="Modular SDK" />
      </div>
    </section>
  );
};

const Card = ({ imgSrc, text }: { imgSrc: string; text: string }) => {
  return (
    <div className="inline-flex size-60 col-span-1 gap-4 flex-col items-center rounded-3xl bg-[#0c1a26] p-2 justify-center relative">  
        <Image className="absolute size-56" alt="Plant" src={imgSrc} width={44} height={44} />
      <div className="relative uppercase w-3/4 audiowide-regular font-semibold text-white text-center">
        {text}
      </div>
    </div>
  );
}; 

export default Kit;
