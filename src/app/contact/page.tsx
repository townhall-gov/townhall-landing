import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Form from "@/components/contact/Form";
import React from "react";

const contact = () => {
  return (
    <main className="flex h-screen flex-col w-full items-center justify-between pt-24">
      <Header />
      <div className="flex flex-col md:grid md:grid-cols-2  gap-8 md:gap-24 justify-between items-center md:items-start w-full px-4 md:px-24 pb-32  md:mt-24">
        <div className="col-span-1 inline-flex flex-col items-start gap-4 relative">
          <div className="relative w-fit font-semibold text-3xl md:text-5xl whitespace-nowrap">
            Contact Us
          </div>
          <p className="relative md:mr-42 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#e2e2e2] text-sm md:text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="col-span-1 md:mr-24">
          <Form/>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default contact;
