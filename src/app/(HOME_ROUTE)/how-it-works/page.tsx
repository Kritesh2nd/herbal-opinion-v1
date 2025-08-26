import PrimaryButton from "@/src/components/PrimaryButton";
import Steps from "@/src/components/Steps";
import { JourneyStep } from "@/src/constants";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-tertiary">
      {/* section 1 */}
      <section className="globalContainer pb-[120px] ">
        <h1 className="gooper titleLevel1 sm:py-[64px] py-[40px] sm:pb-[64px] pb-[40px]">
          Start Your Wellness Journey in
          <br />
          <span className="text-farm-green">3 Simple Steps</span>
        </h1>
        <div className="flex flex-col gap-[64px]">
          {JourneyStep.map((item) => (
            <Steps key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* section 2 */}
      <section className="bg-white py-[64px]">
        <div className="globalContainer flex flex-col ">
          <h2 className="gooper text-farm-green titleLevel2 pb-2">
            Ready to take the first step?
          </h2>
          <div className="sm:text-xl text-primary-dgray text-center pb-[34px]">
            Start your journey toward better support today.
          </div>
          <div className="flex justify-center">
            <PrimaryButton title="Start Your Assessment" url="/assessment" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
