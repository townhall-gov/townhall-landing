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
  const imageControls = useAnimation();

  const handleHoverStart = () => {
    descControls.start({ translateY: -110, opacity: 1,  height: "auto", marginTop: "8px" });
    titleControls.start({ translateY: -110, fontSize: "28px" });
    imageControls.start({ scale: 0.8, opacity: 0.5 });
  };

  const handleHoverEnd = () => {
    descControls.start({ translateY: 0, opacity: 0,  height: "0px", marginTop: "0" });
    titleControls.start({ translateY: 0, fontSize: "30px" });
    imageControls.start({ scale: 1, opacity:1 });
  };

  return (
    <motion.div
      className="p-4 py-8 w-full h-72 bg-[#ffffff18] rounded-3xl overflow-hidden shadow-[inset_-3.01px_3.01px_3.01px_#ffffff63,inset_2.01px_-2.01px_20px_#d6d6d62b] backdrop-blur-[74.43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(74.43px)_brightness(100%)]"
      whileHover={{ translateY: -8, scale: 1.11 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      transition={{ duration: 0.3 }}
    >
      <div className="items-center gap-3 inline-flex flex-col justify-center relative">
        <motion.div
         initial={{ scale: 1, opacity:1  }}
         animate={imageControls}
        >
        <Image className=" relative object-cover" alt="Contacts" src={image} width={150} height={150} />
        </motion.div>
        <div className="flex-col items-center inline-flex justify-between relative">
          <motion.div
            className="relative w-fit mx-8 [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-center leading-8 "
            initial={{ translateY: 0, fontSize: "30px" }}
            animate={titleControls}
          >
            {title}
          </motion.div>
            <motion.p
              className="relative [font-family:'Poppins-Regular',Helvetica] font-light text-center"
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