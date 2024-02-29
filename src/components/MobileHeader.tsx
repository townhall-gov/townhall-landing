import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { products } from "@/services/constants";
import { Button } from "./ui/button";

const MobileHeader = () => {
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  return (
    <div className="size-full h-screen absolute top-0  left-0 bg-[#191E23] ">
      {" "}
      <div className=" mx-0 flex flex-col justify-between items-start  border-t mt-14 gap-12">
        <nav className="flex flex-col w-full ">
          <motion.div className="border-b p-4 w-full cursor-pointer" variants={itemVariants}>
          <Link href="/" legacyBehavior passHref>
            <h1 className="text-white">HOME</h1>
            </Link>
          </motion.div>
          <motion.div className="border-b p-4 w-full cursor-pointer" variants={itemVariants}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>PRODUCTS</AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-4 p-2 w-60">
                    {products.map((item) => (
                      <li key={item.key}>
                        <Link
                          href={item.link}
                          className="p-2 flex gap-2 rounded-xl hover:bg-[#44474A]"
                        >
                          <div className="bg-[#25282b] w-30 p-2 rounded-xl mr-1">
                            <Image
                              src={item.logo}
                              alt="Logo"
                              width={35}
                              height={20}
                            />
                          </div>
                          <div className="flex-col items-start justify-center gap-[3px] flex-[0_0_auto] inline-flex relative">
                            <div className="items-center gap-[6px] flex-[0_0_auto] inline-flex relative">
                              <div className=" font-semibold text-white text-sm whitespace-nowrap">
                                {item.title}
                              </div>
                              <Image
                                src="/assets/arrow_right.svg"
                                alt="Logo"
                                width={16}
                                height={16}
                              />
                            </div>
                            <div className="w-fit  font-medium text-white text-xs  whitespace-nowrap">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          <motion.div className="border-b p-4 w-full cursor-pointer" variants={itemVariants}>
          <Link href="/infrastructure" legacyBehavior passHref>
            <h1 className="text-white">INFRASTRUCTURE</h1>
            </Link>
          </motion.div>
          <motion.div className="border-b p-4 w-full cursor-pointer" variants={itemVariants}>
          <Link href="/contact" legacyBehavior passHref>
            <h1 className="text-white">CONTACT</h1>
            </Link>
          </motion.div>
        </nav>
        <div className="flex flex-col justify-center w-full items-center gap-4">
          <motion.div
            variants={itemVariants}
            className=" transition-all p-4 w-full hover:border-b-4 hover:border-r-2 rounded-full hover:border-[#38A1FF]"
          >
            <Link href="/launch-app">
              <Button className="w-full" variant="outline">
                Book Demo
              </Button>
            </Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 "
          >
            <div className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full socialbg_dark">
              <Image
                src="/assets/xIcon.svg"
                width={20}
                height={20}
                alt="Discord"
              />
            </div>
            <div className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full socialbg_blue">
              <Image
                src="/assets/Discord.svg"
                width={24}
                height={24}
                alt="Discord"
              />
            </div>
            <div className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full socialbg_lightBlue">
              <Image
                src="/assets/telegram.svg"
                width={24}
                height={24}
                alt="Discord"
              />
            </div>
            <div className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full socialbg_dark">
              <Image
                src="/assets/GitHub.svg"
                width={28}
                height={28}
                alt="Discord"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
