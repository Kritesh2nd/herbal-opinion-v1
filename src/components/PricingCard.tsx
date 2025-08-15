import React from "react";
import { pricingPlans } from "../constants";
import { ConsultationPlan } from "../types";
import { MdOutlineCheck } from "react-icons/md";

const PricingSingleCard = ({
  data,
  index,
}: {
  data: ConsultationPlan;
  index: number;
}) => {
  const {
    title,
    description,
    originalPrice,
    currentPrice,
    subtitle,
    features,
  } = data;

  return (
    <div className={`${index % 2 == 0 ? "py-6" : "py-0"} flex `}>
      <div
        className={`${
          index % 2 == 0 ? "" : ""
        } flex flex-col flex-1 bg-white rounded-xl border-2 border-lemon-green overflow-hidden `}
      >
        <div
          className={`${
            index % 2 == 0
              ? "bg-lemon-green text-primary-black"
              : "bg-farm-green text-primary-white"
          } p-6 rounded-t-xl pb-7`}
        >
          <h2 className={` text-xl sm:text-[25px] pb-2`}>{title}</h2>
          <p className="text-[18px] sm:text-[20px] ">{description}</p>
        </div>
        <div className="flex flex-col flex-1 bg-white p-6">
          <div className="gooper flex items-center gap-5 pb-6">
            {originalPrice && (
              <span className="sm:text-[31px] text-[25px] text-primary-dgray">
                <s>${originalPrice}</s>
              </span>
            )}
            <span className="sm:text-[39px] text-[21px] text-primary-black">
              {originalPrice && "$"}
              {currentPrice}
            </span>
          </div>
          <div className="pb-8 text-primary-dgray">{subtitle}</div>
          <div className="flex flex-col gap-6 text-primary-black ">
            {features.map((item) => (
              <div className="flex gap-[4px]" key={item}>
                <div className="">
                  <MdOutlineCheck className="text-xl text-lemon-green" />
                </div>
                <div className="">{item}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col justify-end pt-8">
            <button className="bg-farm-green sm:text-[20xp] text-[18px] text-white py-[18px] w-full rounded-lg cursor-pointer  transition-all duration-300 hover:scale-105 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingCard = () => {
  return (
    <div className="">
      <div className="globalContainer flex flex-col  sm:px-22">
        <h2 className="gooper text-farm-green titleLevel2 pb-2 font-medium">
          Simple Pricing for Personalized Support
        </h2>
        <p className="text-lg sm:text-xl text-primary-dgray pb-16 text-center">
          Choose the care level that suits your needs. No hidden fees. Cancel
          anytime.
        </p>
        <div className="flex gap-6 sm:flex-row flex-col">
          {pricingPlans.map((item, index) => (
            <PricingSingleCard key={item.id} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
