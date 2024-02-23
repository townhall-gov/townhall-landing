import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Form from "@/components/contact/Form";
import React from "react";

const contact = () => {
  return (
    <main className="flex h-screen flex-col w-full items-center justify-between pt-24">
      <Header />
      <div className="grid grid-cols-2 items-start gap-24 justify-between w-full px-24 pb-32 mt-24">
        <div className="col-span-1 inline-flex flex-col items-start gap-4 relative">
          <div className="relative w-fit  font-semibold text-5xl whitespace-nowrap">
            Contact Us
          </div>
          <p className="relative mr-42 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#e2e2e2] text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="col-span-1 mr-24">
          <Form/>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default contact;
