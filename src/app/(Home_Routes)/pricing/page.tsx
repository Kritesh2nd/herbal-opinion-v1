"use client";

import React from "react";

import { MdCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import TestimonialCard from "@/src/components/TestimonialCard";
import { comparePlans, CONSULTATION_PLANS, faqs } from "@/src/constants";
import ConsultationCard from "@/src/components/Plan";
import Faq from "@/src/components/Faq";
import LeafComponent from "@/src/components/LeafComponent";

const Pricing = () => {
  return (
    <div>
      {/* section 1 */}
      <section className="bg-light-green">
        <div className="globalContainer flex flex-col py-25 ">
          <h2 className="gooper text-primary titleLevel2">
            Simple Pricing for Personalized Support
          </h2>
          <p className="text-center  text-[#4B5563] text-xl mb-16 mt-2">
            Choose the care level that suits your needs. No hidden fees. Cancel
            anytime.
          </p>
          <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
            {CONSULTATION_PLANS.map((plan) => (
              <ConsultationCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="bg-white relative">
        <div className="relative">
          <LeafComponent
            mainStyle="h-60 w-54 hidden sm:block"
            direction="left"
            subStyle="-left-30 rotate-[270deg] -top-13"
          />
          <LeafComponent
            mainStyle="h-30 w-24 sm:hidden block"
            direction="left"
            subSize="h-45 w-45"
            subStyle="-left-18  rotate-[268deg] -top-6"
          />
        </div>
        <div className="globalContainer py-[74px]">
          <h2 className="gooper text-lettuce titleLevel2 pb-2">
            Compare All Plans
          </h2>
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
      <section className="bg-light-green">
        <div className="globalContainer flex flex-col py-[70px]">
          <h2 className="gooper text-farm-green titleLevel2 pb-[64px]">
            What Our Members Say
          </h2>
          <TestimonialCard bgwhite={true} />
        </div>
      </section>

      {/* section 4 */}
      <section>
        <Faq />
      </section>
    </div>
  );
};

export default Pricing;
