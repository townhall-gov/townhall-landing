"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  {
    title: 'On-Chain and Off-Chain Voting',
    description: 'Empower your community with secure on-chain and off-chain voting mechanisms, ensuring the integrity of every decision. Choose from 15+ Strategies available or create a custom one.',
    image: '/assets/solution4.svg',
  },
  {
    title: 'Integrate with Snapshot and Discourse',
    description: 'Seamlessly integrate with Snapshot for existing proposals and Discourse to index discussions, expanding your governance capabilities without losing your data.',
    image: '/assets/solution3.svg',
  },
  {
    title: 'Create and Manage Bounties',
    description: 'Incentivize contributions and reward community members for their efforts by efficiently creating and managing bounties.',
    image: '/assets/solution2.svg',
  },
  {
    title: 'Advanced Treasury Management',
    description: 'Track and optimize your treasury ensuring responsible allocation and growth of your community&apos;s funds. Maximise the value and sustainability of your ecosystem through automated reports and custom notifications.',
    image: '/assets/solution1.svg',
  },
  
];

const Solution: React.FC = () => {
  return (
      <div className="grid relative py-12 grid-cols-3 px-24 bg-transparent">
      <div className="col-span-1 py-12 border-r">
        <div className="p-4 sticky top-0 ">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl flex flex-col justify-center h-screen font-semibold mb-4"
          >
           One Stop Solution for Governance
          </motion.h1>
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-between p-4 ml-6 h-[300vh]">
        {items.map((item, index) => (
          <div key={index} className="mb-8 flex justify-between w-full h-2/4 my-8 items-center">
            <div className="flex-1 mr-24">
              <h2 className="text-2xl text-destructive font-semibold mb-2">{item.title}</h2>
              <p className="font-light mb-4">{item.description}</p>
            </div>
            <div className="flex-1">
              <Image
                src={item.image}
                alt={item.title}
                className="object-contain"
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
      <span className='absolute w-full overflow-hidden border-b  bottom-12'/>
    </div>
  );
};

export default Solution;
