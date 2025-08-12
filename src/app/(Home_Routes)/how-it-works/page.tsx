import Steps from "@/src/components/Steps";
import { JourneyStep } from "@/src/types";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HowItWorks = () => {
  const steps: JourneyStep[] = [
    {
      id: "01",
      title: "Tell Us About Yourself",
      description:
        "Answer a few quick questions so we can learn more about your condition and history. Our questionnaire is designed by healthcare professionals to gather the information we need to help you.",
      image: "/img/how-it-works/step1.png",
      style: "rotate-4 -bottom-[1px]",
      extra: "",
    },
    {
      id: "02",
      title: "Get a Personalized Recommendation",
      description:
        "Based on your answers, we'll connect you with a care consultant who reviews your case. Our consultants specialize in natural remedies and holistic approaches to wellness.",
      image: "/img/how-it-works/step2.png",
      style: "rotate-8 -bottom-0",
      extra:
        "All consultants are licensed healthcare professionals with expertise in herbal medicine",
    },
    {
      id: "03",
      title: "Begin Your Treatment Plan",
      description:
        "If you're eligible, a treatment plan will be shared and medication discreetly delivered to your doorstep. Our natural remedies are carefully sourced and formulated for maximum effectiveness.",
      image: "/img/how-it-works/step3.png",
      style: "bottom-14 -left-1",
      extra: "",
    },
  ];

  return (
    <div className="bg-tertiary">
      {/* section 1 */}
      <section className="globalContainer pb-[120px] ">
        <div className="gooper lg:text-[61px] md:text-[49px] sm:text-[31px] text-[25px] py-[64px] text-center">
          Start Your Wellness Journey in
          <br />
          <span className="text-farm-green">3 Simple Steps</span>
        </div>
        <div className="flex flex-col gap-[64px]  pt-[60px]">
          {steps.map((item) => (
            <Steps key={item.id} item={item} />
          ))}
        </div>
      </section>
      {/* section 2 */}
      <section className="bg-white py-[64px]">
        <div className="globalContainer flex flex-col ">
          <div className="gooper text-farm-green text-center md:text-[39px] text-[31px] pb-2">
            Ready to take the first step?
          </div>
          <div className="sm:text-xl text-primary-dgray text-center pb-[34px]">
            Start your journey toward better support today.
          </div>
          <div className="flex justify-center">
            <button className="flex items-center gap-3 bg-lemon text-farm-green px-7 py-[5px] rounded-full sm:text-[25px] text-[20px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 pt-[3px] md:pt-[6px] ">
                Start Your Assessment
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
