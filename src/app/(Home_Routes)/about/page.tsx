import React from "react";
import Image from "next/image";
import WhyHerbal from "@/src/components/WhyHerbal";
import { FaQuoteLeft } from "react-icons/fa";
import PrimaryButton from "@/src/components/PrimaryButton";
import { ourJourney, resilience } from "@/src/constants";
import Faq from "@/src/components/Faq";
import TestimonialCard from "@/src/components/TestimonialCard";
import LeafComponent from "@/src/components/LeafComponent";

const page = () => {
  return (
    <div>
      {/* section 1 */}
      <section className="bg-tertiary  font-normal pb-[144px]">
        <div className="globalContainer ">
          <h1 className="titleLevel1 py-[64px] gooper">
            Our Story Begins with a Belief in
            <br />
            <span className="text-primary">Better Healing.</span>
          </h1>
          <div className="flex  flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/3  md:pt-5 ">
              <Image
                src="/img/about/image1.png"
                width={500}
                height={500}
                className="rounded-lg w-full"
                alt="old couple"
              />
            </div>
            <div className="flex flex-col gap-5 w-full md:w-1/3  md:pb-5 ">
              <div className="px-8 py-5 bg-white rounded-lg text-xl">
                “Founded by <b>Australians</b> who believe in natural wellness
                and compassionate care, especially for those who need it most.”
              </div>
              <div>
                <Image
                  src="/img/about/image2.png"
                  width={500}
                  height={500}
                  className=" rounded-lg w-full"
                  alt="old couple"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 md:pt-5  ">
              <Image
                src="/img/about/image3.png"
                width={500}
                height={500}
                className=" rounded-lg w-full"
                alt="old couple"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section>
        <div className="relative">
          <LeafComponent
            mainStyle="h-105 w-48 hidden sm:block"
            direction="left"
            subStyle="-left-30  rotate-[260deg] top-6"
          />
          <LeafComponent
            mainStyle="h-32 w-25 sm:hidden block"
            direction="left"
            subSize="h-45 w-45"
            subStyle="-left-17  rotate-[268deg] -top-6"
          />
        </div>
        <div className="globalContainer flex flex-col py-[70px]">
          <h2 className="gooper text-lettuce titleLevel2">Our Journey</h2>
          <div className="text-xl text-center text-primary-dgray pb-[64px]">
            The path that brought us to where we are today, guided by our
            <br />
            commitment to natural healing.
          </div>
          <div className="flex md:flex-row flex-col md:grid-cols-2  gap-8 pb-10">
            {ourJourney.map((item) => (
              <div
                key={item.id}
                className="flex flex-col  rounded-xl bg-[#F1F4C7] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.10)]"
              >
                <div className="p-4 bg-primary w-fit rounded-[100px] text-white text-2xl">
                  {item.icon}
                </div>
                <div className="text-xl py-4">{item.title}</div>
                <div className="text-primary-dgray">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="bg-light-green pt-[70px] pb-[86px]">
        <div className="globalContainer flex flex-col sm:flex-row gap-12  ">
          <div className="flex-1 min-w-0 ">
            <Image
              src="/img/about/image4.png"
              width={500}
              height={500}
              className="h-full w-full"
              alt="doctor"
            />
          </div>
          <div className="flex flex-col flex-1 min-w-0 ">
            <h2 className="text-farm-green gooper titleLevel2 pb-10 text-left">
              About Herbal Opinion
            </h2>
            <div className="text-xl pb-5">
              <p>
                Herbal Opinion is a specialised online clinic dedicated to
                delivering accessible, high-quality healthcare to patients
                across Australia. We harness the power of digital health
                technologies to seamlessly connect patients with experienced
                healthcare professionals, offering personalised treatment plans
                tailored to individual needs.
              </p>
              <br />
              <p>
                Our user-friendly online platform ensures that patients receive
                expert medical guidance and care from the comfort of their own
                homes, eliminating barriers to access and providing
                comprehensive healthcare solutions.
              </p>
              <br />
              <p>
                At Herbal Opinion, we are committed to enhancing the patient
                experience by delivering timely, effective, and compassionate
                care — no matter where you are in Australia.
              </p>
              <br />
              <br />
              <p>Want to learn more about our approach to care?</p>
            </div>
            <div className="flex">
              <PrimaryButton
                title="Explore how it works?"
                url="/how-it-works"
                py="py-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section>
        <WhyHerbal color={"#E5EA988C"} />
      </section>

      {/* section 5 */}
      <section className="bg-light-green">
        <div className="relative">
          <LeafComponent
            mainStyle="h-105 w-34 hidden sm:block"
            direction="right"
            subStyle="right-21 rotate-[22deg] top-6"
          />
          <LeafComponent
            mainStyle="h-40 w-12 sm:hidden block"
            direction="right"
            subSize="h-40 w-40"
            subStyle="right-11  rotate-[30deg] top-0"
          />
        </div>
        <div className="globalContainer flex flex-col sm:gap-[64px] gap-[20px] py-[70px]">
          <div className="flex">
            <div className="bg-farm-green w-full rounded-lg pl-2 shadow-[0_4px_6px_rgba(0,0,0,0.10)]">
              <div className="flex flex-col items-center gap-6 bg-white rounded-lg py-[40px] px-[48px]">
                <div className="flex justify-center">
                  <div className="text-[#F5933C] text-3xl">
                    <FaQuoteLeft />
                  </div>
                </div>
                <h2 className="gooper text-farm-green titleLevel2">
                  We imagine a world where safe, natural
                  <span className="sm:inline hidden">
                    <br />
                  </span>
                  support is available to all — especially those
                  <span className="sm:inline hidden">
                    <br />
                  </span>
                  who need it most.
                </h2>
                <div className="flex justify-center">
                  <span className="h-1 w-20 bg-pumpkin rounded-sm"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-[32px] gap-[20px]">
            {resilience.map((item) => (
              <div
                key={item.id}
                className="flex flex-col flex-1 min-w-0 p-[32px] bg-white rounded-xl text-center"
              >
                <div className="flex justify-center pb-6">{item.icon}</div>
                <div className="pb-4 text-xl text-farm-green">{item.title}</div>
                <div className="text-primary-dgray">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section className="bg-white py-25">
        <div className="globalContainer flex flex-col">
          <h2 className="gooper text-farm-green titleLevel2 pb-2">
            The People Behind Herbal Opinion
          </h2>
          <div className="text-xl text-primary-dgray text-center sm:pb-[66px] pb-[40px]">
            Our community of care providers, experts, and advocates working
            together to
            <span className="hidden sm:inline ">
              <br />
            </span>
            support your wellness journey.
          </div>
          <div className="flex flex-col justify-between sm:flex-row gap-4 sm:px-20">
            <div className="sm:h-[350px] h-[calc(100vw-60px)] sm:w-[360px] w-[calc(100vw-40px)] relative rounded-2xl overflow-hidden">
              <Image
                src="/img/about/old-people-1.png"
                className=""
                fill
                alt="old-people-1"
              />
            </div>
            <div className="sm:h-[350px] h-[calc(100vw-60px)] sm:w-[360px] w-[calc(100vw-40px)] relative rounded-2xl overflow-hidden">
              <Image
                src="/img/about/old-people-2.png"
                className=""
                fill
                alt="old-people-2"
              />
            </div>
            <div className="sm:h-[350px] h-[calc(100vw-60px)] sm:w-[360px] w-[calc(100vw-40px)] relative rounded-2xl overflow-hidden">
              <Image
                src="/img/about/old-people-3.png"
                className=""
                fill
                alt="old-people-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 7 */}
      <section className="bg-light-green">
        <TestimonialCard bgwhite={true} />
      </section>

      {/* section 8 */}
      <section>
        <Faq />
      </section>
    </div>
  );
};

export default page;
