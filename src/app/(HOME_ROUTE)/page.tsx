"use client";
import Herosection from "@/src/components/Herosection";
import LeafComponent from "@/src/components/LeafComponent";

import MeetHerbal from "@/src/components/MeetHerbal";
import PricingCard from "@/src/components/PricingCard";
import PrimaryButton from "@/src/components/PrimaryButton";
import TestimonialCard from "@/src/components/TestimonialCard";
import WhyHerbal from "@/src/components/WhyHerbal";
import { steps, therapyItems } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const meetHerbalText = [
    "Herbal Opinion is a Telehealth consultation clinic dedicated to helping everyday Australians explore alternate medications and treatment through expert clinical opinions. Our qualified practitioners guide each patient on a personalised journey to healing, offering tailored care plans that prioritise safety, efficacy, and individual needs.",
  ];
  return (
    <div>
      {/* section 1 */}
      <section>
        <Herosection />
      </section>

      {/* section 2 */}
      <section className="relative">
        <div className="relative">
          <LeafComponent
            mainStyle="h-105 w-58 hidden sm:block"
            direction="left"
            subStyle="-left-20  rotate-[260deg] top-6"
          />
          <LeafComponent
            mainStyle="h-32 w-29 sm:hidden block"
            direction="left"
            subSize="h-45 w-45"
            subStyle="-left-13  rotate-[268deg] -top-6"
          />
        </div>
        <div className="globalContainer py-16">
          <h1 className="gooper text-farm-green titleLevel2 pb-2">
            When to Choose a Different Path to Healing?
          </h1>
          <div className="flex flex-col md:flex-row gap-10 items-center bg-white sm:pt-16 pt-10">
            {/* Left side image */}
            <div>
              <div className="flex-1">
                <Image
                  src="/img/home/healing.png"
                  alt="Elderly Group"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>
            </div>
            {/* Right side text and grid */}
            <div className="flex-1">
              <p className="text-[#1F2937] sm:mb-6 mb-10 text-xl">
                If conventional treatments haven't worked for you for physical
                discomfort, mood support, or emotional balance, alternative
                therapies may provide what you need. Start with our initial
                consult.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-6 gap-4">
                {therapyItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative w-[140px] h-[180px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={500}
                        height={500}
                        className="object-cover w-full h-fit"
                      />
                    </div>
                    <p className="text-sm text-gray-800 mt-3">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="bg-tertiary py-5">
        <WhyHerbal color={"white"} />
      </section>

      {/* section 4 */}
      <section className="relative">
        <div className="relative">
          <LeafComponent
            mainStyle="h-105 w-25 hidden sm:block"
            direction="right"
            subStyle="right-31  rotate-[40deg] top-6"
          />
          <LeafComponent
            mainStyle="h-44 w-10 sm:hidden block"
            direction="right"
            subSize="h-40 w-40"
            subStyle="right-13  rotate-[40deg] top-1"
          />
        </div>
        <div className="globalContainer py-16">
          <h2 className=" text-primary gooper titleLevel2">How It Works?</h2>
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between sm:pt-16 pt-10">
            {/* Left side image */}
            <div className="flex flex-col gap-14">
              {steps.map((item) => (
                <div key={item.number}>
                  <div className="flex items-start gap-4">
                    {/* Circle with number */}
                    <div className="sm:w-[64px] sm:h-[64px] w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[#E6E89A] flex-shrink-0">
                      <span className="text-green-900 font-semibold text-xl">
                        {item.number}
                      </span>
                    </div>

                    {/* Text content */}
                    <div className="max-w-[500px] mx-auto">
                      <h3 className="text-green-900 font-medium tsm:text-[25px] text-[20px]">
                        {item.title}
                      </h3>
                      <p className="text-[#625B5F] tsm:text-[20px] text-[18px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <PrimaryButton title="Questionnaire" url="/assessment" />
              </div>
            </div>
            {/* Right side text and grid */}
            <div className="sm:w-[45%]">
              <div>
                <Image
                  src="/img/home/work.png"
                  alt="Elderly Group"
                  width={620}
                  height={620}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="flex flex-col bg-light-green py-22">
        <PricingCard />
        <div className="px-5">
          <div className="max-w-3xl mx-auto w-full space-y-8 sm:my-16 my-10">
            {/* Main Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-[#333333] text-xl mb-6 leading-relaxed">
                Not sure which plan is right for you? Complete our quick
                questionnaire — <br />
                we'll guide you from there.
              </p>
              <Link
                href="/assessment"
                className="bg-[#AED141] text-primary-black px-6 py-3 rounded-lg text-xl transition-colors duration-200 inline-flex items-center gap-2 group"
              >
                Take the Questionnaire
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 text-xl transition-transform duration-200" />
              </Link>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl text-[#1F1C1E]">
              Your Wellness Journey, Simplified
            </h2>

            <p className="text-[#625B5F] text-[18px] sm:text-[20px] leading-relaxed max-w-5xl mx-auto">
              All plans include access to our knowledgeable support team and
              educational resources to help you make informed decisions about
              your botanical wellness options.
            </p>
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section className="">
        <div className="relative">
          <LeafComponent
            mainStyle="h-105 w-25 hidden sm:block"
            direction="left"
            subStyle="-left-38 rotate-[240deg] top-6"
          />
          <LeafComponent
            mainStyle="h-40 w-18 sm:hidden block"
            direction="left"
            subSize="h-45 w-45"
            subStyle="-left-18  rotate-[250deg] -top-1"
          />
        </div>
        <TestimonialCard bgwhite={false} />
      </section>

      {/* section 7 */}
      <section className="bg-light-green sm:py-25 py-20">
        <div className="globalContainer flex sm:flex-row flex-col gap-10 ">
          <div className="flex items-center sm:w-1/2">
            <div className="flex flex-col justify-center pb-5">
              <h2 className="text-farm-green gooper titleLevel2 text-left">
                Already with another clinic?
              </h2>
              <div className="text-primary-black sm:text-xl text-lg sm:pb-9 pb-5">
                Switching to Herbal Opinion is simple and seamless.
              </div>
              <div className=" sm:text-[20px] text-[18px] text-primary-dgray sm:pr-32 pr-10 sm:pb-13 pb-6">
                Whether you're unhappy with your current care or looking for a
                more compassionate approach, we're here to help. Switching takes
                less than 5 minutes and we'll handle the details for you.
              </div>
              <div>
                <PrimaryButton
                  title="Switch to Herbal Opinion"
                  url="/switch-clinic"
                  background="farm-green"
                  text="white"
                />
              </div>
            </div>
          </div>
          <div className="sm:w-1/2">
            <div className="lg:h-[650px] md:h-[520px] sm:h-[420px] h-[100vw] lg:w-[600px] md:w-[500px] sm:w-[400px] w-[calc(100vw-40px)] relative overflow-hidden">
              <Image src="/img/home/doctor.png" fill alt="doctor" />
            </div>
          </div>
        </div>
      </section>

      {/* section 8 */}
      <section>
        <MeetHerbal text={meetHerbalText} />
      </section>
    </div>
  );
};

export default Home;
