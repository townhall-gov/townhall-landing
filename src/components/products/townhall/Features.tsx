import TownhallCard from "@/components/TownhallCard";
import React from "react";

const Features = () => {
  return (
    <>
      <div className="grid w-full grid-cols-9 gap-8 px-24 mt-24">
        <div className="col-span-5 w-full ">
          <TownhallCard
            image="/assets/THfeature-1.svg"
            title="Delegation"
            description="Delegate voting power and foster collaboration, allowing community members to represent others and make decisions collectively."
          />
        </div>
        <div className="col-span-4 w-full">
          <TownhallCard
            image="/assets/THfeature-2.svg"
            title="Sentiment Commenting"
            description="Gauge community sentiment and enablemore informed and insightful discussions."
          />
        </div>
      </div>
      <div className="grid grid-cols-9 w-full gap-8 px-24 mt-8">
        <div className="col-span-4 w-full ">
          <TownhallCard
            image="/assets/THfeature-3.svg"
            title="Enable Voting"
            description="Allowing users to express opinions while making decisions like voting by enhancing transparency."
          />
        </div>
        <div className="col-span-5 w-full">
          <TownhallCard
            image="/assets/THfeature-4.svg"
            title="Engage Community"
            description="Facilitate meaningful conversations and engage your community through integrated discussion boards, creating a hub for collaborative decision-making."
          />
        </div>
      </div>
    </>
  );
};

export default Features;
