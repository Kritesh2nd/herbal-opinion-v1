"use client";

import Image from "next/image";
import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FiArrowRight } from "react-icons/fi";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";

const Assessment = () => {
  const [stage, setStage] = useState(0);
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [eligible, setEligible] = useState(true);
  const [ineligibleStage, setIneligibleStage] = useState(0);
  const assessments = [
    {
      id: 1,
      title: "Step 1: Your Health Background",
      subTitle:
        "We'll check if your condition is suitable for our care pathways",
      question:
        "Do you have a chronic condition lasting more than 3 months that has been diagnosed by a doctor? (e.g. chronic pain, anxiety, depression, insomnia, etc.)",
      points: [],
      answer: false,
    },
    {
      id: 2,
      title: "Step 2: Your Treatment Journey",
      subTitle:
        "Tell us what you've already tried so we can guide you toward better results.",
      question:
        "Have you tried conventional prescription medication for your condition?",
      points: [],
      answer: false,
    },
    {
      id: 3,
      title: "Step 3: Is Your Current Treatment Helping?",
      subTitle: "This helps us know if another option might suit you better.",
      question:
        "Has the medication been unsuccessful in fully treating your symptoms, or does it cause adverse side effects?",
      points: [],
      answer: false,
    },
    {
      id: 4,
      title: "Step 4: A Quick Health Check",
      subTitle:
        "Some conditions may need extra care. Let us know if any apply to you.",
      question: "Do you have any of the following conditions?",
      points: [
        "Active psychosis",
        "Drug dependence or substance abuse",
        "Cardio pulmonary disease",
        "Pregnant or breastfeeding",
      ],
      answer: false,
    },
    {
      id: 5,
      title: "Step 5: Mental Health Background",
      subTitle: "We ask this to ensure our care is right for you.",
      question:
        "Do you have a history of schizophrenia, bipolar type 1 and 2 disorder or have experienced psychosis?",
      points: [],
      answer: false,
    },
  ];

  const eligibleText = {
    true: {
      title: "Great news — you're eligible!",
      message: [
        "You've met the requirements for care through our team. Let's get you started with your free consultation.",
      ],
      icon: <FaCheck />,
    },
    false: {
      title: "Unfortunately, you may not be eligible at this time",
      message: [
        "In order to be eligible, a patient needs to have been diagnosed with a chronic condition by a doctor. ",
        "In order to be eligible, you need to have tried (or be currently using) a prescribed medication to help treat your symptoms.",
        "In order to be eligible,  your previous medication needs to have been unsuccessful or have undesired side-effects.",
        "Sadly, based on the information provided, it appears that you may not be suitable for plant medicine treatment at this time.",
      ],
      icon: <ImCross />,
    },
  };

  const handelRight = () => {
    setStage(stage < 4 ? stage + 1 : stage);
  };
  const handelWrong = () => {
    setStage(stage > 0 ? stage - 1 : stage);
  };
  return (
    <div className="bg-light-green py-[120px]">
      <div className="globalContainer flex flex-col ">
        {displayQuestion && (
          <div>
            <div className="gooper text-farm-green lg:text-[61px] md:text-[31px] sm:text-[25px] text-[20px] pb-4 text-center">
              Let's see if we're right for you.
            </div>
            <div className="pb-[64px] text-primary-black sm:text-xl text-lg text-center">
              Just 5 quick questions — takes under 5 minutes.
            </div>
            <div className="flex flex-col rounded-b-2xl shadow-[0px_8px_10px_rgba(0,0,0,0.30)] bg-white overflow-hidden">
              <div className="flex  py-6 px-8 bg-lemon-green">
                <div className="flex flex-col flex-1 ">
                  <div className="sm:text-[25px] text-xl pb-[6px]">
                    {assessments[stage].title}
                  </div>
                  <div>{assessments[stage].subTitle}</div>
                </div>
                <div className="flex items-center">{stage + 1}/5</div>
              </div>
              <div className="flex flex-col md:px-[50px] px-[20px] py-[30px]">
                <div className="text-primary-black text-md sm:text-xl pb-12">
                  {assessments[stage].question}
                  <br />
                  {assessments[stage].points && (
                    <ul className="pt-3">
                      {assessments[stage].points.map((point) => (
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
                    onClick={handelRight}
                  >
                    <div className="flex justify-center items-center sm:h-[210px] h-[160px]  sm:w-[210px] w-[160px] ">
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
                    onClick={handelWrong}
                  >
                    <div className="flex justify-center items-center sm:h-[210px] h-[160px]  sm:w-[210px] w-[160px] ">
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
                    other options.
                  </div>
                </div>
              )}
              {eligible && (
                <div className="flex justify-center pb-2 sm:px-10">
                  <Link
                    href=""
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
                    href=""
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
                  href=""
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
