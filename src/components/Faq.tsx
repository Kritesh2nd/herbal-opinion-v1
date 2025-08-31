"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { faqsData } from "../constants";
import { FaqDataType, FaqDropdownType } from "../types";
import { IoIosArrowUp } from "react-icons/io";
import { getAllFaqs } from "../app/(HOME_ROUTE)/action";
import Loading from "./Loading";

const FaqDropdown = ({ data }: { data: FaqDataType }) => {
  const { question, answer } = data;
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row bg-llight-green py-5 px-6 rounded-xl ">
      <div
        className="flex flex-col flex-1 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p>{question}</p>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out text-primary-dgray leading-5 ${
            open ? "max-h-40" : "max-h-0"
          }`}
        >
          <p className="mt-2">{answer}</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
        <div
          className={`ml-4 transform transition-transform duration-300 ${
            open ? "rotate-0" : "rotate-180"
          }`}
        >
          <IoIosArrowUp className="text-xl" />
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [faqs, setFaqs] = useState<FaqDataType[]>([]);
  const fecthAllPricing = async () => {
    try {
      const data = await getAllFaqs();

      if (data.status == 200) {
        setFaqs(data.data);
      } else {
        setError("Failed to Load FAQ Page");
      }
    } catch (error) {
      setError("Failed to Load FAQ Page");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthAllPricing();
  }, []);
  return (
    <div className="bg-white py-[70px] relative">
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
          {error ? (
            <div className="flex flex-col pt-20 pb-28 text-center ">
              <p className="text-xl font-bold text-farm-green pb-1">{error}</p>
              <p className="text-lg text-primary-dgray">
                Please try again after a while...
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {!loading &&
                faqs &&
                faqs.length > 0 &&
                faqs.map((item) => <FaqDropdown key={item.id} data={item} />)}
            </div>
          )}
        </div>
      </div>
      <Loading display={loading} displayBg={false} />
    </div>
  );
};

export default Faq;
