import Image from "next/image";
import React from "react";

const Radar = () => {
  return (
    <section
      className="flex flex-col w-full items-center justify-center p-24 pb-0 h-screen bg-[#000b37]"
      
    >
      <div className="relative w-full h-full " style={{ filter: "drop-shadow(0 0 80px #0007a8)" }}>
        <Image src="/assets/radar.svg" fill className="object-contain" alt="radar" loading="lazy" />
      </div>
    </section>
  );
};

export default Radar;
