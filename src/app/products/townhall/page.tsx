import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/products/townhall/Banner";
import Elevate from "@/components/products/townhall/Elevate";
import VideoPlayer from "@/components/products/townhall/VideoPlayer";
import Features from "@/components/products/townhall/Features";

const townhall = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Header />
      <Banner />
      <Elevate/>
      <VideoPlayer/>
      <Features/>
      <Footer />
    </main>
  );
};

export default townhall;
