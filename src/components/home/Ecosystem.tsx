"use client";

import Image from "next/image";
import React, { MouseEvent, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Button } from "../ui/button";

const Card = ({ cardName }: { cardName: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const cardRect = event.currentTarget.getBoundingClientRect();
    const blobSize = 80;

    x.set(
      Math.ceil(
        clamp(clientX - cardRect.left - 200, 0, cardRect.width - blobSize)
      )
    );
    y.set(
      Math.ceil(
        clamp(clientY - cardRect.top - 400, 0, cardRect.height - blobSize)
      )
    );
  };

  useEffect(() => {
    return () => {
      x.set(0);
      y.set(0);
    };
  }, [x, y]);

  return (
    <motion.div
      className="relative w-[300px] h-[280px] md:w-[350px] md:h-[300px] flex flex-col justify-center items-center bg-[#ffffff18] rounded-[26px] shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <Image
        className="z-10"
        alt="Frame"
        src={`/assets/${cardName}.svg`}
        width={100}
        height={100}
      />
      <div className="flex items-center z-10 gap-2 mt-4">
        <Image
          alt="Frame"
          src={`/assets/${cardName}-text.svg`}
          width={250}
          height={100}
        />
        <Image
          alt="Frame"
          src="/assets/arrow-sm-left.svg"
          width={40}
          height={40}
        />
      </div>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{
          scale: [1, 1.2, 0.5, 0.9, 1],
          borderRadius: ["100%", "70%", "50%", "66%", "90%"],
          width: ["320px", "200px", "250px", "280px", "320px"],
          height: ["320px", "250px", "270px", "150px", "320px"],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          times: [0, 0.2, 0.5, 0.8, 3],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          x: x,
          y: y,
        }}
        className={`absolute  w-80 h-80 bg-[#2F45C6] rounded-full transition-all ${
          isHovered ? "opacity-1" : "opacity-0"
        }`}
      />
    </motion.div>
  );
};

const Ecosystem = () => {
  return (
    <section className="md:mt-32 flex flex-col justify-center items-center gap-4">
      <div className="hidden lg:flex justify-start lg:justify-center gap-8 items-center">
        <Card cardName="townhall-white" />
        <Card cardName="bountybird" />
        <Card cardName="treasurease" />
      </div>
      <div className="flex flex-col lg:hidden  max-w-screen justify-start gap-8 items-center">
        <Card cardName="townhall-white" />
        <Card cardName="bountybird" />
        <Card cardName="Treasurease" />
      </div>
      <h1 className="text-3xl sm:text-6xl text-center font-semibold my-8 ">
        Our Growing Ecosystem
      </h1>

      <div className="relative w-full py-8 md:py-20 gap-8 flex justify-center items-center bg-[#ffffff18] rounded-[26px] shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)] overflow-hidden">
        <Image
          className="z-10"
          alt="Frame"
          src={`/assets/infra.svg`}
          width={65}
          height={65}
        />
        <h1 className="text-2xl md:text-5xl font-semibold ">Infrastructure</h1>
      </div>
    </section>
  );
};

export default Ecosystem;
