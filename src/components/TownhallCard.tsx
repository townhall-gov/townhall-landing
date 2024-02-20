"use client"

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

interface TownhallCardProps {
  image: string;
  title: string;
  description: string;
}

const TownhallCard: React.FC<TownhallCardProps> = ({ image, title, description }) => {
//   const [showDesc, setShowDesc] = useState(false);
  const descControls = useAnimation();
  const titleControls = useAnimation();

  const handleHoverStart = () => {
    // setShowDesc(true);
    descControls.start({ translateY: -10, opacity: 1,  height: "auto", marginTop: "12px" });
    titleControls.start({ translateY: -10, fontSize: "30px" });
  };

  const handleHoverEnd = () => {
    // setShowDesc(false);
    descControls.start({ translateY: 0, opacity: 0,  height: "0px", marginTop: "0" });
    titleControls.start({ translateY: 0, fontSize: "34px" });
  };

  return (
    <motion.div
      className="p-12 w-full h-56 bg-[#ffffff18] rounded-3xl shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)]"
      whileHover={{ translateY: -8 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      transition={{ duration: 0.3 }}
    >
      <div className="items-center gap-3 inline-flex justify-center relative">
        <Image className=" relative object-cover" alt="Contacts" src={image} width={120} height={120} />
        <div className="flex-col items-start inline-flex justify-between relative">
          <motion.div
            className="relative w-fit [font-family:'Outfit-SemiBold',Helvetica] font-semibold leading-6 whitespace-nowrap"
            initial={{ translateY: 0, fontSize: "34px" }}
            animate={titleControls}
          >
            {title}
          </motion.div>
            <motion.p
              className="relative [font-family:'Poppins-Regular',Helvetica] font-light text-lg"
              initial={{ translateY: 0, opacity: 0, height: "0px", marginTop: "0"}}
              animate={descControls}
            >
              {description}
            </motion.p>
          
        </div>
      </div>
    </motion.div>
  );
};

export default TownhallCard;