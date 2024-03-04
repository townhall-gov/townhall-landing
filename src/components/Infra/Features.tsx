import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center p-4 md:p-24 pb-0 relative gap-4 md:gap-8 min-h-screen">
      <div className="flex flex-col md:grid md:grid-cols-12 h-full w-full justify-center items-center gap-4 md:gap-8 ">
        <Card1
          title="Proposals"
          minHeight="min-h-[400px] md:min-h-[500px]"
          imgClassName="size-full absolute left-0 -bottom-12 md:bottom-0"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
          imageMain="/assets/Proposal.svg"
        />
        <Card1
          title="Discussion"
          minHeight="min-h-[400px] md:min-h-[500px]"
          imgClassName="size-full absolute left-0 -bottom-24  md:-bottom-12"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
          imageMain="/assets/Discussion.svg"
        />
      </div>
      <div className="hidden md:flex  w-full justify-center items-center overflow-hidden">
        <Card2
          title="Delegation"
          imgClassName="size-full absolute -right-72 bottom-0 z-10"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          imageMain="/assets/Delegation.svg"
          imageBg="/assets/DelegationGrid.svg"
          imageGlow="/assets/DelegationGlow.svg"
        />
      </div>
      <div className="flex md:hidden  w-full justify-center items-center overflow-hidden">
        <Card1
          title="Delegation"
          minHeight=" min-h-[500px]"
          imgClassName="size-full absolute left-0 -bottom-36"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          imageMain="/assets/Delegation.svg"
        />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-12 h-full w-full justify-center items-center gap-8 ">
        <Card1
          title="Bounties"
          minHeight="min-h-[450px] md:min-h-[600px]"
          imgClassName="size-3/5 md:size-3/4 absolute left-0 bottom-0"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"
          imageMain="/assets/BountiesCoin.svg"
        />
        <Card1
          title="Social Feed"
          minHeight="min-h-[550px] md:min-h-[600px]"
          imgClassName="size-3/4 absolute -right-8 bottom-0"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"
          imageMain="/assets/SocialFeed.svg"
        />
      </div>
      <div className="hidden md:grid  w-full justify-center items-center overflow-hidden">
        <Card2
          title="Prediction"
          imgClassName="size-full absolute -right-60 bottom-0 z-10"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          imageMain="/assets/Prediction.svg"
          imageGlow="/assets/DelegationGlow.svg"
          centered
        />
      </div>
      <div className="flex md:hidden  w-full justify-center items-center overflow-hidden">
        <Card1
          title="Prediction"
          minHeight=" min-h-[400px]"
          imgClassName="size-1/2 absolute right-0 -bottom-12 z-10"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          imageMain="/assets/Prediction.svg"
         
        />
      </div>
      <div className="hidden md:grid  w-full justify-center items-center overflow-hidden">
        <Card2
          title="Treasury"
          imgClassName="size-full absolute -left-72 bottom-0 z-10"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          imageMain="/assets/Treasury.svg"
          imageGlow="/assets/DelegationGlow.svg"
          rtl
          centered
        />
      </div>
      <div className="flex md:hidden  w-full justify-center items-center overflow-hidden">
        <Card1
          title="Treasury"
          minHeight=" min-h-[400px]"
          imgClassName="size-1/2 absolute left-0 -bottom-12 z-10"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          imageMain="/assets/Treasury.svg"
         
        />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-12 h-full w-full justify-center items-center gap-8 ">
        <Card1
          title="Automated Reports"
          minHeight="min-h-[400px] md:min-h-[600px]"
          imgClassName="size-9/12 md:size-11/12 absolute left-0 -bottom-24"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"
          imageMain="/assets/Automated.svg"
          imageGlow="/assets/DelegationGlow.svg"
        />
        <Card1
          title="Social Notification"
          minHeight="min-h-[400px] md:min-h-[600px]"
          imgClassName="size-3/4 absolute right-0 -bottom-24 md:bottom-0"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"
          imageMain="/assets/SocialNotification.svg"
          imageGlow="/assets/DelegationGlow.svg"
        />
      </div>
      <div className="hidden md:grid  w-full justify-center items-center overflow-hidden">
        <Card2
          title="Referral and Leaderboard"
          imgClassName="size-full absolute -left-72 bottom-0 z-10"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          imageMain="/assets/Referral.svg"
          imageGlow="/assets/DelegationGlow.svg"
          rtl
          centered
        />
      </div>
      <div className="flex md:hidden  w-full justify-center items-center overflow-hidden">
        <Card1
          title="Referral and Leaderboard"
          minHeight=" min-h-[500px]"
          imgClassName="size-full md:size-1/2 absolute left-0 -bottom-36 z-10"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          imageMain="/assets/Referral.svg"
         
        />
      </div>
    </section>
  );
};

const Card1 = ({
  title,
  description,
  minHeight,
  imageMain,
  imageGlow,
  imgClassName,
}: {
  title: string;
  description: string;
  imageMain: string;
  imgClassName?: string;
  imageGlow?: string;
  minHeight?: string;
}) => {
  return (
    <div
      className={`col-span-6 border bg-[#1e2227] size-full ${minHeight} overflow-hidden m-auto relative rounded-3xl p-6 md:p-12`}
    >
      <h1 className="text-2xl">{title}</h1>
      <p className="text-lg text-secondary mt-2">{description}</p>
      <div className={imgClassName}>
        <Image src={imageMain} alt="feature" fill />
      </div>
      {imageGlow && (
        <Image className="absolute  bottom-0" src={imageGlow} alt="grid" fill />
      )}
    </div>
  );
};

const Card2 = ({
  title,
  description,
  imageMain,
  imageBg,
  imageGlow,
  imgClassName,
  rtl,
  centered,
}: {
  title: string;
  description: string;
  imageMain: string;
  imageBg?: string;
  imageGlow?: string;
  imgClassName?: string;
  rtl?: boolean;
  centered?: boolean;
}) => {
  return (
    <div
      className={`border bg-[#1e2227] size-full w-full min-h-[300px] m-auto overflow-hidden relative rounded-3xl p-12 ${
        centered && "px-72"
      }`}
    >
      <div className={`flex flex-col ${rtl && "items-end text-right"}`}>
        <h1 className="text-2xl">{title}</h1>
        <p className="text-lg text-secondary mt-2 w-1/2">{description}</p>
      </div>
      <div className={imgClassName}>
        <Image src={imageMain} alt="feature" fill />
      </div>
      {imageBg && (
        <Image
          className="absolute right-0 bottom-0"
          src={imageBg}
          alt="grid"
          fill
        />
      )}
      {imageGlow && (
        <Image
          className="absolute left-0 bottom-0"
          src={imageGlow}
          alt="grid"
          width="450"
          height="300"
        />
      )}
    </div>
  );
};

export default Features;
