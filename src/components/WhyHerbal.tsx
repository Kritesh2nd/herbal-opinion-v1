import Image from "next/image";
import React from "react";
import { FaSeedling } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

const WhyHerbal = ({ color }: { color: string }) => {
  return (
    <div className="globalContainer ">
      <div className="flex flex-col md:py-[70px] sm:py-[40px] py-[20px] md:px-[100px] sm:px-[20px] px-[0] ">
        <h2 className="gooper text-farm-green titleLevel2  md:pb-[64px] sm:pb-[40px] pb-[20px]">
          Why Herbal Opinion?
        </h2>
        <div className="flex flex-col sm:flex-row gap-5 ">
          <div
            className={`flex flex-col flex-1 min-w-0 rounded-lg px-8 pt-8 `}
            style={{ backgroundColor: color }}
          >
            <div className="flex gap-4 pb-4">
              <div className="p-4 bg-[#E5EA98] w-fit rounded-[100px] text-primary text-2xl">
                <FaSeedling />
              </div>
              <div className="flex items-center text-[25px] text-farm-green -mb-2">
                Alternative Solutions
              </div>
            </div>
            <div className="text-xl">
              We focus on alternate medication approaches that work in harmony
              with your body.
            </div>
            <div className="flex sm:justify-end justify-center">
              <Image
                src="/img/about/image5.png"
                width={350}
                height={280}
                className="mb-2"
                alt="image5"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 min-w-0 gap-5 ">
            <div
              className={
                "flex flex-col-reverse sm:flex-row flex-1 p-8 rounded-lg"
              }
              style={{ backgroundColor: color }}
            >
              <div className="w-full flex sm:justify-start justify-center  ">
                <Image
                  src="/img/about/image6.png"
                  width={200}
                  height={200}
                  alt="image6"
                />
              </div>
              <div className="">
                <div className="flex pb-4 gap-4 ">
                  <div className="p-4 bg-[#E5EA98] w-fit rounded-[100px] text-primary text-2xl">
                    <FaUserDoctor />
                  </div>
                  <div className="flex items-center text-[25px] text-farm-green -mb-2">
                    Doctor Approved
                  </div>
                </div>
                <div className="text-xl">
                  All our recommendations are reviewed by qualified healthcare
                  professionals.
                </div>
              </div>
            </div>
            <div
              className={`flex flex-1 p-8 rounded-lg gap-3 flex-col sm:flex-row`}
              style={{ backgroundColor: color }}
            >
              <div>
                <div className="flex pb-4 gap-4 ">
                  <div className="p-4 bg-[#E5EA98] w-fit rounded-[100px] text-primary text-2xl">
                    <MdOutlineSecurity />
                  </div>
                  <div className="flex items-center text-[25px] text-farm-green -mb-2">
                    Discreet & Simple
                  </div>
                </div>
                <div className="text-xl">
                  Our process is easy to navigate with privacy as our priority.
                </div>
              </div>
              <div className="flex sm:justify-start justify-center">
                <Image
                  src="/img/about/image7.png"
                  width={200}
                  height={200}
                  alt="image7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHerbal;
