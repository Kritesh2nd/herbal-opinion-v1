import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhyHerbal from "@/src/components/WhyHerbal";
import {
  FaDoorOpen,
  FaHeart,
  FaLightbulb,
  FaQuoteLeft,
  FaRegHandshake,
  FaSeedling,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const page = () => {
  const ourJourney = [
    {
      id: 1,
      icon: <FaSeedling />,
      title: "Founded in 2025",
      description:
        "Started by a group of Australian citizens passionate about natural alternatives.",
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      title: "Inspired by Need",
      description:
        "Recognized the gap in accessible, natural support for those with ongoing conditions.",
    },
    {
      id: 3,
      icon: <FaUserDoctor />,
      title: "Professional Partners",
      description:
        "Partnered with experienced healthcare professionals to ensure safety and efficacy.",
    },
    {
      id: 4,
      icon: <FaHeart />,
      title: "Focused Mission",
      description:
        "Dedicated to helping seniors and individuals with long-term conditions find relief naturally.",
    },
  ];

  const resilience = [
    {
      id: 1,
      icon: <FaDoorOpen />,
      title: "Accessibility",
      description:
        "Making natural wellness solutions available to everyone, regardless of location or circumstance.",
    },
    {
      id: 2,
      icon: <FaRegHandshake />,
      title: "Integrity",
      description:
        "Providing honest, transparent recommendations based on what's truly best for each individual.",
    },
    {
      id: 3,
      icon: <FaSeedling />,
      title: "Long-Term Wellbeing",
      description:
        "Supporting sustainable health practices that improve quality of life for years to come.",
    },
  ];

  return (
    <div>
      {/* section 1 */}
      <section className="bg-tertiary gooper font-normal pb-[144px]">
        <div className="globalContainer ">
          <div className="lg:text-[61px] md:text-[49px] sm:text-[31px] text-[25px] py-[64px] text-center ">
            Our Story Begins with a Belief in
            <br />
            <span className="text-primary">Better Healing.</span>
          </div>
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
        <div className="globalContainer flex flex-col py-[70px]">
          <div className="text-[39px] text-center gooper text-lettuce">
            Our Journey
          </div>
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
                <div className="p-4 bg-primary w-fit rounded-[100px] text-white text-2xl">{item.icon}</div>
                <div className="text-xl py-4">{item.title}</div>
                <div className="text-primary-dgray">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="bg-light-green pt-[70px] pb-[86px]">
        <div className="globalContainer flex gap-12  ">
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
            <div className="text-[39px] text-farm-green gooper pb-10">
              About Herbal Opinion
            </div>
            <div className="text-xl pb-5">
              <p>
                {`Herbal Opinion is a specialised online clinic dedicated to
                delivering accessible, high-quality healthcare to patients
                across Australia. We harness the power of digital health
                technologies to seamlessly connect patients with experienced
                healthcare professionals, offering personalised treatment plans
                tailored to individual needs.`}
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
            <div className="flex ">
              <Link
                href="/explore"
                className="bg-secondary rounded-full text-primary text-[25px] pt-4 pb-3 px-6"
              >
                Explore how it works? &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section>
        <WhyHerbal color={"#E5EA988C"} />
      </section>
      {/* section 4 */}
      <section className="bg-light-green">
        <div className="globalContainer flex flex-col gap-[64px] py-[70px]">
          <div className="flex">
            <div className="bg-farm-green w-full rounded-lg pl-2 shadow-[0_4px_6px_rgba(0,0,0,0.10)]">
              <div className="flex flex-col items-center gap-6 bg-white rounded-lg py-[40px] px-[48px]">
                <div className="flex justify-center">
                  <div className="text-[#F5933C] text-3xl">
                    <FaQuoteLeft />
                  </div>
                </div>
                <div className="text-[39px] gooper text-farm-green text-center">
                  We imagine a world where safe, natural
                  <br />
                  support is available to all — especially those
                  <br />
                  who need it most.
                </div>
                <div className="flex justify-center">
                  <span className="h-1 w-20 bg-pumpkin rounded-sm"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[32px]">
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
    </div>
  );
};

export default page;
