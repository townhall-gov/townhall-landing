import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Customize = () => {
  return (
    <section className="flex flex-col md:flex-row w-full items-center justify-center gap-8 p-4 md:p-24 mt-8 md:mt-24">
      <div className="w-full md:w-[400px] h-[300px] bg-[#353D46] rounded-3xl md:flex-1" />
      <div className="md:flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl md:text-5xl font-semibold ">How to Customize</h1>
          <div className="flex items-center justify-center p-2 rounded-lg bg-[#696B7DB2]">
            <ArrowTopRightIcon className="h-5 w-5" />
          </div>
        </div>
        <p className="font-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
      </div>
    </section>
  );
};

export default Customize;
