"use client";
import React from "react";
import { JourneyStep } from "../types";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Steps = ({ item }: { item: JourneyStep }) => {
  return (
    <div className="">
      <div className="flex  gap-5">
        <div className="sm:hidden ">
          <section className="flex flex-col h-full min-w-0 flex-1 gooper items-center  ">
            <div className="text-[25px] text-primary-dgray">STEP</div>
            <div className="text-[31px] text-[#1F1C1E] pb-2">{item.id}</div>
            <div className="flex-1 border-1 border-dashed border-l-primary-dgray "></div>
          </section>
        </div>
        <div
          className={`${
            parseInt(item.id) % 2 == 0 ? "sm:flex-row-reverse" : "sm:flex-row"
          } flex flex-col w-full pt-9 sm:pt-0`}
        >
          <section className="flex justify-center min-w-0 flex-4  pb-5 sm:pb-0">
            <div
              className={`${
                parseInt(item.id) % 2 == 0
                  ? "sm:pl-[60px] md:pl-[100px]"
                  : "sm:pr-[60px] md:pr-[100px]"
              } flex flex-col w-full justify-center `}
            >
              <div className="gooper lg:text-[31px] md:text-[25px] text-[20px] text-farm-green pb-4">
                {item.title}
              </div>
              <div className="text-primary-dgray sm:text-xl">
                {item.description}
              </div>
              {item.extra && (
                <div className="flex gap-2 sm:gap-4 mt-4 md:py-7 sm:py-5 py-4 sm:px-4 px-3 bg-white rounded-xl text-[#374151]">
                  <div>
                    <FaCheckCircle className="text-lettuce" />
                  </div>
                  <div>{item.extra}</div>
                </div>
              )}
            </div>
          </section>
          <section className="sm:flex hidden flex-col min-w-0 flex-1 gooper items-center  ">
            <div className="text-[31px] text-primary-dgray">STEP</div>
            <div className="text-[39px] text-[#1F1C1E] pb-2">{item.id}</div>
            <div className="flex-1 border-1 border-dashed border-l-primary-dgray "></div>
          </section>
          <section className="flex min-w-0 flex-4 pb-10  ">
            <div
              className={`${
                parseInt(item.id) % 2 == 0
                  ? "sm:justify-start"
                  : "sm:justify-end"
              } flex justify-center w-full items-center `}
            >
              <div className="h-[250px] w-[250px] sm:h-[233px] sm:w-[233px] md:h-[333px] md:w-[333px] rounded-full bg-farm-green overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`${item.style} absolute`}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Steps;
