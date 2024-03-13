import TownhallCard from "@/components/TownhallCard";
import React from "react";

const Features = () => {
  return (
    <section className="w-full  px-8 md:px-24 mt-48">
      <h1 className="text-6xl w-full text-left font-semibold mb-12">
        Townhall Features
      </h1>
      <div className="flex flex-wrap flex-col lg:grid w-full lg:grid-cols-12 gap-12">
        <div className="col-span-3 w-full ">
          <TownhallCard
            image="/assets/THfeature-1.svg"
            title="Delegation"
            description="Delegate voting power and foster collaboration, allowing community members to represent others and make decisions collectively."
          />
        </div>
        <div className="col-span-3 w-full">
          <TownhallCard
            image="/assets/Thfeature-2.svg"
            title="Sentiment  Commenting"
            description="Gauge community sentiment with sentiment-based commenting, enabling more informed and insightful discussions."
          />
        </div>
        <div className="col-span-3 w-full">
          <TownhallCard
            image="/assets/THfeature-4.svg"
            title="Engage Community through Discussions"
            description="Facilitate meaningful conversations and engage your community through integrated discussion boards, creating a hub for collaborative decision-making."
          />
        </div>
        <div className="col-span-3 w-full ">
          <TownhallCard
            image="/assets/THfeature-3.svg"
            title="Enable Voting with Comments"
            description="Enhance transparency and participation by combining voting and commenting, allowing users to express opinions while making decisions."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
