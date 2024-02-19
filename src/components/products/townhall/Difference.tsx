import Image from "next/image";
import React from "react";

const Difference = () => {
  return (
    <section className="min-h-full relative w-full m-24 mt-48">
      <div className="min-h-[150vh] flex relative flex-col justify-center items-center bg-gradient-to-r from-[#1c1e1f] via-[#305561] to-transparent blur-[25px] backdrop-blur-[23px] w-full h-full">
      </div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full">

        <h1 className="text-8xl text-center">
          What makes us <br />
          <span className="text-primary">different? </span>
        </h1>
        <Image className="motion-safe:animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/assets/bubble.svg" width={500} height={500} alt="townhall" />
    </div>
       <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex items-baseline w-full justify-evenly gap-8">
        <Card imgSrc="/assets/diff1.svg" text="Gamified User friendly Interace"/>
        <Card imgSrc="/assets/diff2.svg" text="Easy Onboarding"/>
        <Card imgSrc="/assets/diff3.svg" text="Modular Infrastructure: Customise the platform to your needs"/>

       </div>
    </section>
  );
};


const Card = ({ imgSrc, text }: { imgSrc: string; text: string }): JSX.Element => {
    return (
      <div className="inline-flex flex-col items-center relative">
          <Image alt="Plant" src={imgSrc} width={200} height={200} />
        <div className="relative w-[250px] [font-family:'Poppins-Regular',Helvetica] font-light text-white text-2xl text-center">
          {text}
        </div>
      </div>
    );
  };

export default Difference;
