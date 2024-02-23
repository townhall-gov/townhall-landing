import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { PersonIcon } from "@radix-ui/react-icons";

const GetStarted = () => {
  return (
    <section className="w-full ">

    <div className="bg-[url('/assets/infraStartedBg.svg')]  overflow-hidden bg-cover  bg-center bg-no-repeat w-full mt-24 p-12 flex flex-col  items-center">
      <div className="flex flex-col items-center gap-2 mt-12">
        <p className="text-xl font-semibold">FOR DEVS</p>
        <h1 className="text-5xl font-semibold">Get Started</h1>
      </div>
      <div className="grid  grid-cols-3 items-baseline gap-24 mt-24">
        <div className="col-span-1 relative w-[250px] text-center gap-4 flex flex-col  items-center justify-between">
          <div className="bg-primary size-10 rounded-full p-2 flex items-center justify-center">
            <h1 className="[font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[28.3px] tracking-[0] leading-[69.7px] whitespace-nowrap">
              1
            </h1>
          </div>
          <h1 className="text-xl font-semibold">Register</h1>
          <p className="text-lg text-[#ffffffb2]">
            Register yourself as a Payfast application user
          </p>
          <span className="absolute -right-32 top-2 text-[#ffffffb2]">
            -------------------------
          </span>
        </div>
        <div className="col-span-1 relative w-[250px] text-center gap-4  flex flex-col items-center justify-between">
          <div className="bg-primary size-10 rounded-full p-2 flex items-center justify-center">
            <h1 className="[font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[28.3px] tracking-[0] leading-[69.7px] whitespace-nowrap">
              2
            </h1>
          </div>
          <h1 className="text-xl font-semibold">Add Lorem Ipsum</h1>
          <p className="text-lg text-[#ffffffb2]">
            Create a new card for you to use anytime and anywhere
          </p>
          <span className="absolute -right-32 top-2 text-[#ffffffb2]">
            -------------------------
          </span>
        </div>
        <div className="col-span-1 w-[250px] text-center gap-4  flex flex-col items-center justify-between">
          <div className="bg-primary size-10 rounded-full p-2 flex items-center justify-center">
            <h1 className="[font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[28.3px] tracking-[0] leading-[69.7px] whitespace-nowrap">
              3
            </h1>
          </div>
          <h1 className="text-xl font-semibold">Success</h1>
          <p className="text-lg text-[#ffffffb2]">
            You can use payfast in peace and all its facilities
          </p>
        </div>
      </div>
      <div className="mt-24 flex items-center gap-8">
        <Button size="lg">
          <Image
            className="mr-2"
            alt="Frame"
            src="/assets/filePixel.svg"
            width={30}
            height={30}
          />
          View Guide{" "}
          <Image
            className="ml-2"
            alt="Frame"
            src="/assets/arrowTopRightBlk.svg"
            width={20}
            height={20}
          />
        </Button>
        <Button
          size="lg"
          variant={"secondary"}
          className="bg-[#232421] text-white"
        >
          {" "}
          <Image
            className="mr-2"
            alt="Frame"
            src="/assets/githubPixel.svg"
            width={30}
            height={30}
          />
          View Gitbook{" "}
          <Image
            className="ml-2"
            alt="Frame"
            src="/assets/arrowTopRightWhite.svg"
            width={20}
            height={20}
          />
        </Button>
      </div>
    </div>
      <div className="flex justify-center items-center gap-4 py-24 bg-[#2F45C6]">
        <div className="flex items-center relative">
          <PersonIcon className="h-5 w-5 absolute left-6 -translate-x-1/2" />

          <input
            type="email"
            className="border pl-10 h-12 w-[400px] border-white focus:border-transparent focus:ring-0 text-[#F2F2F2] placeholder:text-[#F2F2F2] bg-transparent rounded-full"
            placeholder="Enter your email"
          />
        </div>
        <Button className="audiowide-bold" size="lg">
          Book Demo
        </Button>
      </div>
    </section>

  );
};

export default GetStarted;