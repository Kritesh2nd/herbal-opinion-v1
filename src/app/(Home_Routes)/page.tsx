"use client";
import Herosection from "@/src/components/Herosection";
import LeafComponent from "@/src/components/LeafComponent";

import MeetHerbal from "@/src/components/MeetHerbal";
import ConsultationCard from "@/src/components/Plan";
import PrimaryButton from "@/src/components/PrimaryButton";
import TestimonialCard from "@/src/components/TestimonialCard";
import WhyHerbal from "@/src/components/WhyHerbal";
import { CONSULTATION_PLANS, steps, therapyItems } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
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
          <div className="flex flex-col md:flex-row gap-10 items-center bg-white pt-16">
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
              <p className="text-[#1F2937] mb-6 text-xl">
                If conventional treatments haven’t worked for you for physical
                discomfort, mood support, or emotional balance, alternative
                therapies may provide what you need. Start with our initial
                consult.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
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
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between pt-16">
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
                      <h3 className="text-green-900 font-medium text-[25px]">
                        {item.title}
                      </h3>
                      <p className="text-[#625B5F] text-xl">
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
      <section className="bg-tertiary py-16">
        <div className="globalContainer">
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
          <div className="max-w-3xl mx-auto w-full space-y-8 my-16">
            {/* Main Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-[#333333] text-xl mb-6 leading-relaxed">
                Not sure which plan is right for you? Complete our quick
                questionnaire — <br />
                we'll guide you from there.
              </p>
              <Link
                href="/assessment"
                className="bg-[#AED141] text-white px-6 py-3 rounded-lg text-xl transition-colors duration-200 inline-flex items-center gap-2 group"
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

            <p className="text-[#625B5F] text-xl leading-relaxed max-w-5xl mx-auto">
              All plans include access to our knowledgeable support team and
              educational resources to help you make informed decisions about
              your botanical wellness options.
            </p>
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section className=" bg-white relative">
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
        <div className="globalContainer py-16 px-4">
          <h2 className="titleLevel2 gooper text-farm-green mb-12">
            What Our Members Say
          </h2>
          <TestimonialCard bgwhite={false} />
        </div>
      </section>

      {/* section 7 */}
      <section className="bg-light-green py-25">
        <div className="globalContainer">
          Section7: Already With Another Clinic?
        </div>
      </section>

      {/* section 8 */}
      <section>
        <MeetHerbal />
      </section>
    </div>
  );
};

export default Home;
