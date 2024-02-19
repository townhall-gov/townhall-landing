import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/products/townhall/Banner";
import Elevate from "@/components/products/townhall/Elevate";
import React from "react";

const townhall = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Header />
      <Banner />
      <Elevate/>
      <Footer />
    </main>
  );
};

export default townhall;
