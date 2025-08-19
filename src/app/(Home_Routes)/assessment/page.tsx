"use client";

import Image from "next/image";
import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FiArrowRight } from "react-icons/fi";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";
import { assessmentQuestion, eligibleText } from "@/src/constants";

const CircleProgress = ({ current }: { current: number }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const total = 5;

  const percent = current / total;
  const offset = circumference - percent * circumference;

  return (
    <div className="">
      <svg className="w-[40px] h-[40px]" width="40" height="40">
        {/* Background ring */}
        <circle
          className="stroke-gray-400"
          strokeWidth="5"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
        />
        {/* Progress ring */}
        <circle
          className="stroke-[#136f63] transition-all duration-500 ease-in-out"
          strokeWidth="5"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
          strokeLinecap="round"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
      </svg>
    </div>
  );
};

const Assessment = () => {
  const [stage, setStage] = useState(0);
  const [displayQuestion, setDisplayQuestion] = useState(true);
  const [eligible, setEligible] = useState(true);
  const [ineligibleStage, setIneligibleStage] = useState(0);

  const handleButton = (checkButton: boolean) => {
    let isRight = true;
    if (
      (checkButton && (stage == 0 || stage == 1 || stage == 2)) ||
      (!checkButton && (stage == 3 || stage == 4))
    ) {
      isRight = true;
    } else {
      isRight = false;
    }

    if (isRight) {
      handelRight();
    } else {
      handelWrong();
    }
  };

  const handelRight = () => {
    setStage(stage < 4 ? stage + 1 : stage);
    if (stage == 4) {
      setDisplayQuestion(false);
    }
  };
  const handelWrong = () => {
    setDisplayQuestion(false);
    setEligible(false);
    setIneligibleStage(stage);
  };
  const resetAssessment = () => {
    setStage(0);
    setDisplayQuestion(true);
    setEligible(true);
    setIneligibleStage(0);
  };
  // useEffect(()=>{

  // },[])

  return (
    <div className="bg-light-green sm:py-[100px] py-[80px] ">
      <div className="globalContainer flex flex-col">
        {displayQuestion && (
          <div className="">
            <h1 className="gooper text-farm-green titleLevel1 sm:pb-4">
              Let's see if we're right for you.
            </h1>
            <div className="sm:pb-[64px] pb-[42px] text-primary-black sm:text-xl text-lg text-center">
              Just 5 quick questions — takes under 5 minutes.
            </div>
            <div className=" border-e-red-500 md:px-30 sm:px-15 px-0">
              <div className="flex flex-col rounded-b-2xl shadow-[0px_8px_10px_rgba(0,0,0,0.30)] bg-white overflow-hidden">
                <div className="flex  py-6 px-8 bg-lemon-green">
                  <div className="flex flex-col flex-1 ">
                    <div className="sm:text-[25px] text-xl pb-[6px]">
                      {assessmentQuestion[stage].title}
                    </div>
                    <div>{assessmentQuestion[stage].subTitle}</div>
                  </div>

                  <div className="flex justify-between w-20 items-center">
                    <div className="flex justify-center items-center">
                      <CircleProgress current={stage + 1} />
                    </div>
                    <div>{stage + 1}/5</div>
                  </div>
                </div>
                <div className="flex flex-col md:px-[50px] px-[20px] py-[30px]">
                  <div className="text-primary-black text-md sm:text-xl pb-12 h-[180px]">
                    {assessmentQuestion[stage].question}
                    <br />
                    {assessmentQuestion[stage].points && (
                      <ul className="pt-3">
                        {assessmentQuestion[stage].points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center pl-6 relative"
                          >
                            <span className="absolute h-[6px] w-[6px] bg-black rounded-full left-2 sm:top-[9px] top-[5px]"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-8 pb-[20px] ">
                    <div
                      className="flex flex-row sm:flex-col justify-center sm:gap-0 gap-4 cursor-pointer shadow-[0px_0px_8px_rgba(0,0,0,0.30)] rounded-sm text-green-500 transition-all duration-200 hover:scale-105"
                      onClick={() => {
                        handleButton(true);
                      }}
                    >
                      {/* <div className="flex justify-center items-center sm:h-[210px] h-[160px]  sm:w-[210px] w-[160px] "> */}
                      <div className="flex justify-center items-center sm:h-[160px] h-[140px]  sm:w-[160px] w-[140px] ">
                        <div className="flex justify-center items-center sm:h-[120px] h-[80px] sm:w-[120px] w-[80px] rounded-full border-8 sm:text-6xl text-4xl">
                          <FaCheck />
                        </div>
                      </div>
                      <div className="flex items-center sm:justify-center pt-2 pb-4 text-xl text-center ">
                        Yes
                      </div>
                    </div>
                    <div
                      className="flex flex-row sm:flex-col justify-center sm:gap-0 gap-4 cursor-pointer shadow-[0px_0px_8px_rgba(0,0,0,0.30)] rounded-sm text-red-500 transition-all duration-200 hover:scale-105"
                      onClick={() => {
                        handleButton(false);
                      }}
                    >
                      <div className="flex justify-center items-center sm:h-[160px] h-[140px]  sm:w-[160px] w-[140px] ">
                        <div className="flex justify-center items-center sm:h-[120px] h-[80px] sm:w-[120px] w-[80px] rounded-full border-8 sm:text-6xl text-4xl">
                          <ImCross />
                        </div>
                      </div>
                      <div className="flex items-center sm:justify-center pt-2 pb-4 text-xl text-center ">
                        No
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!displayQuestion && (
          <div className="flex justify-center ">
            <div className="flex flex-col w-[672px] pt-8 px-5 bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.10)] pb-9">
              <div className="flex justify-center pb-6">
                <div
                  className={`${
                    eligible ? "bg-lettuce" : "bg-red-400"
                  } flex justify-center items-center sm:h-20 sm:w-20 h-16 w-16 rounded-full  text-4xl text-white`}
                >
                  {eligible ? eligibleText.true.icon : eligibleText.false.icon}
                </div>
              </div>
              <div className="gooper md:text-[39px] sm:text-[31px] text-[25px] pb-5 text-center sm:px-10">
                {eligible ? eligibleText.true.title : eligibleText.false.title}
              </div>
              <div className="text-primary-dgray text-center pb-9 sm:px-20">
                {eligible
                  ? eligibleText.true.message[0]
                  : eligibleText.false.message[ineligibleStage]}
              </div>
              <div className="flex justify-center pb-8">
                <Image
                  src="/img/assessment/flower.png"
                  height={128}
                  width={420}
                  alt="flower"
                />
              </div>
              {!eligible && (
                <div className="flex flex-row justify-center gap-2 pt-1 pb-3">
                  <div className="text-md text-blue-500">
                    <FaCircleInfo />
                  </div>
                  <div className="text-primary-dgray">
                    We're here if you have questions or need help exploring
                    other options.{"  "}
                  </div>
                </div>
              )}
              {eligible && (
                <div className="flex justify-center pb-2 sm:px-10">
                  <Link
                    href="https://book.medprescribe.com.au/book/686c4b0890237467e0781196"
                    className="flex items-center gap-3 w-full bg-lemon text-primary-black px-7 py-[7px] rounded-lg sm:text-[20px] text-[18px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-full gap-3 pt-[3px] md:pt-[6px] ">
                      Book Your Assessment
                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
              )}
              {!eligible && (
                <div className="flex justify-center pb-2 sm:px-10">
                  <Link
                    href="/"
                    className="flex items-center gap-3 w-full bg-lemon text-primary-black px-7 py-[7px] rounded-lg sm:text-[20px] text-[18px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-full gap-3 pt-[3px] md:pt-[6px] ">
                      Return to Home
                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
              )}
              <div className="flex justify-center pb-4 sm:px-10">
                <Link
                  href="#"
                  className="flex items-center gap-3 w-full border-3 border-green-500 text-primary-black px-7 py-[5px] rounded-lg sm:text-[20px] text-[18px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-full gap-3 pt-[3px] md:pt-[6px] text-center ">
                    Talk to out Team
                  </div>
                </Link>
              </div>
              {eligible && (
                <div className="flex justify-center ">
                  <Link href="/" className="text-primary-dgray hover:underline">
                    Return to Homepage
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
