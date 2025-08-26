"use client";

import React from "react";

import { MdCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import TestimonialCard from "@/src/components/TestimonialCard";
import { comparePlans } from "@/src/constants";
import Faq from "@/src/components/Faq";
import LeafComponent from "@/src/components/LeafComponent";
import PricingCard from "@/src/components/PricingCard";

const Pricing = () => {
  return (
    <div>
      {/* section 1 */}
      <section className="bg-light-green py-22">
        <PricingCard />
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
        <TestimonialCard bgwhite={true} />
      </section>

      {/* section 4 */}
      <section>
        <Faq />
      </section>
    </div>
  );
};

export default Pricing;
