import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Form = () => {
  return (
    <div className="inline-flex flex-col items-end gap-6 w-full relative">
      <div className="inline-flex flex-col w-full gap-3">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className="inline-flex flex-col w-full gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="inline-flex flex-col w-full gap-3">
        <Label htmlFor="subject">Subject</Label>
        <Input type="text" id="subject" placeholder="I want to.." />
      </div>
      <div className="inline-flex flex-col w-full gap-3">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Hello..." />
      </div>
      <div className="w-full mt-4">
        <Button className="w-full">Submit</Button>
      </div>
    </div>
  );
};

export default Form;
