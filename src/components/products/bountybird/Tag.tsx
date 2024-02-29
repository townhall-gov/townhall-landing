import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Tag = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen overflow-hidden p-8 pr-0 md:p-24 md:pr-0 ">
      <div className="flex flex-1 flex-col gap-8">
        <h1 className="text-3xl md:text-6xl font-semibold">
          Tag , Invite and Hunt Bounties
        </h1>
        <p className="text-lg font-light md:max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
        <div className="items-center gap-4 inline-flex flex-col mb-8 md:flex-row relative">
          <Button className="audiowide-bold">
            <Image
              className="mr-2"
              src="/assets/lens.svg"
              alt="hey"
              width={20}
              height={20}
            />{" "}
            Create Bounty on Hey
          </Button>
          <Button variant="secondary">
            <Image
              className="mr-2"
              src="/assets/xIcon.svg"
              alt="hey"
              width={16}
              height={16}
            />{" "}
            Create Bounty on Twitter
          </Button>
        </div>
      </div>
      <Image
        className="flex-1 size-[400px]"
        src="/assets/bountybirdTag.svg"
        alt="tag"
        width={500}
        height={500}
      />
    </section>
  );
};

export default Tag;
