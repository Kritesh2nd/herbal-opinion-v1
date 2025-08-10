import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Herosection = () => {
  return (
    <div>
      <section className="min-h-screen bg-tertiary flex items-center overflow-hidden">
        <div className="globalContainer ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-[61px] text-[#1F1C1E] leading-18 gooper">
                  Your Natural Path
                  <br />
                  to <span className="text-primary">Feeling Better</span>
                  <br />
                  Starts Here.
                </h1>

                <p className="text-lg md:text-[25px] text-[#1F1C1E] leading-relaxed max-w-[500px]">
                  Personalized support that's <b>simple, safe,</b> and <b>trusted</b>
                </p>
              </div>

              <button className="mt-3 inline-flex items-center gap-3 bg-primary text-white px-7 py-[10px] rounded-full text-[25px] transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                Start Your Assessment
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Right*/}
            <div>
              <div className="relative w-[900px] h-[700px]">
                <Image
                  src="/img/home/herosection.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className="object-cover h-fit w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
