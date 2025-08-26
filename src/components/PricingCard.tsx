import React, { useEffect, useState } from "react";
import { pricingPlans } from "../constants";
import { ConsultationPlan, pricingDataType } from "../types";
import { MdOutlineCheck } from "react-icons/md";
import Link from "next/link";
import { getAllPricning } from "../app/(HOME_ROUTE)/action";

const PricingSingleCard = ({
  data,
  index,
}: {
  data: pricingDataType;
  index: number;
}) => {
  const {
    name,
    description,
    originalPrice,
    currentPrice,
    free,
    shortDescription,
    features,
  } = data;

  return (
    <div className={`${index % 2 == 0 ? "sm:py-6" : "py-0"} flex `}>
      <div
        className={`flex flex-col flex-1 bg-white rounded-xl border-2 border-lemon-green overflow-hidden `}
      >
        <div
          className={`${
            index % 2 == 0
              ? "bg-lemon-green text-primary-black"
              : "bg-farm-green text-primary-white"
          } p-6 rounded-t-xl pb-7`}
        >
          <h2 className={` text-xl sm:text-[25px] pb-2`}>{name}</h2>
          <p className="text-[18px] sm:text-[20px] ">{description}</p>
        </div>
        <div className="flex flex-col flex-1 bg-white p-6">
          <div className="gooper flex items-center gap-5 pb-6">
            {!free && originalPrice && (
              <span className="sm:text-[31px] text-[25px] text-primary-dgray">
                <s>${originalPrice}</s>
              </span>
            )}
            <span className="sm:text-[39px] text-[21px] text-primary-black">
              {!free && originalPrice && "$"}
              {!free && currentPrice}
              {free && "FREE"}
            </span>
          </div>
          <div className="pb-8 text-primary-dgray">{shortDescription}</div>
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
            {originalPrice ? (
              <button className="bg-farm-green sm:text-[20xp] text-[18px] text-white py-[18px] w-full rounded-lg cursor-pointer  transition-all duration-300 hover:scale-105 ">
                Get Started
              </button>
            ) : (
              <Link
                href="switch-clinic"
                className="bg-farm-green sm:text-[20xp] text-center text-[18px] text-white py-[18px] w-full rounded-lg cursor-pointer  transition-all duration-300 hover:scale-105 "
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingCard = () => {
  const [pricings, setPricings] = useState<pricingDataType[]>([]);
  const fecthAllPricing = async () => {
    const data = await getAllPricning();
    setPricings(data);
  };

  useEffect(() => {
    fecthAllPricing();
  }, []);

  return (
    <div className="">
      <div className="globalContainer flex flex-col  sm:px-22">
        <h2 className="gooper text-farm-green titleLevel2 pb-2 font-medium">
          Simple Pricing for Personalized Support
        </h2>
        <p className="text-lg sm:text-xl text-primary-dgray sm:pb-16 pb-10 text-center">
          Choose the care level that suits your needs. No hidden fees. Cancel
          anytime.
        </p>
        <div className=" sm:gap-6 gap-4 grid sm:grid-cols-3 grid-cols-1">
          {pricings &&
            pricings.length > 0 &&
            pricings.map((item, index) => (
              <PricingSingleCard key={item.id} data={item} index={index} />
            ))}

          {(!pricings || pricings.length == 0) &&
            pricingPlans.map((item, index) => (
              <PricingSingleCard key={item.id} data={item} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
