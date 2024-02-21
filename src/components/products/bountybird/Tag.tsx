import Image from "next/image";
import React from "react";

const Tag = () => {
  return (
    <section className="flex justify-between items-center w-full max-w-screen overflow-hidden p-24 pr-0">
      <div className="flex flex-1 flex-col gap-8">
        <h1 className="text-6xl font-semibold">Tag , Invite and Hunt Bounties</h1>
        <p className="text-lg font-light max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
      </div>
      <Image className="flex-1 size-[400px]" src="/assets/bountybirdTag.svg" alt="tag" width={500} height={500} />
    </section>
  );
};

export default Tag;
