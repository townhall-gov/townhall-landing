import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col gap-4 md:gap-8 justify-between items-center w-full mb-8 md:mb-24 px-4 md:px-8 lg:px-24">
      <div className="relative h-[20vh] sm:h-[40vh] lg:h-[70vh]  w-full ">
        <Image
          className="object-contain"
          src="/assets/bountybirdBanner3.png"
          alt="bountybird"
          fill
          loading="lazy"
        />
      </div>
      <Button className="md:fixed bottom-10 audiowide-bold z-10 text-white" size="lg" variant={"destructive"}>
        Launch App{" "}
      </Button> 
    </section>
  );
};

export default Banner;
