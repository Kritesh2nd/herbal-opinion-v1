import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import PrimaryButton from "./PrimaryButton";

const Herosection = () => {
  return (
    <div>
      <section className="md:min-h-screen h-[calc(100vh-0px)] pb-12 sm:pb-0 bg-tertiary flex items-center overflow-hidden">
        <div className="globalContainer ">
          {/* <div className="grid md:grid-cols-2 gap-12 items-center"> */}
          <div className="flex flex-col-reverse sm:flex-row">
            {/* Left Content */}
            <div className="space-y-8 sm:w-1/2  md:pt-28 sm:pt-20 ">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-[61px] text-[#1F1C1E] lg:leading-18 md:leading-14 gooper">
                  Your Natural Path{" "}
                  <span className="sm:inline hidden">
                    <br />
                  </span>
                  to <span className="text-primary">Feeling Better</span>
                  <span className="sm:inline hidden">
                    <br />
                  </span>
                  Starts Here.
                </h1>
                <p className="text-lg md:text-[25px] text-[#1F1C1E] leading-relaxed max-w-[500px]">
                  Personalized support that's <b>simple, safe,</b> and{" "}
                  <b>trusted</b>
                </p>
              </div>
              <PrimaryButton
                title="Start Your Assessment"
                url="/assessment"
                background="farm-green"
                text="white"
              />
            </div>

            {/* Right*/}
            <div className="sm:w-1/2 pb-20 sm:pb-0 ">
              <div className="relative w-[calc(100vw-40px)] h-[300px] sm:w-[500px] sm:h-[500px]  md:w-[700px] md:h-[600px]  lg:w-[900px] lg:h-[700px] ">
                <Image src="/img/home/herosection.png" alt="logo" fill />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
