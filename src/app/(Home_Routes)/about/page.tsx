import React from "react";
import image1 from "../../../../public/img/about/image1.png";
import image2 from "../../../../public/img/about/image2.png";
import image3 from "../../../../public/img/about/image3.png";
import image4 from "../../../../public/img/about/image4.png";
import image5 from "../../../../public/img/about/image5.png";
import image6 from "../../../../public/img/about/image6.png";
import image7 from "../../../../public/img/about/image7.png";
import image8 from "../../../../public/img/about/image8.png";
import icon1 from "../../../../public/img/about/icon1.png";
import icon2 from "../../../../public/img/about/icon2.png";
import icon3 from "../../../../public/img/about/icon3.png";
import icon4 from "../../../../public/img/about/icon4.png";
import icon5 from "../../../../public/img/about/icon5.png";
import icon6 from "../../../../public/img/about/icon6.png";
import icon7 from "../../../../public/img/about/icon7.png";
import icon8 from "../../../../public/img/about/icon8.png";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const ourJourney = [
    {
      id: 1,
      icon: icon1,
      title: "Founded in 2025",
      description:
        "Started by a group of Australian citizens passionate about natural alternatives.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Inspired by Need",
      description:
        "Recognized the gap in accessible, natural support for those with ongoing conditions.",
    },
    {
      id: 3,
      icon: icon3,
      title: "Professional Partners",
      description:
        "Partnered with experienced healthcare professionals to ensure safety and efficacy.",
    },
    {
      id: 4,
      icon: icon4,
      title: "Focused Mission",
      description:
        "Dedicated to helping seniors and individuals with long-term conditions find relief naturally.",
    },
  ];

  const resilience = [
    {
      id: 1,
      icon: icon7,
      title: "Accessibility",
      description:
        "Making natural wellness solutions available to everyone, regardless of location or circumstance.",
    },
    {
      id: 2,
      icon: icon8,
      title: "Integrity",
      description:
        "Providing honest, transparent recommendations based on what's truly best for each individual.",
    },
    {
      id: 3,
      icon: icon1,
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
                src={image1}
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
                  src={image2}
                  className=" rounded-lg w-full"
                  alt="old couple"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 md:pt-5  ">
              <Image
                src={image3}
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
                className="flex flex-col  rounded-xl bg-light-green p-6 shadow-[0_2px_4px_rgba(0,0,0,0.10)]"
              >
                <div className="pb-4">
                  <Image src={item.icon} alt={item.title} />
                </div>
                <div className="text-xl pb-3">{item.title}</div>
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
            <Image src={image4} className="h-full w-full" alt="doctor" />
          </div>
          <div className="flex flex-col flex-1 min-w-0 ">
            <div className="text-[39px] text-farm-green gooper pb-10">
              About Herbal Opinion
            </div>
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
        <div className="globalContainer ">
          <div className="flex flex-col py-[70px] px-[100px] ">
            <div className="text-center text-lettuce gooper text-[39px]  pb-[64px]">
              Why Herbal Opinion?
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col flex-1 min-w-0  rounded-sm px-6 pt-6 bg-llight-green">
                <div className="flex gap-4 pb-4">
                  <div>
                    <Image src={icon1} alt="icon1" />
                  </div>
                  <div className="flex items-center text-[25px] text-farm-green -mb-2">
                    Natural Solutions
                  </div>
                </div>
                <div className="text-xl">
                  We focus on plant-based alternatives that work with your body
                  naturally.
                </div>
                <div className="flex justify-end">
                  <Image src={image5} className="-mr-6 -mr-b-6" alt="image5" />
                </div>
              </div>
              <div className="flex flex-col flex-1 min-w-0 gap-5 ">
                <div className="flex flex-1 bg-llight-green p-6 rounded-sm">
                  <div className="w-[200px]">
                    <Image src={image6} className="w-full" alt="image6" />
                  </div>
                  <div>
                    <div className="flex pb-4 gap-4 ">
                      <div>
                        <Image src={icon5} alt="icon5" />
                      </div>
                      <div className="flex items-center text-[25px] text-farm-green -mb-2">
                        Doctor Approved
                      </div>
                    </div>
                    <div className="text-xl">
                      All our recommendations are reviewed by qualified
                      healthcare professionals.
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 bg-llight-green p-6 rounded-sm gap-3">
                  <div>
                    <div className="flex pb-4 gap-4 ">
                      <div>
                        <Image src={icon6} alt="icon6" />
                      </div>
                      <div className="flex items-center text-[25px] text-farm-green -mb-2">
                        Discreet & Simple
                      </div>
                    </div>
                    <div className="text-xl">
                      Our process is easy to navigate with privacy as our
                      priority.
                    </div>
                  </div>
                  <div className="w-[200px]">
                    <Image src={image7} className="w-full" alt="image7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* section 4 */}
      <section className="bg-light-green">
        <div className="globalContainer flex flex-col gap-[64px] py-[70px]">
          <div className="flex">
            <div className="bg-farm-green w-full rounded-lg pl-2 shadow-[0_4px_6px_rgba(0,0,0,0.10)]">
              <div className="flex flex-col items-center gap-6 bg-white rounded-lg py-[40px] px-[48px]">
                <div className="flex justify-center">
                  <Image src={image8} alt="image8" />
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
                <div className="flex justify-center pb-6">
                  <Image src={item.icon} alt={item.title} />
                </div>
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
