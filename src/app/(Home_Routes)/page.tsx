"use client";
import Herosection from "@/src/components/Herosection";
import LeafComponent from "@/src/components/leaf";
import ConsultationCard from "@/src/components/Plan";
import TestimonialCard from "@/src/components/TestimonialCard";
import WhyHerbal from "@/src/components/WhyHerbal";
import {
  CONSULTATION_PLANS,
  steps,
  testimonials,
  therapyItems,
} from "@/src/constants";
import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  return (
    <div>
      <Herosection />
      <section className="relative">
        <LeafComponent />
        <div className="globalContainer py-16">
          <h1 className="text-[39px] text-primary gooper text-center font-medium">
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

      <section className="bg-tertiary py-5">
        <WhyHerbal color={"white"} />
      </section>

      <section className="relative">
        <div className="globalContainer py-16">
          <h1 className="text-[39px] text-primary gooper text-center font-medium">
            How It Works?
          </h1>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between pt-16">
            {/* Left side image */}
            <div className="flex flex-col gap-14">
              {steps.map((item) => (
                <div key={item.number}>
                  <div className="flex items-start gap-4">
                    {/* Circle with number */}
                    <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-[#E6E89A] flex-shrink-0">
                      <span className="text-green-900 font-semibold text-xl ">
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
              <button className="mt-3 inline-flex items-center gap-3 bg-[#F7C914] text-primary px-7 py-[10px] rounded-full text-[25px] transition-all duration-300 hover:shadow-lg hover:scale-105 group w-fit">
                Questionnaire
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Right side text and grid */}
            <div className="w-[45%]">
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

      <section className="bg-tertiary py-16">
        <div className="globalContainer">
          <h1 className="text-[39px] gooper text-primary font-medium text-center">
            Simple Pricing for Personalized Support
          </h1>
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

              <button className="bg-[#AED141] text-white px-6 py-3 rounded-lg text-xl transition-colors duration-200 inline-flex items-center gap-2 group">
                Take the Questionnaire
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 text-xl transition-transform duration-200" />
              </button>
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

      <section className="py-16 bg-white">
        <div className="globalContainer px-4">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Members Say
          </h2>
          <TestimonialCard />
        </div>
      </section>
    </div>
  );
};

export default Home;
