"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import "./style.css";
import { products } from "@/services/constants";
import MobileHeader from "./MobileHeader";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, cycleOpen] = useCycle(false, true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "bg-transparent backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <div className=" flex justify-between items-center p-4 px-24">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo_full.svg"
                alt="Your Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>

          <nav className="flex space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      HOME
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>PRODUCTS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col gap-4 p-2 w-72 [font-family:'Poppins-SemiBold',Helvetica] ">
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
                                {item.coming_soon ? (
                                  <span className="rounded-full text-xs bg-destructive px-1.5">
                                    Coming Soon
                                  </span>
                                ) : (
                                  <Image
                                    src="/assets/arrow_right.svg"
                                    alt="Logo"
                                    width={16}
                                    height={16}
                                  />
                                )}
                              </div>
                              <div className="w-fit  font-medium text-white text-xs  whitespace-nowrap">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/infrastructure" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      INFRASTRUCTURE
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      CONTACT
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 ">
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
            </div>
            <Link href="/launch-app">
              <div className="m-[-8px] transition-all hover:border-b-4 hover:border-r-2 rounded-full ml-3 hover:border-[#38A1FF]">
                <Button className="m-0.5" variant="outline">
                  Book Demo
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </header>
      {/* Mobile Header */}
      <header
        className={`flex md:hidden items-start border-b justify-between fixed top-0 left-0 p-4  right-0 z-50 ${
          isScrolled ? "bg-transparent backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        {/* {!open && ( */}
        <div className={`flex min-w-full justify-between  items-center z-20`}>
          <Link href="/">
            <Image
              src="/logo_full.svg"
              alt="Your Logo"
              width={120}
              height={40}
            />
          </Link>
          {/* <button onClick={() => cycleOpen()}>
              {open ? "Close" : "Open"}
            </button> */}
          <button
            onClick={() => cycleOpen()}
            className="flex flex-col justify-center items-center"
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
            ></span>
          </button>
        </div>
        {/* )} */}
        <AnimatePresence>
          {open && (
            <motion.aside
              className="size-full "
              initial={{ width: 0 }}
              animate={{
                width: "100%",
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <motion.div
                className="size-full"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                <MobileHeader />
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
