import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/products/townhall/Banner";
import Elevate from "@/components/products/townhall/Elevate";
import VideoPlayer from "@/components/products/townhall/VideoPlayer";
import Features from "@/components/products/townhall/Features";
import Difference from "@/components/products/townhall/Difference";
import GetStarted from "@/components/GetStarted";
import Houses from "@/components/products/townhall/Houses";
import { housesList } from "@/services/constants";
import Snapshots from "@/components/products/townhall/Snapshots";

const townhall = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Header />
      <Banner />
      <Elevate/>
      <VideoPlayer/>
      <Snapshots/>
      <Features/>
      <Houses Data={housesList}/>
      <Difference/>
      <GetStarted />
      <Footer />
    </main>
  );
};

export default townhall;
