"use client";

import Image from "next/image";
import React, { useState } from "react";
import { faqs } from "../constants";
import { FaqDropdownType } from "../types";
import { IoIosArrowUp } from "react-icons/io";

const FaqDropdown = ({ faq }: { faq: FaqDropdownType }) => {
  const { question, answer } = faq;
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row bg-llight-green py-5 px-6 rounded-xl">
      <div className="flex flex-col flex-1">
        <p>{question}</p>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out text-primary-dgray leading-5 ${
            open ? "max-h-40" : "max-h-0"
          }`}
        >
          <p className="mt-2">{answer}</p>
        </div>
      </div>
      <div className="">
        <button
          className={`ml-4 transform transition-transform duration-300 ${
            open ? "rotate-0" : "rotate-180"
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoIosArrowUp className="text-xl" />
        </button>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="bg-white py-[70px]">
      <div className="globalContainer flex flex-col sm:flex-row">
        <div className="flex sm:justify-start justify-center sm:w-1/2 pb-10 sm:pb-0">
          <div className="w-[100vw] h-[calc(100vw+50px)] sm:w-[320px] sm:h-[420px] md:w-[440px] md:h-[560px] lg:w-[559px] lg:h-[680px] relative overflow-hidden rounded-xl">
            <Image src="/img/pricing/old-people.png" fill alt="old-people" />
          </div>
        </div>
        <div className="flex flex-col sm:w-1/2">
          <h2 className="gooper text-lettuce titleLevel2 pb-2 text-left">
            Frequently Asked Questions
          </h2>
          <div className="md:text-[20px] sm:text-[20px] text-[18px] pb-7 text-primary-dgray">
            Our community of care providers, experts, and advocates working
            together to support your wellness journey.
          </div>
          <div className="flex flex-col gap-2">
            {faqs.map((item) => (
              <div key={item.id}>
                <FaqDropdown faq={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
