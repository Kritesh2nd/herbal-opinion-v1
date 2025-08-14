"use client";

import Link from "next/link";
import React from "react";

import { FaCheck } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

const MessageReceived = ({ active = false }: { active: boolean }) => {
  return (
    <div
      className={`${
        active ? "fixed" : "hidden"
      } z-30 h-[100vh] w-[100%] top-0 left-0`}
    >
      <div className="h-full w-full relative">
        <div className="absolute h-full w-full bg-black opacity-50 cursor-pointer"></div>
        <div className="absolute h-full w-full flex justify-center items-center">
          <div className="p-8 max-w-[600px] m-5 bg-white rounded-2xl text-center">
            <div className="flex justify-center pb-4">
              <div className="flex justify-center items-center relative h-20 w-20">
                <div className="h-full w-full absolute top-0 left-0 bg-lettuce opacity-25 rounded-full"></div>
                <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 rounded-full">
                  <div className="flex justify-center items-center h-12 w-12 bg-lettuce rounded-full">
                    <FaCheck className="text-white text-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="gooper sm:text-[31px] text-[25px] text-primary-black pb-4">
              You're all Set!
            </div>
            <div className="pb-5 sm:text-[20px] text-[18px] text-primary-dgray">
              Thanks for submitting your request. Our care team will reach out
              within 1-2 business days to help you switch your care to Herbal
              Opinion.
            </div>
            <div className="pb-5 text-primary-dgray text-sm">
              In the meantime, feel free to explore our care process or FAQs.
            </div>
            <div className="pb-4">
              <Link
                href="/"
                className="flex justify-center gap-2 items-center bg-lemon sm:text-[20px] p-[18px] text-primary-black rounded-lg"
              >
                <div>Return to Homepage</div>
                <div className="-mt-[1px]">
                  <FiArrowRight />
                </div>
              </Link>
            </div>
            <div className="flex flex-row justify-center gap-4 sm:text-[20px] p-[18px] text-blue-500">
              <Link href="/" className="flex flex-row gap-2 hover:underline">
                <div>
                  <FaHouse />
                </div>
                Talk to our Team
              </Link>
              <div className="text-primary-dgray">|</div>
              <Link href="/" className="flex flex-row gap-2 hover:underline">
                <div>
                  <MdOutlineSupportAgent />
                </div>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageReceived;
