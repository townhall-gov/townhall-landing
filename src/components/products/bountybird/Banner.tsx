import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col gap-8 justify-between items-center w-full mb-24 px-24">
      <div className="relative h-[70vh]  w-full ">
        <Image
          className="object-contain"
          src="/assets/bountybirdBanner3.png"
          alt="bountybird"
          fill
          loading="lazy"
        />
      </div>
      <Button className="fixed bottom-10 audiowide-bold z-10 text-white" size="lg" variant={"destructive"}>
        Launch App{" "}
      </Button> 
    </section>
  );
};

export default Banner;
