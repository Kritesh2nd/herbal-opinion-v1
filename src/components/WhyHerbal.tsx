import Image from "next/image";
import React from "react";
import { FaSeedling } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

const WhyHerbal = ({ color }: { color: string }) => {
  return (
    <div className="globalContainer ">
      <div className="flex flex-col sm:py-[70px] py-[40px] md:px-[100px] sm:px-[20px] px-[0] ">
        <h2 className="gooper text-farm-green titleLevel2  md:pb-[64px] sm:pb-[40px] pb-[20px]">
          Why Herbal Opinion?
        </h2>
        <div className="flex flex-col sm:flex-row gap-5 ">
          {/* section 1 */}
          <div
            className={`flex flex-col flex-1 min-w-0 rounded-lg px-8 pt-8 `}
            style={{ backgroundColor: color }}
          >
            <div className="flex gap-4 pb-4">
              <div className="p-4 bg-[#E5EA98] w-fit rounded-[100px] text-primary text-2xl">
                <FaSeedling />
              </div>
              <div className="flex items-center sm:text-[25px] text-[20px] text-farm-green -mb-2">
                Alternative Solutions
              </div>
            </div>
            <div className="text-[17px] sm:text-[20px]">
              We focus on alternate medication approaches that work in harmony
              with your body.
            </div>
            <div className="flex sm:justify-end justify-center sm:mt-0 -mt-4 pb-3">
              <Image
                src="/img/about/image5.png"
                width={350}
                height={280}
                className="mb-2"
                alt="image5"
              />
            </div>
          </div>
          {/* section 2 */}
          <div className="flex flex-col flex-1 min-w-0 gap-5 ">
            {/* section 2.1 */}
            <div
              className={
                "flex flex--reverse sm:flex-row flex-1 p-8 rounded-lg gap-1"
              }
              style={{ backgroundColor: color }}
            >
              <div className="w-[30%] sm:flex hidden sm:justify-start justify-center">
                <Image
                  src="/img/about/image6.png"
                  width={180}
                  height={180}
                  alt="image6"
                  className="object-contain sm:-mt-3 -mt-1 "
                />
              </div>
              <div className="sm:w-[70%] w-[100%] flex flex-col gap-2">
                <div className="flex pb-4 gap-4 ">
                  <div className="p-4 bg-[#E5EA98] w-fit rounded-[100px] text-primary text-2xl">
                    <FaUserDoctor />
                  </div>
                  <div className="flex items-center sm:text-[25px] text-[20px] text-farm-green -mb-2">
                    Doctor Approved
                  </div>
                </div>
                <div className="flex sm:text-[20px] sm:gap-0 gap-3 text-[17px] text-primary-black">
                  <div className="w-[30%] flex sm:hidden sm:justify-start justify-center">
                    <Image
                      src="/img/about/image6.png"
                      width={180}
                      height={180}
                      alt="image6"
                      className="object-contain sm:-mt-3 -mt-1 "
                    />
                  </div>
                  <div className="sm:w-[100%] w-[70%]">
                    All our recommendations are reviewed by qualified healthcare
                    professionals.
                  </div>
                </div>
              </div>
            </div>
            {/* section 2.2 */}
            <div
              className={`flex flex-1 p-8 rounded-lg gap-3 flex-col sm:flex-row`}
              style={{ backgroundColor: color }}
            >
              <div className="sm:w-[70%] w-[100%]">
                <div className="flex pb-4 gap-4 ">
                  <div className="p-4 bg-[#E5EA98] w-fit rounded-[100px] text-primary text-2xl">
                    <MdOutlineSecurity />
                  </div>
                  <div className="flex items-center sm:text-[25px] text-[20px] text-farm-green -mb-2">
                    Discreet & Simple
                  </div>
                </div>
                <div className="flex sm:text-[20px] sm:gap-0 gap-2 text-[17px] text-primary-black">
                  <div className="sm:w-[100%] w-[70%]">
                    Our process is easy to navigate with privacy as our
                    priority.
                  </div>
                  <div className="w-[30%] flex sm:hidden  sm:justify-start justify-center">
                    <Image
                      src="/img/about/image7.png"
                      width={180}
                      height={180}
                      alt="image6"
                      className="object-contain scale-140"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:flex hidden sm:justify-start justify-center w-[30%] overflow-hidden">
                <Image
                  src="/img/about/image7.png"
                  width={180}
                  height={180}
                  alt="image6"
                  className="object-contain scale-140"
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
