"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { oneStopData } from '@/services/constants';



const Solution: React.FC = () => {
  return (
      <div className="grid relative grid-cols-3 px-24 bg-transparent ">
      <div className="col-span-1 border-r">
        <div className="p-4 sticky top-0 ">
          <h1 className="text-6xl flex flex-col justify-center h-screen font-semibold mb-4">
           One Stop Solution for Governance
          </h1>
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-between p-4 my-24 ml-6">
        {oneStopData.map((item, index) => (
          <div key={index} className=" flex justify-between w-full h-screen my-8 items-center snap-center">
            <div className="flex-1 mr-24">
              <h2 className="text-4xl text-destructive font-semibold mb-2">{item.title}</h2>
              <p className="font-lg">{item.description}</p>
            </div>
            <div className="flex-1 relative left-12">
              <Image
                src={item.image}
                alt={item.title}
                className="object-contain"
                loading='lazy'
                width={280}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
      <span className='absolute w-full overflow-hidden border-b  bottom-0'/>
    </div>
  );
};

export default Solution;
