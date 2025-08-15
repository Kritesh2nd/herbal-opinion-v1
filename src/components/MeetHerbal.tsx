import Image from "next/image";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FaCheck } from "react-icons/fa";
import { meetHerbal } from "../constants";

const MeetHerbal = ({ text }: { text: string[] }) => {
  return (
    <div className="globalContainer py-[70px]">
      <div className="gooper text-center text-farm-green md:text-[39px] sm:text-[31px] text-[25px] pb-[64px]">
        Meet Herbal Opinion
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-1 justify-center sm:pb-0 pb-8">
          <div className="lg:h-[650px] md:h-[520px] sm:h-[420px] h-[100vw] lg:w-[650px] md:w-[520px] sm:w-[420px] w-[100vw] relative">
            <Image src="/img/switch-clinic/meetup.png" fill alt="yoga girl" />
          </div>
        </div>
        <div className="flex justify-end items-center flex-1 text-primary-dgray">
          <div className="sm:pl-[105px] sm:text-[20px] text-[18px]">
            {text.map((item) => (
              <div key={item}>
                <p className="">{item}</p>
                <br />
              </div>
            ))}
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:pb-9 pb-5">
              {meetHerbal.map((item) => (
                <div
                  className="flex gap-2 text-primary-dgray text-[18px] sm:text-[20px] pb-3 "
                  key={item.id}
                >
                  <div className="flex justify-center items-center text-white text-[9px] h-4 w-4 bg-farm-green rounded-full mt-[2px]">
                    <FaCheck />
                  </div>
                  <p className="sm:text-[20px] text-[18px]">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex">
              <PrimaryButton title="Start Your Journey" url="/assessment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetHerbal;
