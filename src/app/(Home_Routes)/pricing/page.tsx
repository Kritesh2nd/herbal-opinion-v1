"use client";

import { FaqDropdownType } from "@/src/types";
import Image from "next/image";
import React, { useState } from "react";

import { MdCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
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

const Pricing = () => {
  const comparePlans = [
    {
      id: 1,
      feature: "Consultations",
      essectialRelief: "1 Session",
      ongoingCare: "Monthly",
      priorityAccess: "Unlimited",
    },
    {
      id: 2,
      feature: "Personalized Care Plan",
      essectialRelief: "yes",
      ongoingCare: "yes",
      priorityAccess: "yes",
    },
    {
      id: 3,
      feature: "Prescription Support",
      essectialRelief: "no",
      ongoingCare: "yes",
      priorityAccess: "yes",
    },
    {
      id: 4,
      feature: "Direct Chat Access",
      essectialRelief: "no",
      ongoingCare: "no",
      priorityAccess: "yes",
    },
    {
      id: 5,
      feature: "Priority Service",
      essectialRelief: "no",
      ongoingCare: "Standard",
      priorityAccess: "VIP",
    },
  ];

  const faqs: FaqDropdownType[] = [
    {
      id: 1,
      question: "What makes your products different from others in the market?",
      answer:
        "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
      display: true,
    },
    {
      id: 2,
      question: "Are your products cruelty-free and vegan?",
      answer:
        "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
      display: true,
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer:
        "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
      display: true,
    },
    {
      id: 4,
      question: "What is your return policy?",
      answer:
        "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
      display: true,
    },
    {
      id: 5,
      question: "How are your ingredients sourced?",
      answer:
        "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
      display: true,
    },
    {
      id: 6,
      question: "Are your products safe?",
      answer:
        "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
      display: true,
    },
  ];
  return (
    <div>
      {/* section 1 */}
      <section className="bg-light-green border border-stone-400">
        <div className="globalContainer py-25 ">
          section1: Simple Pricing for Personalized Support
        </div>
      </section>
      {/* section 2 */}
      <section className="bg-white">
        <div className="globalContainer py-[74px]">
          <div className="gooper text-farm-green md:text-[39px] sm:text-[31px] text-[25px] pb-2 text-center">
            Compare All Plans
          </div>
          <div className="md:text-[20px] sm:text-[20px] text-[18px] pb-7 text-center text-primary-dgray">
            Not sure which plan is the right fit for you? Explore our detailed
            comparison to
            <span className="sm:inline hidden">
              <br />
            </span>
            find the one that best suits your needs and lifestyle.
          </div>
          <div className=" ">
            <div className="overflow-auto">
              <div className="sm:w-auto w-[680px] overflow-hidden rounded-xl">
                <table className="w-full">
                  <thead>
                    <tr>
                      <td className="sm:py-4 py-3 px-5 text-primary-black bg-llight-green">
                        Features
                      </td>
                      <td className="sm:py-4 py-3 text-center text-primary-black bg-llight-green">
                        Essential Relief
                      </td>
                      <td className="sm:py-4 py-3 text-center text-primary-black bg-llight-green">
                        Ongoing Care
                      </td>
                      <td className="sm:py-4 py-3 text-center text-primary-black bg-llight-green">
                        Priority Access
                      </td>
                    </tr>
                  </thead>
                  {comparePlans.map((item, index) => (
                    <tbody key={item.id}>
                      <tr className="">
                        <td
                          className={`${
                            index + 1 == comparePlans.length ? "" : "border-b"
                          } w-1/4 sm:py-4 py-3 px-5 bg-llight-green  border-[#E5E7EB]`}
                        >
                          {item.feature}
                        </td>
                        <td
                          className={`${
                            index + 1 == comparePlans.length ? "" : "border-b"
                          }  w-1/4 sm:py-4 py-3 text-center text-primary-black bg-lllight-green border-[#E5E7EB]`}
                        >
                          <div className="flex justify-center w-full">
                            {item.essectialRelief == "yes" ? (
                              <MdCheck className="text-farm-green text-2xl" />
                            ) : item.essectialRelief == "no" ? (
                              <RxCross2 className="text-primary-black text-2xl" />
                            ) : (
                              item.essectialRelief
                            )}
                          </div>
                        </td>
                        <td
                          className={`${
                            index + 1 == comparePlans.length ? "" : "border-b"
                          } w-1/4 sm:py-4 py-3 text-center text-primary-black bg-lllight-green border-[#E5E7EB]`}
                        >
                          <div className="flex justify-center w-full">
                            {item.ongoingCare == "yes" ? (
                              <MdCheck className="text-farm-green text-2xl" />
                            ) : item.ongoingCare == "no" ? (
                              <RxCross2 className="text-primary-black text-2xl" />
                            ) : (
                              item.ongoingCare
                            )}
                          </div>
                        </td>
                        <td
                          className={`${
                            index + 1 == comparePlans.length ? "" : "border-b"
                          } w-1/4 sm:py-4 py-3 text-center text-primary-black bg-lllight-green border-[#E5E7EB]`}
                        >
                          <div className="flex justify-center w-full">
                            {item.priorityAccess == "yes" ? (
                              <MdCheck className="text-farm-green text-2xl" />
                            ) : item.priorityAccess == "no" ? (
                              <RxCross2 className="text-primary-black text-2xl" />
                            ) : (
                              item.priorityAccess
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="bg-light-green border border-stone-400">
        <div className="globalContainer py-25">
          section1: What Our Members Say
        </div>
      </section>
      {/* section 4 */}
      <section className="bg-white py-[70px]">
        <div className="globalContainer flex flex-col sm:flex-row">
          <div className="flex sm:justify-start justify-center sm:w-1/2 pb-10 sm:pb-0">
            <div className="w-[100vw] h-[calc(100vw+50px)] sm:w-[320px] sm:h-[420px] md:w-[440px] md:h-[560px] lg:w-[559px] lg:h-[680px] relative overflow-hidden rounded-xl">
              <Image src="/img/pricing/old-people.png" fill alt="old-people" />
            </div>
          </div>
          <div className="flex flex-col sm:w-1/2">
            <div className="gooper text-lettuce md:text-[39px] sm:text-[31px] text-[25px] pb-2 ">
              Frequently Asked Questions
            </div>
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
      </section>
    </div>
  );
};

export default Pricing;
